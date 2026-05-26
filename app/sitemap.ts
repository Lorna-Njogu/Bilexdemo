import type { MetadataRoute } from "next";

const baseUrl = "https://bilexminerals.com";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
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
