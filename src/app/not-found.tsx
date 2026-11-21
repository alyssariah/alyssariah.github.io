import Link from 'next/link';

import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="font-serif text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block text-primary hover:underline">
        Back home
      </Link>
    </Container>
  );
}
