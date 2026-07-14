import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
const serif=Cormorant_Garamond({subsets:['latin'],variable:'--serif',weight:['400','500','600','700']});
const sans=Inter({subsets:['latin'],variable:'--sans'});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://unbelievablecoincidence.com'),title:{default:'Unbelievable Coincidence',template:'%s — Unbelievable Coincidence'},description:'True stories of chance, connection, and the nearly impossible.',openGraph:{title:'Unbelievable Coincidence',description:'True stories of chance, connection, and the nearly impossible.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>}
