"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { AdvantageGrid } from "./AdvantageGrid";
import { CompanyMetrics } from "./CompanyMetrics";
import { CommitmentQuote } from "./CommitmentQuote";
import { MaterialShowcase } from "@/components/quality/MaterialShowcase";
import { QualityGrid } from "@/components/quality/QualityGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function WhyChooseSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const metricsRef = useRef(null);
  const quoteRef = useRef(null);
  const materialsRef = useRef(null);

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

    // Stagger Cards
    gsap.fromTo(gridRef.current.children,
      { y: 40, opacity: 0 },
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

    // Reveal Material Slider
    if (materialsRef.current) {
      gsap.fromTo(materialsRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: materialsRef.current,
            start: "top 85%",
          }
        }
      );
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Why Renovera"
            title="Built on Precision. Driven by Excellence."
            highlight="Driven by Excellence."
            description="Every project is approached with meticulous planning, transparent communication, and uncompromising craftsmanship—ensuring exceptional spaces that stand the test of time."
          />
        </div>

        {/* Advantages Grid */}
        <div ref={gridRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <AdvantageGrid />
        </div>
      </div>

      {/* Material Showcase (Full Width slider on mobile, contained grid on desktop) */}
      <div ref={materialsRef} className="mb-24 md:mb-32 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span>
            Material & Finish Showcase
          </h3>
        </div>
        <div className="lg:container lg:mx-auto lg:px-8">
          <MaterialShowcase />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Metrics */}
        <div ref={metricsRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <CompanyMetrics />
        </div>

        {/* Commitment Quote */}
        <div ref={quoteRef} className="pt-24 md:pt-32 border-t border-border/60">
          <CommitmentQuote />
        </div>

      </div>
    </section>
  );
}
