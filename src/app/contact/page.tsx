import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { ContactDetails } from '@/features/contact/contact-details';

const description =
  'Ready to take your project to the next level? Get in touch to talk about solutions tailored to your needs and budget.';

export const metadata: Metadata = { title: 'Drop Me A Note', description };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Drop Me A Note" description={description} />
      <ContactDetails />
    </>
  );
}
