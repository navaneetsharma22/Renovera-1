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

export function ServiceOverview({ service, className }) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Editorial Image */}
          <div ref={imageRef} className="relative w-full aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={service.overview.image}
              alt={`${service.title} Overview`}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Overview Content */}
          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              Service Overview
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-10 tracking-tight leading-[1.1]">
              {service.overview.heading}
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {service.overview.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#52525B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-8 border-t border-[#E4E4E7]">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#FAFAFA] overflow-hidden relative">
                  <Image src="/images/team-1.png" alt="Architect" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#FAFAFA] overflow-hidden relative">
                  <Image src="/images/team-2.png" alt="Designer" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#09090B]">Expert Led Execution</span>
                <span className="text-xs text-[#52525B]">Our top architects & designers.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
