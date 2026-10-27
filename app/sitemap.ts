import type { MetadataRoute } from "next";

import { niches } from "@/data/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.studionovaire.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.studionovaire.com/agendar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...niches.map((niche) => ({
      url: `https://www.studionovaire.com${niche.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
