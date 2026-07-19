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

export function MissionVision({ className }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(cardsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Mission */}
          <div className="bg-[#FAFAFA] border border-[#E4E4E7] p-12 md:p-16 rounded-3xl flex flex-col items-start hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-8">
              Our Mission
            </h3>
            <p className="text-2xl md:text-3xl font-heading text-[#09090B] leading-tight font-medium">
              {aboutData.missionVision.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#09090B] p-12 md:p-16 rounded-3xl flex flex-col items-start hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-8">
              Our Vision
            </h3>
            <p className="text-2xl md:text-3xl font-heading text-white leading-tight font-medium">
              {aboutData.missionVision.vision}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
