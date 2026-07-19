"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { FeaturedStory } from "./FeaturedStory";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { ClientMetrics } from "./ClientMetrics";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function TestimonialsSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featureRef = useRef(null);
  const carouselRef = useRef(null);
  const metricsRef = useRef(null);

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

    // Reveal Featured Story
    gsap.fromTo(featureRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
        }
      }
    );

    // Reveal Carousel Slider
    gsap.fromTo(carouselRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 85%",
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

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-background overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Client Stories"
            title="Designed with Care. Trusted for Life."
            highlight="Trusted for Life."
            description="Every renovation is more than a completed project—it's a transformed lifestyle. Hear directly from homeowners who trusted Renovera to bring their vision to life."
          />
        </div>

        {/* Featured Story */}
        <div ref={featureRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <FeaturedStory />
        </div>

      </div>

      {/* Testimonials Carousel (Full Width edge-to-edge on mobile) */}
      <div ref={carouselRef} className="mb-24 md:mb-32 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span>
            More Experiences
          </h3>
        </div>
        <div className="lg:container lg:mx-auto lg:px-8">
          <TestimonialsCarousel />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Metrics */}
        <div ref={metricsRef} className="pt-24 border-t border-border">
          <ClientMetrics />
        </div>
      </div>
    </section>
  );
}
