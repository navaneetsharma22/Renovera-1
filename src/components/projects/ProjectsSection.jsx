"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { CategoryFilters } from "./CategoryFilters";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectsCTA } from "./ProjectsCTA";
import { projectsData, categories } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectsSection({ className }) {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const contentRef = useRef(null); // Ref to animate when category changes

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = filteredProjects.length > 0 ? filteredProjects[0] : null;
  const gridProjects = filteredProjects.length > 1 ? filteredProjects.slice(1) : [];

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

    // Reveal Filters
    gsap.fromTo(filtersRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: filtersRef.current,
          start: "top 85%",
        }
      }
    );

    // Reveal Content
    gsap.fromTo(contentRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  // Animate content when category changes
  useEffect(() => {
    if (!contentRef.current) return;
    
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="mb-12 md:mb-16">
          <SectionHeader 
            badge="Featured Projects"
            title="Spaces That Speak For Themselves."
            highlight="For Themselves."
            description="Explore a curated collection of residential renovations, architectural transformations, and luxury living spaces crafted with precision and timeless design."
          />
        </div>

        {/* Filters */}
        <div ref={filtersRef} className="mb-16 md:mb-24">
          <CategoryFilters 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Dynamic Content Area (Featured + Grid) */}
        <div ref={contentRef} className="flex flex-col gap-12 md:gap-20">
          
          {featuredProject && (
            <div>
              <FeaturedProject project={featuredProject} />
            </div>
          )}

          {gridProjects.length > 0 && (
            <div>
              <ProjectGrid projects={gridProjects} />
            </div>
          )}

          {!featuredProject && gridProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}

        </div>

        {/* CTA */}
        <ProjectsCTA />

      </div>
    </section>
  );
}
