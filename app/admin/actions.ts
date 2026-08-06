'use server';
import {createServerClient} from '@supabase/ssr';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';
import {Resend} from 'resend';
import {adminDb} from '@/lib/supabase';

function slugify(s:string){return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').slice(0,70)+'-'+Date.now().toString(36)}
async function requireOwner(){const jar=await cookies();const supabase=createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll:()=>jar.getAll(),setAll:()=>{}}});const {data:{user}}=await supabase.auth.getUser();if(!user||user.email?.toLowerCase()!==(process.env.OWNER_EMAIL||'gtrueman@gmail.com').toLowerCase())redirect('/login');}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]!));}
async function notify(to:string,subject:string,paragraphs:string[]){const resend=new Resend(process.env.RESEND_API_KEY);const {error}=await resend.emails.send({from:process.env.EMAIL_FROM!,to,subject,html:paragraphs.map(p=>`<p>${p}</p>`).join('')});if(error)throw new Error(error.message);}
function refresh(slug?:string){revalidatePath('/');revalidatePath('/admin');if(slug)revalidatePath(`/stories/${slug}`);}

export async function moderate(formData:FormData){
  await requireOwner();const id=String(formData.get('id'));const action=String(formData.get('action'));const db=adminDb();
  const {data,error}=await db.from('submissions').select('*').eq('id',id).eq('status','pending_review').single();if(error||!data)throw new Error('Submission is no longer awaiting review.');
  if(action==='approve'){
    const slug=slugify(data.title);const {error:storyError}=await db.from('stories').insert({submission_id:id,slug,title:data.title,byline:data.byline,body:data.body,display:true});if(storyError)throw storyError;
    const {error:updateError}=await db.from('submissions').update({status:'approved',reviewed_at:new Date().toISOString()}).eq('id',id);if(updateError)throw updateError;
    await notify(data.email,'Congratulations! Your story was approved.',[`Thank you for sharing your Unbelievable Coincidence story. It now joins the others at <a href="${process.env.NEXT_PUBLIC_SITE_URL}/stories/${slug}">unbelievablecoincidence.com</a> where it can be marveled at and rated.`]);refresh(slug);
  }else if(action==='reject'){
    const {error:updateError}=await db.from('submissions').update({status:'rejected',reviewed_at:new Date().toISOString()}).eq('id',id);if(updateError)throw updateError;
    await notify(data.email,'Sorry. Your story was not accepted.',[
      'The story you submitted, while it was undoubtedly unbelievable or full of coincidence, did not meet our high standards.',
      'Just a reminder that stories involving fortunetellers, games of chance, or merely weird or profoundly headscratching incidents do not conceptually qualify.',
      'In cases of the extreme unbelievability, Unbelievable Coincidence management may request witnesses or other forms of documentation to validate the unbelievablosity and/or coincidentality.'
    ]);refresh();
  }
}

export async function updateStory(formData:FormData){
  await requireOwner();const id=String(formData.get('id'));const title=String(formData.get('title')).trim();const byline=String(formData.get('byline')).trim();const body=String(formData.get('body')).trim();
  if(title.length<3||title.length>80||!byline||byline.length>60||body.length<1||body.length>8000)throw new Error('Please check the title, byline, and story length.');
  const db=adminDb();const {data:story,error}=await db.from('stories').update({title,byline,body}).eq('id',id).select('slug,submission_id').single();if(error)throw error;
  if(story.submission_id)await db.from('submissions').update({title,byline,body}).eq('id',story.submission_id);
  refresh(story.slug);
}

export async function toggleDisplay(formData:FormData){await requireOwner();const id=String(formData.get('id'));const display=String(formData.get('display'))==='true';const {data,error}=await adminDb().from('stories').update({display}).eq('id',id).select('slug').single();if(error)throw error;refresh(data.slug);}
