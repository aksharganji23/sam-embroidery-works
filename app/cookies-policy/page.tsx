import PolicyPage from '../../components/PolicyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Cookies Policy | SAM Embroidery & Maggam Designs', description: 'Details of the limited local browser storage used by the SAM Embroidery website.' };

export default function CookiesPolicyPage() {
  return (
    <PolicyPage
      title="Cookies Policy"
      intro="This page explains the limited browser storage used by this static website."
      sections={[
        { title: 'What we use', content: <p>This website currently uses essential local browser storage, rather than advertising or analytics cookies, to remember whether you accepted or rejected non-essential cookies. The preference is stored under <code>sam-embroidery-cookie-consent</code>.</p> },
        { title: 'Your choice', content: <p>The consent banner lets you accept or reject non-essential cookies. You can remove the saved preference by clearing this site&apos;s browser storage; the banner will then appear again.</p> },
        { title: 'Third-party links', content: <p>Links to WhatsApp, Instagram, email and telephone services open or use third-party services that have their own privacy and cookie policies. Review those policies when using those services.</p> },
        { title: 'Changes', content: <p>If we add analytics, advertising or other non-essential technologies, we will update this policy and the consent controls before using them.</p> },
      ]}
    />
  );
}
