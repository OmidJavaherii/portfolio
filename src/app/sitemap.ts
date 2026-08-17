import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/projects",
    "/experience",
    "/about",
    "/contact",
    ...projects.map((project) => `/projects/${project.slug}`),
  ];

  return pages.map((path) => {
    const url =
      path === "" ? `${site.domain}/` : `${site.domain}${path}/`;
    return {
      url,
      lastModified: now,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.7 : 0.8,
    };
  });
}
