import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import siteIcon from '../icon.png';
import appleIcon from '../apple-icon.png';
import './globals.css';
const serif=Cormorant_Garamond({subsets:['latin'],variable:'--serif',weight:['400','500','600','700']});
const sans=Inter({subsets:['latin'],variable:'--sans'});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://www.unbelievablecoincidence.com'),title:{default:'Unbelievable Coincidence',template:'%s — Unbelievable Coincidence'},description:'True stories of chance, connection, and the nearly impossible.',alternates:{canonical:'/'},icons:{icon:siteIcon.src,shortcut:siteIcon.src,apple:appleIcon.src},openGraph:{title:'Unbelievable Coincidence',description:'True stories of chance, connection, and the nearly impossible.',url:'/',siteName:'Unbelievable Coincidence',type:'website'},twitter:{card:'summary',title:'Unbelievable Coincidence',description:'True stories of chance, connection, and the nearly impossible.'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>}
