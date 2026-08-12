import { createClient } from '@supabase/supabase-js';
export type Story={id:string;slug:string;title:string;byline:string;body:string;published_at:string;archive_number:number;rating_count:number;rating_total:number};
export function publicDb(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);}
export function adminDb(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SERVICE_ROLE_KEY!,{auth:{persistSession:false}});}
