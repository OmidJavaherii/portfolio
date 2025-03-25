import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  withContainer?: boolean;
  animate?: boolean;
}

export function Section({
  id,
  className = '',
  children,
  containerClassName = '',
  withContainer = true,
  animate = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${animate ? 'fadeIn' : ''} ${className}`}
    >
      {withContainer ? (
        <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
  animate = true,
}: {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animate?: boolean;
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignClasses[align]} mb-12 ${className} ${animate ? 'slideUp' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted text-lg">{subtitle}</p>}
    </div>
  );
} 