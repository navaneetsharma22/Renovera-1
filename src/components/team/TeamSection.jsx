"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { LeadershipSpotlight } from "./LeadershipSpotlight";
import { TeamGrid } from "./TeamGrid";
import { TeamMetrics } from "./TeamMetrics";
import { CultureQuote } from "./CultureQuote";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function TeamSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leaderRef = useRef(null);
  const gridRef = useRef(null);
  const metricsRef = useRef(null);
  const quoteRef = useRef(null);

  useGSAP(() => {
    // Reveal Header
    gsap.fromTo(headerRef.current.children, 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    // Reveal Leadership Spotlight
    gsap.fromTo(leaderRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leaderRef.current,
          start: "top 80%",
        }
      }
    );

    // Stagger Team Cards
    gsap.fromTo(gridRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

    // Reveal Metrics
    gsap.fromTo(metricsRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: metricsRef.current,
          start: "top 85%",
        }
      }
    );

    // Reveal Quote
    gsap.fromTo(quoteRef.current,
      { y: 30, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        


        {/* Leadership Spotlight */}
        <div ref={leaderRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <LeadershipSpotlight />
        </div>

        {/* Section Divider */}
        <div className="max-w-[1200px] mx-auto mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span>
            Our Professionals
          </h3>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <TeamGrid />
        </div>

        {/* Team Metrics */}
        <div ref={metricsRef} className="mb-24 md:mb-32">
          <TeamMetrics />
        </div>

        {/* Culture Quote */}
        <div ref={quoteRef} className="pt-24 md:pt-32 border-t border-border/60">
          <CultureQuote />
        </div>

      </div>
    </section>
  );
}
