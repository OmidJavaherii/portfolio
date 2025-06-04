"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  link?: string;
  preview?: string;
  tags?: string[];
}

export function Card({
  title,
  description,
  imageSrc,
  link,
  preview,
  tags = [],
}: CardProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreviewClick = () => {
    if (preview) {
      window.open(preview, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift duration-500 glass">
      <div className="aspect-video relative">
        {imageSrc && (
          <div
            area-label="project"
            onClick={handlePreviewClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handlePreviewClick();
              }
            }}
            className="relative h-full m-6 mt-8 rounded-lg cursor-pointer overflow-hidden"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-transform duration-300 hover:scale-105 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
              quality={85}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {description && <p className="text-muted mb-4">{description}</p>}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                className="w-full"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10 cursor-pointer"
                >
                  View Project
                </Button>
              </a>
            )}
            {preview && (
              <a
                href={preview}
                target="_blank"
                className="w-full"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10 cursor-pointer"
                >
                  Preview
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
