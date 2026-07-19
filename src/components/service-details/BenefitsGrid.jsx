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

export function BenefitsGrid({ service, className }) {
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
            Key Benefits
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Why Choose This Service.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.benefits.map((benefit, idx) => {
            const Icon = LucideIcons[benefit.icon] || LucideIcons.CheckCircle;
            return (
              <div 
                key={idx} 
                className="bg-[#FAFAFA] border border-[#E4E4E7] p-8 md:p-10 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-[#E4E4E7] mb-6 group-hover:border-[#C5A059] transition-colors duration-500 shadow-sm">
                  <Icon className="w-6 h-6 text-[#C5A059] stroke-[1.5]" />
                </div>
                <h4 className="text-xl font-bold font-heading text-[#09090B] mb-3">
                  {benefit.title}
                </h4>
                <p className="text-[#52525B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
