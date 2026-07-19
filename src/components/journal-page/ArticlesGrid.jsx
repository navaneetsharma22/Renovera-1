"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";
import { ArticleCard } from "./ArticleCard";
import { JournalSearchAndFilters } from "./JournalSearchAndFilters";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ArticlesGrid({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRoom, setActiveRoom] = useState("All Rooms");
  const [activeStyle, setActiveStyle] = useState("All Styles");
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter Logic
  const filteredArticles = journalPageData.articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesRoom = activeRoom === "All Rooms" || article.room === activeRoom;
    const matchesStyle = activeStyle === "All Styles" || article.style === activeStyle;
    return matchesSearch && matchesCategory && matchesRoom && matchesStyle;
  });

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

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
  }, [activeCategory, activeRoom, activeStyle, searchQuery]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <JournalSearchAndFilters 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        activeCategory={activeCategory} setActiveCategory={setActiveCategory}
        activeRoom={activeRoom} setActiveRoom={setActiveRoom}
        activeStyle={activeStyle} setActiveStyle={setActiveStyle}
      />

      <section ref={sectionRef} className={cn("py-24 bg-white min-h-[500px]", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="py-24 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold font-heading text-[#09090B] mb-2">No Articles Found</h3>
              <p className="text-[#52525B]">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setActiveRoom("All Rooms");
                  setActiveStyle("All Styles");
                }}
                className="mt-6 px-6 py-3 bg-[#09090B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
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
                {isLoading ? "Loading..." : "Load More Articles"}
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
