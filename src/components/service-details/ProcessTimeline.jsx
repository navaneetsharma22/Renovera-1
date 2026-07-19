"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProcessTimeline({ service, className }) {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
        
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Our Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            How We Work.
          </h3>
        </div>

        <div className="relative border-l border-[#E4E4E7] ml-4 md:ml-0 md:border-none">
          {/* Central vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E4E4E7] -translate-x-1/2" />

          {service.process.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                ref={(el) => (itemsRef.current[idx] = el)}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0 pl-8 md:pl-0",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-2 md:top-1/2 w-[11px] h-[11px] bg-[#C5A059] rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 ring-4 ring-white" />

                {/* Content Box */}
                <div className={cn("w-full md:w-[45%] flex flex-col", isEven ? "md:items-end md:text-right" : "md:items-start md:text-left")}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-bold text-[#C5A059] block">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#09090B]/50 px-2 py-1 bg-[#FAFAFA] rounded-full border border-[#E4E4E7]">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[#52525B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
