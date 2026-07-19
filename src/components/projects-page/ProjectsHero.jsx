"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

export function ProjectsHero({ className }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(bgRef.current,
      { scale: 1.05 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src={projectsPageData.hero.image}
          alt="Renovera Portfolio"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#09090B]/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div ref={contentRef} className="max-w-[800px] mx-auto flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-6 block">
            {projectsPageData.hero.badge}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-white mb-8 whitespace-pre-line">
            {projectsPageData.hero.heading}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-[700px]">
            {projectsPageData.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-[#09090B] font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none text-center"
            >
              {projectsPageData.hero.primaryCTA}
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-colors duration-300 rounded-none text-center"
            >
              {projectsPageData.hero.secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
