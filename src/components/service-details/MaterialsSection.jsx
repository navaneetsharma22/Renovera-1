"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function MaterialsSection({ service, className }) {
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
    <section ref={sectionRef} className={cn("py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Materials & Technology
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            The Foundation of Quality.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {service.materials.map((material, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative w-full aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-8 shadow-md">
                <Image 
                  src={material.image}
                  alt={material.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-3 group-hover:text-[#C5A059] transition-colors">
                {material.name}
              </h4>
              <p className="text-[#52525B] leading-relaxed">
                {material.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
