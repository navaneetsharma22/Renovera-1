"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function PortfolioStats({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const stats = gridRef.current.children;
    
    gsap.fromTo(stats,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-20 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#E4E4E7]"
        >
          {projectsPageData.stats.map((stat, idx) => (
            <div key={idx} className={cn("flex flex-col items-center justify-center pt-8 md:pt-0", idx < 2 && "pt-0")}>
              <span className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-2">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#52525B]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
