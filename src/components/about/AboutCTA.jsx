"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { aboutData } from "./aboutData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function AboutCTA({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    gsap.fromTo(contentRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("relative py-32 md:py-48 overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          ref={imageRef}
          src={aboutData.cta.image}
          alt="Luxury Architecture CTA"
          fill
          className="object-cover object-center"
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-[#09090B]/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] mb-6 md:mb-8 text-white whitespace-pre-line">
            {aboutData.cta.heading}
          </h2>

          <p className="text-base md:text-xl text-white/70 leading-relaxed font-medium mb-12">
            {aboutData.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-[#09090B] font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none text-center"
            >
              {aboutData.cta.primaryCTA}
            </Link>

            <Link 
              href="/projects"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:border-white hover:bg-white/5 transition-colors duration-300 rounded-none text-center"
            >
              {aboutData.cta.secondaryCTA}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
