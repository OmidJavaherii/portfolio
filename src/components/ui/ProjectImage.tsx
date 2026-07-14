"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const gradients = [
  "from-[#ff6b3d]/20 via-[#1e2230] to-[#8b7cf8]/20",
  "from-[#8b7cf8]/20 via-[#10121a] to-[#ff6b3d]/15",
  "from-[#08090d] via-[#6d5ce8]/15 to-[#ff6b3d]/20",
  "from-[#10121a] via-[#ff6b3d]/10 to-[#8b7cf8]/25",
  "from-[#1e2230] via-[#08090d] to-[#ff6b3d]/20",
  "from-[#8b7cf8]/15 via-[#10121a] to-[#6d5ce8]/20",
];

function hashTitle(title: string) {
  return title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  featured?: boolean;
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  title,
  featured,
  className,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const gradient = gradients[hashTitle(title) % gradients.length];

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-end bg-gradient-to-br p-6",
          gradient,
          className
        )}
      >
        <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-primary">
          {title}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn(
        "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
        className
      )}
      sizes={
        featured
          ? "(max-width: 1024px) 100vw, 54vw"
          : "(max-width: 768px) 100vw, 44vw"
      }
      onError={() => setFailed(true)}
    />
  );
}
