import { getAllProjectSlugs } from "@/components/projects-page/projectsData";
import { getAllServiceSlugs } from "@/components/services-page/servicesData";
import { getAllArticleSlugs } from "@/components/journal-details/journalDetailsData";

export default function sitemap() {
  const baseUrl = "https://renovera.studio";

  // Static routes
  const staticRoutes = ["", "/about", "/services", "/projects", "/journal", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Projects
  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Services
  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Journal Articles
  const journalRoutes = getAllArticleSlugs().map((slug) => ({
    url: `${baseUrl}/journal/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...journalRoutes];
}
