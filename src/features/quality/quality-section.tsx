import featureBg from '@/assets/backgrounds/feature-bg.jpg';
import { BackgroundImage } from '@/components/ui/background-image';
import { ButtonLink } from '@/components/ui/button-link';
import { Container } from '@/components/ui/container';
import { homeContent } from '@/content/home';

/**
 * Full-width laptop photo with copy in the right half, as on the Hugo site.
 * The photo's empty right side is the text area; it's pinned left so the
 * laptop stays in view at every width.
 */
export function QualitySection() {
  const { title, body, technologies, cta } = homeContent.quality;
  return (
    <section
      aria-labelledby="quality-heading"
      className="relative isolate overflow-hidden bg-surface py-20 sm:py-24"
    >
      <BackgroundImage
        image={featureBg}
        sizes="100vw"
        parallax
        className="-z-20"
        imageClassName="object-left"
      />
      {/* Below md the copy sits over the laptop, so wash the photo out for contrast. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-surface/85 md:hidden" />
      <Container className="grid md:grid-cols-2">
        <div className="md:col-start-2">
          <h2
            id="quality-heading"
            className="text-2xl font-semibold tracking-wide uppercase sm:text-[28px]"
          >
            {title}
          </h2>
          <p className="mt-6 text-muted">{body}</p>
          <p className="mt-6 text-muted">
            <span className="font-semibold text-foreground">Technologies:</span> {technologies}
          </p>
          <ButtonLink href={cta.href} variant="neutral" className="mt-8">
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
