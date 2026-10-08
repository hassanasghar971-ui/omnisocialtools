import type { MetadataRoute } from "next";

/**
 * Dynamic Sitemap Engine — OmniSocialTools
 * Guarantees a valid 200 OK XML response for Google Search Console.
 * Author: Hassan Asghar, Sargodha, Pakistan
 */

const BASE_URL = "https://omnisocialtools.com";

interface RouteDefinition {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const STATIC_ROUTES: RouteDefinition[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" },
  { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  try {
    return STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  } catch {
    // Defensive fallback ensures a 200 OK is always returned
    return [
      {
        url: BASE_URL,
        lastModified,
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];
  }
}
