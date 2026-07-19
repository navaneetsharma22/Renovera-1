"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { ClientAssurancePanel } from "./ClientAssurancePanel";
import { FAQAccordion } from "./FAQAccordion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FAQSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const accordionRef = useRef(null);

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

    // Reveal Left Panel
    gsap.fromTo(panelRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top 80%",
        }
      }
    );

    // Reveal Right Accordion
    gsap.fromTo(accordionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-background overflow-hidden relative", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Frequently Asked Questions"
            title="Everything You Need Before You Begin."
            highlight="Before You Begin."
            description="Planning a renovation is a significant investment. We've answered the most common questions to help you move forward with confidence."
          />
        </div>

        {/* Split Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1400px] mx-auto">
          
          {/* Left Column: Client Assurance Panel */}
          <div ref={panelRef} className="lg:col-span-5 w-full">
            <ClientAssurancePanel />
          </div>

          {/* Right Column: FAQ Accordion */}
          <div ref={accordionRef} className="lg:col-span-7 w-full">
            <FAQAccordion />
          </div>

        </div>

      </div>
    </section>
  );
}
