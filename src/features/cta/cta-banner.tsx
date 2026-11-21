import ctaBg from '@/assets/backgrounds/call-to-action-bg.jpg';
import { ButtonLink } from '@/components/ui/button-link';
import { ImageBanner } from '@/components/ui/image-banner';
import { homeContent } from '@/content/home';

export function CtaBanner() {
  const { title, body, button } = homeContent.cta;
  return (
    <section aria-labelledby="cta-heading">
      <ImageBanner image={ctaBg} parallax className="min-h-[320px] py-20">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">{body}</p>
        <ButtonLink href={button.href} className="mt-8">
          {button.label}
        </ButtonLink>
      </ImageBanner>
    </section>
  );
}
