import { cn } from '@/lib/utils';

interface SectionTitleProps {
  id?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export function SectionTitle({
  id,
  title,
  description,
  align = 'center',
  as: Heading = 'h2',
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center')}>
      <Heading id={id} className="text-2xl font-semibold tracking-wide uppercase sm:text-[28px]">
        {title}
      </Heading>
      {description && (
        <p className={cn('mt-4 text-muted italic', align === 'center' && 'mx-auto max-w-3xl')}>
          {description}
        </p>
      )}
    </div>
  );
}
