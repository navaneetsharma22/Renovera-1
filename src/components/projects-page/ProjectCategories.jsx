"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectCategories({ className }) {
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
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Disciplines
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Browse by Category.
            </h3>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsPageData.categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/services`} 
              className="group relative h-[400px] rounded-3xl overflow-hidden block cursor-pointer bg-[#18181B]"
            >
              <Image 
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2">
                  {cat.count} Projects
                </span>
                <h4 className="text-2xl font-bold font-heading text-white mb-4">
                  {cat.name}
                </h4>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/0 translate-y-4 group-hover:text-white group-hover:translate-y-0 transition-all duration-300">
                  Explore Category
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
