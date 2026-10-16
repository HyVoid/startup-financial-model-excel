import React from 'react';

interface StatusPillProps {
  label: string;
  variant?: 'neutral' | 'active' | 'positive' | 'negative';
  className?: string;
  onClick?: () => void;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  variant = 'neutral',
  className = '',
  onClick,
}) => {
  let styleClasses = 'bg-[rgba(5,28,44,0.06)] text-[var(--color-primary)]';

  if (variant === 'active') {
    styleClasses = 'bg-[var(--color-primary)] text-white';
  } else if (variant === 'positive') {
    // Only for true target met / healthy action status
    styleClasses = 'bg-[rgba(0,200,83,0.12)] text-[#008738] font-semibold';
  } else if (variant === 'negative') {
    // Anomaly / urgent action required
    styleClasses = 'bg-[rgba(211,47,47,0.12)] text-[var(--color-negative)] font-semibold';
  }

  return (
    <span
      onClick={onClick}
      className={`status-pill ${styleClasses} ${
        onClick ? 'cursor-pointer hover:opacity-90' : ''
      } ${className}`}
    >
      {label}
    </span>
  );
};
