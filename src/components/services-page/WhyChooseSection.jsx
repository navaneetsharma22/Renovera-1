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

export function WhyChooseSection({ className }) {
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
            Why Choose Renovera
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            The Renovera Advantage.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {servicesPageData.advantages.map((adv, idx) => {
            const Icon = LucideIcons[adv.icon] || LucideIcons.CheckCircle2;
            return (
              <div 
                key={idx} 
                className="flex flex-col bg-[#FAFAFA] border border-[#E4E4E7] p-8 md:p-10 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E4E4E7] mb-6 shadow-sm group-hover:border-[#C5A059] transition-colors duration-500">
                  <Icon className="w-5 h-5 text-[#C5A059] stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold font-heading text-[#09090B] mb-3">
                  {adv.title}
                </h4>
                <p className="text-[#52525B] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
