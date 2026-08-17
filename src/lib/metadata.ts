import type { Metadata } from "next";
import { site } from "@/data/site";

export const defaultTitle = `${site.name} — ${site.role}`;

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} — ${site.name}` : defaultTitle;
  const pageDescription = description ?? site.description;
  const url = `${site.domain}${path === "/" ? "/" : path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: `${site.name} Portfolio`,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: "/images/profile.jpg",
          width: 800,
          height: 800,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
