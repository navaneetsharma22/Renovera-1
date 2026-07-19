"use client";

import { useRef } from "react";
import { Lightbulb } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function KeyTakeaways({ takeaways, className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div ref={sectionRef} className={cn("my-16 bg-[#FAFAFA] border border-[#E4E4E7] rounded-3xl p-8 md:p-12", className)}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center shadow-sm">
          <Lightbulb className="w-5 h-5 text-[#C5A059]" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#09090B]">
          Key Takeaways
        </h3>
      </div>
      
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {takeaways.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#09090B] mb-2 border-b border-[#E4E4E7] pb-2 inline-block self-start">
              {item.title}
            </span>
            <p className="text-sm text-[#52525B] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
