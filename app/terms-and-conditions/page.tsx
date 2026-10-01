import PolicyPage from '../../components/PolicyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms & Conditions | SAM Embroidery & Maggam Designs', description: 'Terms for browsing the website and requesting custom embroidery and apparel services.' };

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      intro="The terms that apply when you browse our website or request our embroidery and customization services."
      sections={[
        { title: 'Services and quotations', content: <p>Services, prices, timelines and materials are discussed for each enquiry. A quotation is not a confirmed order until we agree the details and receive any required advance payment.</p> },
        { title: 'Customer-supplied materials', content: <p>You are responsible for ensuring that fabrics, photographs, logos and other materials supplied to us are yours to use and suitable for the requested work. We will handle them with reasonable care.</p> },
        { title: 'Design approval', content: <p>Please check design details, spellings, sizes and colours before work begins. Custom work may vary slightly from reference images because of fabric, thread and handcrafted finishing.</p> },
        { title: 'Intellectual property', content: <p>Our original branding, photographs and website content may not be copied or used commercially without permission. You remain responsible for rights in customer-supplied designs and images.</p> },
        { title: 'Website use', content: <p>Do not misuse this website, attempt unauthorised access, or submit unlawful, harmful or infringing content. We may update, suspend or remove content without notice.</p> },
      ]}
    />
  );
}
