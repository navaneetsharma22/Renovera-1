"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";
import { CategoryFilters } from "./CategoryFilters";
import { ServiceCard } from "./ServiceCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function InteractiveServiceGrid({ className }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const filteredServices = activeCategory === "All" 
    ? servicesPageData.services 
    : servicesPageData.services.filter(s => s.category === activeCategory);

  useGSAP(() => {
    // Initial Reveal
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  // Animate grid change on category switch
  useEffect(() => {
    if (!gridRef.current) return;
    const elements = gridRef.current.children;
    gsap.fromTo(elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* Sticky category filters on mobile */}
        <div className="sticky top-20 z-20 bg-[#FAFAFA]/95 backdrop-blur-md pt-4 pb-4 md:static md:bg-transparent md:pt-0 md:pb-0 border-b border-[#E4E4E7] md:border-none mb-12">
          <CategoryFilters 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            className="mb-0 md:mb-16"
          />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[500px]">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {filteredServices.length === 0 && (
            <div className="col-span-full py-24 text-center text-[#52525B]">
              No services found for this category.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
