import type {MetadataRoute} from 'next';
import {publicDb} from '@/lib/supabase';

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://www.unbelievablecoincidence.com';

export const revalidate=3600;

export default async function sitemap():Promise<MetadataRoute.Sitemap>{const pages:MetadataRoute.Sitemap=[{url:siteUrl,lastModified:new Date(),changeFrequency:'weekly',priority:1},{url:`${siteUrl}/submit`,lastModified:new Date(),changeFrequency:'monthly',priority:.7}];if(!process.env.NEXT_PUBLIC_SUPABASE_URL||!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)return pages;const {data}=await publicDb().from('published_stories').select('slug,published_at').order('published_at',{ascending:false});return [...pages,...(data||[]).map(story=>({url:`${siteUrl}/stories/${story.slug}`,lastModified:new Date(story.published_at),changeFrequency:'monthly' as const,priority:.8}))]}
