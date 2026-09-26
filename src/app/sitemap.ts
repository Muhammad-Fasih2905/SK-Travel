import type { MetadataRoute } from "next";
import { packages } from "@/data/packages";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sktravels.example.com";
  const staticRoutes = [
    "",
    "/packages",
    "/visa-services",
    "/articles",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${base}/packages/${p.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: a.updatedAt,
  }));

  return [...staticRoutes, ...packageRoutes, ...articleRoutes];
}
