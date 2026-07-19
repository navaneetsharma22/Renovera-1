"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { TimelineNavigation } from "./TimelineNavigation";
import { StepContent } from "./StepContent";
import { ProcessInfo } from "./ProcessInfo";
import { processSteps } from "./processData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProcessSection({ className }) {
  const [activeStepId, setActiveStepId] = useState(processSteps[0].id);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const stepRefs = useRef([]);

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

    // Track active step on scroll
    stepRefs.current.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveStepId(processSteps[index].id),
        onEnterBack: () => setActiveStepId(processSteps[index].id),
      });

      // Fade up each step content
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          }
        }
      );
    });

    // Reveal ProcessInfo
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

  }, { scope: sectionRef });

  const handleStepClick = (id) => {
    const stepIndex = processSteps.findIndex(s => s.id === id);
    if (stepRefs.current[stepIndex]) {
      // Smooth scroll to the step
      window.scrollTo({
        top: stepRefs.current[stepIndex].offsetTop - 120, // Offset for sticky nav
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-background relative", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Our Process"
            title="From Vision To Reality."
            highlight="To Reality."
            description="Every successful renovation begins with a thoughtful process. From the first consultation to the final handover, we ensure precision, transparency, and exceptional craftsmanship at every stage."
            alignment="left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          
          {/* Left Column: Sticky Timeline Navigation */}
          <div className="lg:col-span-4 hidden lg:block sticky top-32">
            <TimelineNavigation 
              steps={processSteps}
              activeStepId={activeStepId}
              onStepClick={handleStepClick}
            />
          </div>
          
          {/* Mobile Timeline Navigation (Accordion/Horizontal fallback not needed if we just stack them, but let's hide on mobile and rely on vertical scroll or show horizontal) 
              Actually, the design says: Mobile: Accordion layout, One step visible at a time.
              A stacked scrolling layout works perfectly on mobile natively. We can hide the sticky nav on mobile and just show the steps.
          */}

          {/* Right Column: Step Contents */}
          <div ref={stepsContainerRef} className="lg:col-span-8 flex flex-col gap-24 md:gap-32">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                ref={el => stepRefs.current[index] = el}
                className="scroll-mt-32"
              >
                <StepContent step={step} />
              </div>
            ))}
          </div>

        </div>

        {/* Process Info Block */}
        <div ref={infoRef} className="mt-24 md:mt-32 pt-16 border-t border-border/50">
          <ProcessInfo />
        </div>

      </div>
    </section>
  );
}
