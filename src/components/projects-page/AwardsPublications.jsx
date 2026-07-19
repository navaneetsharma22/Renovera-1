"use client";

import { useRef } from "react";
import { Award } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function AwardsPublications({ className }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Awards & Publications.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" ref={listRef}>
          {projectsPageData.awards.map((award, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white border border-[#E4E4E7] rounded-xl hover:shadow-md transition-shadow"
            >
              <Award className="w-8 h-8 text-[#09090B] mb-4 opacity-80" strokeWidth={1.5} />
              <span className="text-sm font-bold text-[#09090B] mb-1 leading-tight">
                {award.title}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-3">
                {award.subtitle}
              </span>
              <span className="text-xs font-bold font-serif italic text-[#C5A059]">
                {award.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
