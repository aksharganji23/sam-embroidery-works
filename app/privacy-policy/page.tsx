import PolicyPage from '../../components/PolicyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy | SAM Embroidery & Maggam Designs', description: 'Learn how SAM Embroidery & Maggam Designs uses and protects enquiry and customer information.' };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How SAM Embroidery & Maggam Designs collects, uses and protects information shared through this website."
      sections={[
        { title: 'Information we receive', content: <p>When you contact us by WhatsApp, phone, email or Instagram, we may receive your name, contact details, measurements, design preferences and any information you choose to provide for an enquiry or order.</p> },
        { title: 'How we use information', content: <p>We use enquiry information to respond to you, prepare quotations, fulfil orders, coordinate delivery or collection, and provide customer support. We do not sell personal information or use it for unrelated marketing without your permission.</p> },
        { title: 'Sharing and retention', content: <p>We share information only with service providers or delivery partners when needed to complete your request, or when required by law. We keep information only for as long as reasonably necessary for business, legal and accounting purposes.</p> },
        { title: 'Your choices', content: <p>You may ask us to correct or delete information we hold about you, subject to records we must retain by law. Contact us using the email address below to make a request.</p> },
        { title: 'Updates', content: <p>We may update this policy when our services or legal obligations change. The latest version will always be published on this page.</p> },
      ]}
    />
  );
}
