"use client";

import { useRef } from "react";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { aboutData } from "./aboutData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function AwardsSection({ className }) {
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
    <section ref={sectionRef} className={cn("py-24 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Awards & Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Excellence Recognized.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.awards.map((award, idx) => {
            const Icon = LucideIcons[award.icon] || LucideIcons.Award;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-8 bg-[#18181B] border border-white/10 rounded-2xl hover:border-[#C5A059]/50 transition-colors duration-500"
              >
                <Icon className="w-8 h-8 text-[#C5A059] mb-6 stroke-[1.5]" />
                <h4 className="text-lg font-bold font-heading text-white mb-2 leading-tight">
                  {award.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mt-auto pt-4">
                  <span>{award.org}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{award.year}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
