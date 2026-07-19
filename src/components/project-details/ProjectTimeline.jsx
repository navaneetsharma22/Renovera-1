"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectTimeline({ project, className }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-white overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Project Trajectory
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Timeline & Milestones.
          </h3>
        </div>

        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-[24px] left-0 right-0 h-px bg-[#E4E4E7]" />

          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {project.timeline.map((point, idx) => (
              <div key={idx} className="flex flex-col relative group pl-8 lg:pl-0">
                {/* Vertical line for mobile */}
                <div className="lg:hidden absolute left-[23px] top-12 bottom-[-2rem] w-px bg-[#E4E4E7] last:hidden" />
                
                <div className="absolute lg:static left-4 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#E4E4E7] lg:mx-auto mb-6 shadow-sm group-hover:border-[#C5A059] transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                </div>
                
                <div className="lg:text-center pt-2 lg:pt-0">
                  <h4 className="text-lg font-bold font-heading text-[#09090B] mb-2">
                    {point.milestone}
                  </h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#52525B]">
                    {point.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
