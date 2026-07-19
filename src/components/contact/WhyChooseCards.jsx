"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { contactData } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function WhyChooseCards({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA] border-t border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#09090B]">
            Why Work With Renovera
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {contactData.whyChooseUs.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#E4E4E7] p-8 md:p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#09090B] mb-2 group-hover:text-[#C5A059] transition-colors">
                {item.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#52525B]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
