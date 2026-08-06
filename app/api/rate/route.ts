import {NextRequest,NextResponse} from 'next/server';
import crypto from 'crypto';
import {z} from 'zod';
import {adminDb} from '@/lib/supabase';

const Schema=z.object({storyId:z.string().uuid(),rating:z.number().int().min(1).max(5)});

export async function POST(req:NextRequest){
  try{
    const parsed=Schema.safeParse(await req.json());
    if(!parsed.success)return NextResponse.json({error:'Invalid rating.'},{status:400});
    let voter=req.cookies.get('uc_voter')?.value;
    const isNew=!voter;
    if(!voter)voter=crypto.randomUUID();
    const voterHash=crypto.createHash('sha256').update(`${voter}:${process.env.RATING_SECRET||process.env.SUPABASE_SERVICE_ROLE_KEY}`).digest('hex');
    const {data,error}=await adminDb().rpc('rate_story',{p_story_id:parsed.data.storyId,p_rating:parsed.data.rating,p_voter_hash:voterHash}).single();
    if(error){
      if(error.code==='23505')return NextResponse.json({error:'You have already rated this story.'},{status:409});
      throw error;
    }
    const result=data as {rating_count:number;rating_total:number};
    const response=NextResponse.json({count:result.rating_count,total:result.rating_total,average:result.rating_count?result.rating_total/result.rating_count:0});
    if(isNew)response.cookies.set('uc_voter',voter,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',maxAge:60*60*24*365,path:'/'});
    return response;
  }catch{return NextResponse.json({error:'The rating could not be saved.'},{status:500});}
}
