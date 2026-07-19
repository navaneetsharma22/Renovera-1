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

export function CoreValues({ className }) {
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
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Core Values
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            The Principles That Guide Us.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.values.map((value, idx) => {
            const Icon = LucideIcons[value.icon] || LucideIcons.Circle;
            return (
              <div 
                key={idx} 
                className="bg-white border border-[#E4E4E7] p-8 md:p-10 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-[#E4E4E7] mb-6 group-hover:bg-[#C5A059]/10 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-[#C5A059] stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold font-heading text-[#09090B] mb-3">
                  {value.title}
                </h4>
                <p className="text-[#52525B] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
