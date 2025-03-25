"use client";

import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  tags?: string[];
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  imageSrc,
  imageAlt = '',
  link,
  linkText = 'View',
  tags = [],
  className = '',
  onClick,
  children,
}: CardProps) {
  const CardComponent = onClick || link ? 'a' : 'div';
  const href = link || (onClick ? '#' : undefined);
  
  return (
    <CardComponent
      href={href}
      onClick={onClick}
      className={`bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift ${className}`}
    >
      {imageSrc && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-muted mb-4">{description}</p>}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {children}
        
        {link && linkText && (
          <div className="mt-4">
            <span className="text-primary font-medium hover:underline">
              {linkText} →
            </span>
          </div>
        )}
      </div>
    </CardComponent>
  );
} 