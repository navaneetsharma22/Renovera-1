"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function RelatedProjects({ project, className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Continue Exploring
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              Related Projects.
            </h3>
          </div>
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {project.relatedProjects.map((rel, idx) => (
            <Link 
              key={idx} 
              href={`/projects/${rel.slug}`}
              className="group block relative overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image 
                  src={rel.image}
                  alt={rel.title}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#09090B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090B]">
                    {rel.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <h4 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
                    {rel.title}
                  </h4>
                  <div className="flex items-center gap-x-4 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                    <span>{rel.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
