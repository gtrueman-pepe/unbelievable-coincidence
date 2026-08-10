'use server';
import {createServerClient} from '@supabase/ssr';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';
import {Resend} from 'resend';
import {adminDb} from '@/lib/supabase';

const SITE_URL=process.env.NEXT_PUBLIC_SITE_URL||'https://www.unbelievablecoincidence.com';
function slugify(s:string){return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').slice(0,70)+'-'+Date.now().toString(36)}
async function requireOwner(){const jar=await cookies();const supabase=createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll:()=>jar.getAll(),setAll:()=>{}}});const {data:{user}}=await supabase.auth.getUser();if(!user||user.email?.toLowerCase()!==(process.env.OWNER_EMAIL||'gtrueman@gmail.com').toLowerCase())redirect('/login');}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]!));}
function fill(value:string,vars:Record<string,string>){return value.replace(/{{\s*(story_title|story_url|site_url)\s*}}/g,(_,key:string)=>vars[key]||'');}
function messageHtml(body:string,storyUrl:string){return body.split(/\r?\n\s*\r?\n/).map(p=>`<p>${escapeHtml(p).replace(/\r?\n/g,'<br>').replaceAll(escapeHtml(storyUrl),`<a href="${escapeHtml(storyUrl)}">${escapeHtml(storyUrl)}</a>`)}</p>`).join('');}
function maskEmail(email:string){const [name,domain='']=email.split('@');return `${name.slice(0,1)}***@${domain}`;}
async function sendDecision(args:{submissionId:string;decision:'approved'|'rejected';to:string;subject:string;body:string;storyUrl:string}){
  const db=adminDb();let status='sent',providerId:string|null=null,errorMessage:string|null=null;
  try{const resend=new Resend(process.env.RESEND_API_KEY);const {data,error}=await resend.emails.send({from:process.env.EMAIL_FROM!,to:args.to,subject:args.subject,html:messageHtml(args.body,args.storyUrl)});if(error)throw new Error(error.message);providerId=data?.id||null;}
  catch(error){status='failed';errorMessage=error instanceof Error?error.message:'Unknown delivery error';}
  const {error:logError}=await db.from('decision_email_log').insert({submission_id:args.submissionId,decision:args.decision,subject:args.subject,recipient_masked:maskEmail(args.to),delivery_status:status,provider_message_id:providerId,error_message:errorMessage});if(logError)throw logError;
}
function refresh(slug?:string){revalidatePath('/');revalidatePath('/admin');if(slug)revalidatePath(`/stories/${slug}`);}

export async function moderate(formData:FormData){
  await requireOwner();const id=String(formData.get('id'));const action=String(formData.get('action'));const db=adminDb();
  if(action!=='approve'&&action!=='reject')throw new Error('Invalid editorial decision.');
  const subject=String(formData.get('subject')).trim();const body=String(formData.get('message')).trim();
  if(subject.length<1||subject.length>200||body.length<1||body.length>5000)throw new Error('Please check the email subject and message.');
  const {data,error}=await db.from('submissions').select('*').eq('id',id).eq('status','pending_review').single();if(error||!data)throw new Error('Submission is no longer awaiting review.');
  let slug:string|undefined;let decision:'approved'|'rejected';
  if(action==='approve'){slug=slugify(data.title);const {error:storyError}=await db.from('stories').insert({submission_id:id,slug,title:data.title,byline:data.byline,body:data.body,display:true});if(storyError)throw storyError;decision='approved';}else decision='rejected';
  const {error:updateError}=await db.from('submissions').update({status:decision,reviewed_at:new Date().toISOString(),email_delete_after:new Date(Date.now()+90*24*60*60*1000).toISOString()}).eq('id',id);if(updateError)throw updateError;
  const storyUrl=slug?`${SITE_URL}/stories/${slug}`:SITE_URL;const vars={story_title:data.title,story_url:storyUrl,site_url:SITE_URL};
  await sendDecision({submissionId:id,decision,to:data.email,subject:fill(subject,vars),body:fill(body,vars),storyUrl});refresh(slug);
}

export async function saveNotificationTemplates(formData:FormData){await requireOwner();const db=adminDb();for(const kind of ['approved','rejected'] as const){const subject=String(formData.get(`${kind}_subject`)).trim();const body=String(formData.get(`${kind}_body`)).trim();if(!subject||subject.length>200||!body||body.length>5000)throw new Error('Please check both templates.');const {error}=await db.from('notification_templates').upsert({kind,subject,body,updated_at:new Date().toISOString()},{onConflict:'kind'});if(error)throw error;}revalidatePath('/admin');}

export async function updateStory(formData:FormData){await requireOwner();const id=String(formData.get('id'));const title=String(formData.get('title')).trim();const byline=String(formData.get('byline')).trim();const body=String(formData.get('body')).trim();if(title.length<3||title.length>80||!byline||byline.length>60||body.length<1||body.length>8000)throw new Error('Please check the title, byline, and story length.');const db=adminDb();const {data:story,error}=await db.from('stories').update({title,byline,body}).eq('id',id).select('slug,submission_id').single();if(error)throw error;if(story.submission_id)await db.from('submissions').update({title,byline,body}).eq('id',story.submission_id);refresh(story.slug);}
export async function toggleDisplay(formData:FormData){await requireOwner();const id=String(formData.get('id'));const display=String(formData.get('display'))==='true';const {data,error}=await adminDb().from('stories').update({display}).eq('id',id).select('slug').single();if(error)throw error;refresh(data.slug);}
