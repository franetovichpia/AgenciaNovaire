import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.studionovaire.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["arquitectos", "inmobiliarias", "turismo"].map((rubro) => ({
      url: `https://www.studionovaire.com/web-para-${rubro}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
