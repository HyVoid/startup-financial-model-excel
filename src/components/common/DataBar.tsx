import React from 'react';

interface DataBarProps {
  value: number;
  max: number;
  min?: number;
  className?: string;
  showPercent?: boolean;
}

export const DataBar: React.FC<DataBarProps> = ({
  value,
  max,
  min = 0,
  className = '',
  showPercent = false,
}) => {
  const safeMax = max > min ? max : min + 1;
  const clampedVal = Math.max(min, Math.min(value, safeMax));
  const percent = Math.round(((clampedVal - min) / (safeMax - min)) * 100);

  return (
    <div className={`flex items-center gap-2 w-full ${className}`}>
      <div
        className="h-1.5 w-full rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(5, 28, 44, 0.10)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percent}%`,
            backgroundColor: 'var(--color-accent)',
          }}
        />
      </div>
      {showPercent && (
        <span className="text-[11px] text-[var(--color-muted)] font-mono min-w-[28px] text-right">
          {percent}%
        </span>
      )}
    </div>
  );
};
