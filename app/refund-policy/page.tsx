import PolicyPage from '../../components/PolicyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Refund Policy | SAM Embroidery & Maggam Designs', description: 'Review cancellation, custom order and defect resolution terms for SAM Embroidery.' };

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund Policy"
      intro="Our approach to advances, cancellations and custom-made embroidery work."
      sections={[
        { title: 'Custom orders', content: <p>Because embroidery, Maggam work and personalized products are made to your specifications, confirmed custom orders are generally non-refundable once materials have been purchased or work has started.</p> },
        { title: 'Cancellations', content: <p>Contact us as soon as possible if you need to cancel. We will review the order stage and may be able to refund an unused balance, after deducting committed material, design or work costs.</p> },
        { title: 'Defects or mistakes', content: <p>If an item has a manufacturing defect or does not match the approved specifications, notify us with photographs within 48 hours of delivery or collection. We will assess the issue and, where appropriate, repair, remake or provide a suitable resolution.</p> },
        { title: 'Delivery and collection', content: <p>Delays caused by unavailable customer materials, late approvals, incorrect details or circumstances outside our reasonable control may affect timelines and do not automatically qualify for a refund.</p> },
        { title: 'How to request help', content: <p>Send your order details and photographs to our email address or WhatsApp number. We will review the request and respond with the available resolution.</p> },
      ]}
    />
  );
}
