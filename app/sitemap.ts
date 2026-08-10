import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://versana.id";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${baseUrl}/layanan/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
