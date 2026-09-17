import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAM Embroidery & Maggam Designs | Hyderabad',
  description: 'Premium embroidery, Maggam work, saree and blouse designing, ethnic wear customization, T-shirt logos and personalized designs in Hyderabad.',
  metadataBase: new URL('https://sam-embroidery-maggam-designs.vercel.app'),
  openGraph: { title:'SAM Embroidery & Maggam Designs', description:'Stitching Elegance, Creating Emotions', type:'website' },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
