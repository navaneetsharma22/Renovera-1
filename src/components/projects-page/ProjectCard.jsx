import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className={cn("group block relative overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-2xl transition-all duration-700", className)}
    >
      <div className="relative w-full h-full min-h-[300px]">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark overlay that appears on hover */}
        <div className="absolute inset-0 bg-[#09090B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Permanent bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/30 to-transparent z-10" />
        
        {/* Persistent top-right metadata */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090B]">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-20">
          <h4 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-8">
            {project.title}
          </h4>
          <div className="flex items-center gap-x-4 text-xs font-bold uppercase tracking-widest text-white/80 transform transition-transform duration-500 group-hover:-translate-y-8">
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          
          <div className="absolute bottom-6 lg:bottom-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            View Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
