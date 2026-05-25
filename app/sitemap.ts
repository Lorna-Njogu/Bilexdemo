import type { MetadataRoute } from "next";

const baseUrl = "https://bilexminerals.com";

const routes = [
  "",
  "/services",
  "/gold-prices",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/gold-prices" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
