import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { experience } from '@/content/experience';

export function ExperienceTimeline() {
  return (
    <section aria-labelledby="experience-heading" className="border-y border-border py-20 sm:py-24">
      <Container className="max-w-4xl">
        <SectionTitle id="experience-heading" title="Experience" />
        <ol className="relative border-l-2 border-primary/30">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative mb-12 pl-8 last:mb-0">
              <span
                aria-hidden
                className="absolute top-1.5 -left-[9px] size-4 rounded-full border-2 border-primary bg-background"
              />
              <p className="text-sm text-muted">
                {job.start} – {job.end} · {job.type}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {job.role} <span className="font-normal text-primary">@ {job.company}</span>
              </h3>
              {job.summary && <p className="mt-2 text-muted">{job.summary}</p>}
              {job.highlights.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-primary">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
