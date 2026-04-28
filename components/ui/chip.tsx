'use client';

import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Chip({ selected, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        'shrink-0 rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-colors',
        selected
          ? 'border-sage-400 bg-sage-400 text-cream-50'
          : 'border-cream-300 bg-cream-50 text-ink hover:border-sage-200 hover:bg-cream-100',
        className,
      )}
      {...props}
    />
  );
}
