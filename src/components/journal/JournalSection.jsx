"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { SectionHeader } from "./SectionHeader";
import { FeaturedArticle } from "./FeaturedArticle";
import { CategoryFilters } from "./CategoryFilters";
import { ArticleGrid } from "./ArticleGrid";
import { NewsletterPreview } from "./NewsletterPreview";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function JournalSection({ className }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featureRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);
  const newsletterRef = useRef(null);

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

    // Reveal Featured Article
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

    // Reveal Filters
    gsap.fromTo(filtersRef.current,
      { y: 30, opacity: 0 },
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

    // Stagger Article Cards
    gsap.fromTo(gridRef.current.children,
      { y: 50, opacity: 0 },
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

    // Reveal Newsletter
    gsap.fromTo(newsletterRef.current,
      { y: 40, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
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
            badge="Design Journal"
            title="Ideas That Shape Extraordinary Spaces."
            highlight="Extraordinary Spaces."
            description="Discover expert insights, renovation guides, architectural inspiration, and practical advice to help you make confident design decisions."
          />
        </div>

        {/* Featured Article */}
        <div ref={featureRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <FeaturedArticle />
        </div>

        {/* Latest Insights Section */}
        <div className="max-w-[1200px] mx-auto mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span>
            Latest Insights
          </h3>
        </div>

        {/* Category Filters */}
        <div ref={filtersRef} className="max-w-[1200px] mx-auto mb-12">
          <CategoryFilters />
        </div>

        {/* Article Grid */}
        <div ref={gridRef} className="max-w-[1200px] mx-auto mb-24 md:mb-32">
          <ArticleGrid />
        </div>

        {/* Newsletter Preview */}
        <div ref={newsletterRef} className="max-w-[1200px] mx-auto pt-16 border-t border-border/50">
          <NewsletterPreview />
        </div>

      </div>
    </section>
  );
}
