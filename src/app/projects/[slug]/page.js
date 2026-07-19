import { notFound } from "next/navigation";
import { 
  getProjectBySlug, 
  getAllProjectSlugs,
  ProjectHero,
  ProjectOverview,
  ClientVision,
  ChallengesGrid,
  DesignSolution,
  ProcessTimeline,
  MaterialPalette,
  ProjectGallery,
  BeforeAfterSection,
  ProjectTimeline,
  ConstructionHighlights,
  ClientTestimonial,
  RelatedProjects,
  ProjectCTA
} from "@/components/project-details";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic metadata generation based on project slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Renovera Projects`,
    description: `Explore the architectural transformation of ${project.title}, a stunning ${project.category} project by Renovera located in ${project.location}.`,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ClientVision project={project} />
      <ChallengesGrid project={project} />
      <DesignSolution project={project} />
      <ProcessTimeline project={project} />
      <MaterialPalette project={project} />
      <ProjectGallery project={project} />
      <BeforeAfterSection project={project} />
      <ProjectTimeline project={project} />
      <ConstructionHighlights project={project} />
      <ClientTestimonial project={project} />
      <RelatedProjects project={project} />
      <ProjectCTA project={project} />
    </main>
  );
}
