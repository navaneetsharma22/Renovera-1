"use client";

import { useRef } from "react";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function IndustriesServed({ className }) {
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
            Industries Served
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Spaces We Transform.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesPageData.industries.map((industry, idx) => {
            const Icon = LucideIcons[industry.icon] || LucideIcons.Building;
            return (
              <div 
                key={idx} 
                className="bg-[#18181B] border border-white/10 p-8 rounded-2xl flex items-start gap-6 hover:border-[#C5A059]/50 hover:bg-white/5 transition-colors duration-500 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#09090B] flex items-center justify-center border border-white/10 group-hover:border-[#C5A059] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-[#C5A059] stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold font-heading text-white mb-2">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {industry.description}
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
