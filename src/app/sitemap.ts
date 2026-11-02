import { MetadataRoute } from "next";
import { servicesDetailData } from "@/lib/services-data";
import { servicesFAQData } from "@/lib/services-faq-data";
import { servicesProcessData } from "@/lib/services-process-data";
import { servicesPricingData } from "@/lib/services-pricing-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.blankon.tech";

  const serviceUrls: MetadataRoute.Sitemap = Object.keys(servicesDetailData).map((slug) => ({
    url: `${baseUrl}/layanan/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const faqServiceUrls: MetadataRoute.Sitemap = Object.keys(servicesFAQData).map((slug) => ({
    url: `${baseUrl}/faq/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const processServiceUrls: MetadataRoute.Sitemap = Object.keys(servicesProcessData).map((slug) => ({
    url: `${baseUrl}/proses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const pricingServiceUrls: MetadataRoute.Sitemap = Object.keys(servicesPricingData).map((slug) => ({
    url: `${baseUrl}/harga/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...faqServiceUrls,
    {
      url: `${baseUrl}/proses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...processServiceUrls,
    {
      url: `${baseUrl}/harga`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...pricingServiceUrls,
    {
      url: `${baseUrl}/solusi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portofolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak/jadwal-temu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
