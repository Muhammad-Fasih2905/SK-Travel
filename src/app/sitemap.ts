import type { MetadataRoute } from "next";
import { packages } from "@/data/packages";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sk-associates.example.com";
  const staticRoutes = [
    "",
    "/travel",
    "/travel/packages",
    "/travel/visa-services",
    "/travel/articles",
    "/travel/about",
    "/travel/contact",
    "/real-estate",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${base}/travel/packages/${p.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/travel/articles/${a.slug}`,
    lastModified: a.updatedAt,
  }));

  return [...staticRoutes, ...packageRoutes, ...articleRoutes];
}
