import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

const PageTitle = forwardRef<HTMLDivElement, PageTitleProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn('text-center mb-16', className)}
        {...props}
      >
        <h1 className="text-4xl font-bold mb-4">
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {i > 0 && ' '}
              {i === title.split(' ').length - 1 ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className="text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }
);

PageTitle.displayName = 'PageTitle';

export { PageTitle };
