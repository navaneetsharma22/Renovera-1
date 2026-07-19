import {
  ProjectsHero,
  PortfolioStats,
  FeaturedProject,
  ProjectGrid,
  ProjectCategories,
  ProjectLocations,
  AwardsPublications,
  ProjectsCTA
} from "@/components/projects-page";

export const metadata = {
  title: "Projects | Renovera Portfolio",
  description: "Browse Renovera's portfolio of luxury architecture, home renovation, and interior design projects across residential and commercial spaces.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <ProjectsHero />
      <PortfolioStats />
      
      {/* 
        SearchAndFilters is rendered inside ProjectGrid 
        so they can share state (searchQuery, activeCategory, etc.) 
        without needing a global store or context provider for just one page.
      */}
      
      <FeaturedProject />
      <ProjectGrid />
      <ProjectCategories />
      <ProjectLocations />
      <AwardsPublications />
      <ProjectsCTA />
    </main>
  );
}
