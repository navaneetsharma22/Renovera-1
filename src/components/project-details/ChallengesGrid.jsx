"use client";

import { useRef } from "react";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ChallengesGrid({ project, className }) {
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
    <section ref={sectionRef} className={cn("py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Obstacles
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Project Challenges.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {project.challenges.map((challenge, idx) => {
            const Icon = LucideIcons[challenge.icon] || LucideIcons.AlertCircle;
            return (
              <div 
                key={idx}
                className="bg-[#FAFAFA] border border-[#E4E4E7] p-8 rounded-2xl flex items-start gap-6 hover:border-[#09090B] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center border border-[#E4E4E7] shadow-sm group-hover:border-[#09090B] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#09090B] stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold font-heading text-[#09090B] mb-2">
                    {challenge.title}
                  </h4>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
