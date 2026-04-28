import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Tone = 'sage' | 'rust' | 'cream' | 'ink';

const tones: Record<Tone, string> = {
  sage: 'bg-sage-50 text-sage-500 border-sage-100',
  rust: 'bg-rust-50 text-rust-500 border-rust-100',
  cream: 'bg-cream-100 text-ink-muted border-cream-300',
  ink: 'bg-ink text-cream-50 border-ink',
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = 'cream', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-pill border px-2.5 py-0.5 text-xs font-medium',
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
