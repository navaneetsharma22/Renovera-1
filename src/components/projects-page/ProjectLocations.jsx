"use client";

import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectLocations({ className }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-white border-b border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Global Reach
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Our Locations.
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8" ref={listRef}>
          {projectsPageData.locations.map((loc, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-center bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl px-8 py-6 min-w-[200px] hover:border-[#09090B] hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:bg-[#09090B] transition-colors duration-300">
                <MapPin className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-lg font-bold font-heading text-[#09090B] mb-1">
                {loc.city}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#52525B]">
                {loc.count} Projects
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
