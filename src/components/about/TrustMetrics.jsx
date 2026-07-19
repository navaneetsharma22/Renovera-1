"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { aboutData } from "./aboutData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function TrustMetrics({ className }) {
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(metricsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: metricsRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Why Clients Trust Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
            Built on a Foundation of Trust.
          </h3>
        </div>

        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 w-full">
          {aboutData.trustMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                {metric.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/60 leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
