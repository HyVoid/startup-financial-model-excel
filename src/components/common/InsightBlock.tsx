import React from 'react';
import { Lightbulb, AlertTriangle } from 'lucide-react';

interface InsightBlockProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'insight' | 'anomaly';
  className?: string;
}

export const InsightBlock: React.FC<InsightBlockProps> = ({
  title,
  children,
  variant = 'insight',
  className = '',
}) => {
  const isAnomaly = variant === 'anomaly';

  return (
    <div
      className={`${
        isAnomaly ? 'anomaly-block' : 'insight-block'
      } flex items-start gap-3 my-4 ${className}`}
    >
      <div className="mt-0.5 shrink-0">
        {isAnomaly ? (
          <AlertTriangle className="w-4 h-4 text-[var(--color-negative)]" />
        ) : (
          <Lightbulb className="w-4 h-4 text-[var(--color-accent)]" />
        )}
      </div>
      <div className="flex-1 text-[13px] leading-relaxed">
        {title && (
          <div className="font-semibold text-[var(--color-primary)] mb-0.5 tracking-tight">
            {title}
          </div>
        )}
        <div className="text-[var(--color-body-text)] opacity-90">{children}</div>
      </div>
    </div>
  );
};
