"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { aboutData } from "./aboutData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function StudioCulture({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Wide Lifestyle Photography */}
        <div ref={imageRef} className="relative w-full aspect-[21/9] bg-muted rounded-3xl overflow-hidden mb-16 md:mb-24 shadow-xl">
          <Image 
            src={aboutData.culture.image}
            alt="Studio Culture"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Studio Culture
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight leading-[1.1]">
              {aboutData.culture.heading}
            </h3>
          </div>
          
          <div ref={contentRef} className="flex flex-col gap-6">
            {aboutData.culture.content.map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg text-[#52525B] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
