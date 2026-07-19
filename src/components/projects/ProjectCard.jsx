import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }) {
  return (
    <Link href={`/projects/${project.slug}`} className={cn("block group relative w-full", className)}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-4 md:mb-6 shadow-md border border-border/50">
        <Image 
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
          <div className="flex justify-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight className="size-6 text-black" />
            </div>
          </div>
          
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Meta Info Below Image */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest">
            {project.category}
          </span>
          <div className="w-1 h-1 rounded-full bg-border" />
          <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
            {project.location}
          </span>
        </div>
        
        <h4 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
          {project.title}
        </h4>
        
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <span>{project.area}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
