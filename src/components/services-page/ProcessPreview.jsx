"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProcessPreview({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Our Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              A Seamless Journey.
            </h3>
          </div>
          <Link 
            href="/process"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View Full Process
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-12 right-12 h-px bg-[#E4E4E7]" />

          {servicesPageData.process.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col group">
              <div className="w-14 h-14 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center mb-6 shadow-sm group-hover:border-[#C5A059] transition-colors duration-500">
                <span className="text-[#C5A059] font-bold font-heading text-lg">{step.step}</span>
              </div>
              <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-[#52525B] leading-relaxed pr-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
