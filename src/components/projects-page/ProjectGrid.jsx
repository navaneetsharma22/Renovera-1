"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";
import { ProjectCard } from "./ProjectCard";
import { SearchAndFilters } from "./SearchAndFilters";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ProjectGrid({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [activeStyle, setActiveStyle] = useState("All Styles");
  const [activeStatus, setActiveStatus] = useState("All Status");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter Logic
  const filteredProjects = projectsPageData.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesLocation = activeLocation === "All Locations" || project.location === activeLocation;
    const matchesStyle = activeStyle === "All Styles" || project.style === activeStyle;
    const matchesStatus = activeStatus === "All Status" || project.status === activeStatus;
    return matchesSearch && matchesCategory && matchesLocation && matchesStyle && matchesStatus;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
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

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeCategory, activeLocation, activeStyle, activeStatus, searchQuery]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <SearchAndFilters 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        activeCategory={activeCategory} setActiveCategory={setActiveCategory}
        activeLocation={activeLocation} setActiveLocation={setActiveLocation}
        activeStyle={activeStyle} setActiveStyle={setActiveStyle}
        activeStatus={activeStatus} setActiveStatus={setActiveStatus}
      />

      <section ref={sectionRef} className={cn("py-24 bg-white min-h-[500px]", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          
          <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {visibleProjects.map((project, idx) => {
              // Create varied aspect ratios for masonry effect
              const heights = ["h-[400px]", "h-[500px]", "h-[600px]"];
              const randomHeight = heights[idx % 3];
              return (
                <div key={project.id} className="break-inside-avoid relative">
                  <ProjectCard 
                    project={project} 
                    className={cn("w-full", randomHeight)}
                  />
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold font-heading text-[#09090B] mb-2">No Projects Found</h3>
              <p className="text-[#52525B]">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setActiveLocation("All Locations");
                  setActiveStyle("All Styles");
                  setActiveStatus("All Status");
                }}
                className="mt-6 px-6 py-3 bg-[#09090B] text-white text-xs font-bold uppercase tracking-widest"
              >
                Clear Filters
              </button>
            </div>
          )}

          {hasMore && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border border-[#E4E4E7] text-[#09090B] font-bold uppercase tracking-widest text-xs hover:border-[#09090B] transition-colors duration-300 disabled:opacity-50"
              >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {isLoading ? "Loading..." : "Load More Projects"}
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
