import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects, className }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted-foreground text-lg">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12", className)}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
