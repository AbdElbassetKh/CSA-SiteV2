import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  pattern?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, pattern, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('relative overflow-hidden', className)}
        {...props}
      >
        {pattern && <div className="grid-pattern" />}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };