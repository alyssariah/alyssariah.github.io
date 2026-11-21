import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import type { Project } from '@/content/schema';

import { LivePreview } from './live-preview';

export function ProjectDetail({ project }: { project: Project }) {
  const { title, image, details, body, highlights, highlightsTitle, links } = project;
  const screenshot = (
    <Image
      src={image.src}
      alt={image.alt}
      placeholder="blur"
      priority
      sizes="(min-width: 1024px) 66vw, 100vw"
      className="w-full rounded-md border border-border"
    />
  );
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        {links.live ? (
          <LivePreview url={links.live} title={title}>
            {screenshot}
          </LivePreview>
        ) : (
          screenshot
        )}
        <aside aria-labelledby="details-heading">
          <h2 id="details-heading" className="border-b border-border pb-3 font-semibold">
            Project Details
          </h2>
          <dl className="mt-2 divide-y divide-border text-sm">
            {details.map((d) => (
              <div key={d.label} className="grid grid-cols-[110px_1fr] gap-3 py-3">
                <dt className="text-muted">{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
          {(links.live ?? links.code) && (
            <div className="mt-6 flex gap-5 text-sm font-medium">
              {links.live && (
                <ExternalLink href={links.live} className="text-primary hover:underline">
                  Visit live site
                </ExternalLink>
              )}
              {links.code && (
                <ExternalLink href={links.code} className="text-primary hover:underline">
                  Source code
                </ExternalLink>
              )}
            </div>
          )}
        </aside>
      </div>

      <div className="mt-12 max-w-4xl space-y-5 text-muted">
        {body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        {highlights.length > 0 && (
          <>
            <h2 className="pt-4 font-semibold text-foreground">{highlightsTitle}</h2>
            <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Container>
  );
}
