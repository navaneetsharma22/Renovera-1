"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { ServicePreview } from "./ServicePreview";
import { servicesData } from "./servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ServicesSection({ className }) {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

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

    // Reveal List Items
    gsap.fromTo(listRef.current.children,
      { y: 30, opacity: 0, x: -20 },
      {
        y: 0,
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        }
      }
    );

    // Reveal Preview Panel
    gsap.fromTo(previewRef.current,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: previewRef.current,
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <SectionHeader 
            badge="Our Expertise"
            title="Architecture. Renovation. Crafted to Perfection."
            highlight="Crafted to Perfection."
            description="From complete home transformations to bespoke architectural design, we create exceptional spaces that combine timeless aesthetics with modern functionality."
            alignment="left"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Interactive List */}
          <div ref={listRef} className="lg:col-span-7 flex flex-col pt-4">
            {servicesData.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                isActive={activeServiceId === service.id}
                onClick={() => setActiveServiceId(service.id)}
              />
            ))}
          </div>

          {/* Right Column: Preview Panel */}
          <div ref={previewRef} className="lg:col-span-5 relative">
            <div className="hidden lg:block h-full">
               <ServicePreview service={activeService} />
            </div>
            
            {/* Mobile Fallback - Accordion style is simulated by just rendering underneath in mobile? 
                Actually, the requirements said: 
                Mobile: Accordion-style services OR full-width images. 
                For now, rendering the preview right below the list on mobile works. 
            */}
            <div className="block lg:hidden mt-8">
              <ServicePreview service={activeService} />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
