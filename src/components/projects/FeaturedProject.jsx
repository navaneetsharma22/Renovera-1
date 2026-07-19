import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden group shadow-2xl">
      {/* Background Image */}
      <div className="relative w-full h-[500px] md:h-[700px]">
        <Image 
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 text-white">
        <div className="max-w-3xl transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          
          <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
            <span className="bg-[#C5A059] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-white/80 text-[11px] md:text-xs font-bold uppercase tracking-widest">
              {project.location} • {project.year}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 hidden md:block">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
            <div className="hidden md:block">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Area</span>
              <span className="text-sm font-bold">{project.area}</span>
            </div>
            <div className="hidden md:block">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Timeline</span>
              <span className="text-sm font-bold">{project.timeline}</span>
            </div>
            
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 md:ml-auto">
              <Link href={`/projects/${project.slug}`}>
                View Case Study
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
