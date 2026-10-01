import type { Metadata } from 'next';
import CookieConsent from '../components/CookieConsent';
import { contact } from '../data/site';
import './globals.css';

export const metadata: Metadata = {
  title: 'SAM Embroidery & Maggam Designs | Hyderabad',
  description: 'Premium embroidery, Maggam work, saree and blouse designing, ethnic wear customization, T-shirt logos and personalized designs in Hyderabad.',
  metadataBase: new URL('https://sam-embroidery-maggam-designs.vercel.app'),
  openGraph: { title:'SAM Embroidery & Maggam Designs', description:'Stitching Elegance, Creating Emotions', type:'website' },
  robots: { index:true, follow:true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] bg-[#fffdf8] px-4 py-3 text-[#5a1027] focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SAM Embroidery & Maggam Designs',
            url: 'https://sam-embroidery-maggam-designs.vercel.app',
            email: contact.email,
            telephone: `+91-${contact.mahi}`,
            image: 'https://sam-embroidery-maggam-designs.vercel.app/images/crops/maggam-jewelry.jpg',
            address: { '@type': 'PostalAddress', streetAddress: contact.address, addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
            areaServed: ['Hyderabad', 'Secunderabad', 'Telangana'],
            priceRange: '$$',
            serviceType: ['Embroidery', 'Maggam work', 'Saree and blouse designing', 'Custom apparel printing'],
          }) }}
        />
        <CookieConsent />
      </body>
    </html>
  );
}
