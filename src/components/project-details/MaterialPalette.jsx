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

export function MaterialPalette({ project, className }) {
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
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Curated Finishes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Material Palette.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {project.materials.map((material, idx) => (
            <div key={idx} className="flex flex-col group bg-white border border-[#E4E4E7] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
              <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                <Image 
                  src={material.image}
                  alt={material.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold font-heading text-[#09090B]">
                    {material.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#FAFAFA] px-2 py-1 rounded-full border border-[#E4E4E7]">
                    {material.application}
                  </span>
                </div>
                <p className="text-sm text-[#52525B] leading-relaxed mb-6">
                  {material.desc}
                </p>
                <div className="pt-4 border-t border-[#E4E4E7]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090B]/50 block mb-1">
                    Supplier
                  </span>
                  <span className="text-sm font-bold text-[#09090B]">
                    {material.supplier}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
