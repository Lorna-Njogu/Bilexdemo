import type { MetadataRoute } from "next";

const baseUrl = "https://bilexminerals.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/testing-assaying", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? `${baseUrl}/` : `${baseUrl}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
