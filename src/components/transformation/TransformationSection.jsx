"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectHighlights } from "./ProjectHighlights";
import { ProjectMetrics } from "./ProjectMetrics";
import { TransformationCTA } from "./TransformationCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function TransformationSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const infoRef = useRef(null);
  const highlightsRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaRef = useRef(null);

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

    // Reveal Slider
    gsap.fromTo(sliderRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
        }
      }
    );

    // Reveal Info
    gsap.fromTo(infoRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 85%",
        }
      }
    );

    // Reveal Highlights
    gsap.fromTo(highlightsRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 85%",
        }
      }
    );

    // Reveal Metrics (and counter)
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

    // Reveal CTA
    gsap.fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-background overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Transformation Showcase"
            title="See the Difference. Experience the Transformation."
            highlight="Experience the Transformation."
            description="Every renovation begins with a vision. Explore how our design and construction expertise transforms ordinary spaces into timeless architecture."
          />
        </div>

        {/* Before & After Slider */}
        <div ref={sliderRef} className="w-full max-w-[1400px] mx-auto h-[400px] md:h-[600px] lg:h-[750px] mb-20 md:mb-32 shadow-2xl rounded-2xl overflow-hidden">
          <BeforeAfterSlider 
            beforeImage="/images/before-renovation.png"
            afterImage="/images/after-renovation.png"
            className="w-full h-full"
          />
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col gap-20 md:gap-32">
          {/* Project Information & Challenge/Solution */}
          <div ref={infoRef}>
            <ProjectInfo />
          </div>

          {/* Project Highlights */}
          <div ref={highlightsRef}>
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-10 text-center">Project Highlights</h3>
            <ProjectHighlights />
          </div>

          {/* Project Metrics */}
          <div ref={metricsRef}>
            <ProjectMetrics />
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="pt-8 text-center border-t border-border/50">
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready for your transformation?</h3>
            <TransformationCTA />
          </div>
        </div>

      </div>
    </section>
  );
}
