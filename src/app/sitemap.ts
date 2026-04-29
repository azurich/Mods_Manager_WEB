import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://modsmanager.azurich.fr",
      lastModified: new Date("2026-04-29"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
