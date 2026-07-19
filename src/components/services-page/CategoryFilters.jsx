"use client";

import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";

export function CategoryFilters({ activeCategory, setActiveCategory, className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16", className)}>
      {servicesPageData.categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setActiveCategory(category.name)}
          className={cn(
            "px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2",
            activeCategory === category.name 
              ? "bg-[#09090B] text-white border-[#09090B]" 
              : "bg-transparent text-[#52525B] border-[#E4E4E7] hover:border-[#09090B] hover:text-[#09090B]"
          )}
        >
          <span>{category.name}</span>
          <span className={cn(
            "text-[9px] px-1.5 py-0.5 rounded-full",
            activeCategory === category.name ? "bg-white/20" : "bg-[#F4F4F5]"
          )}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
}
