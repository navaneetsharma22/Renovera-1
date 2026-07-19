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

export function DesignPhilosophy({ className }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(imagesRef.current.children,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              Design Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight mb-8">
              {aboutData.philosophy.heading}
            </h3>
            
            <div className="flex flex-col gap-6">
              {aboutData.philosophy.content.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#52525B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Moodboard / Material Textures Grid */}
          <div ref={imagesRef} className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6 pt-12">
              <div className="relative w-full aspect-square bg-muted rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={aboutData.philosophy.images[0]}
                  alt="Design Material 1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={aboutData.philosophy.images[1]}
                  alt="Design Material 2"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative w-full aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={aboutData.philosophy.images[2]}
                  alt="Design Material 3"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
