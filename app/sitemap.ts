import type { MetadataRoute } from "next";

const baseUrl = "https://bilexminerals.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/testing-assaying", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date("2026-05-26"),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
