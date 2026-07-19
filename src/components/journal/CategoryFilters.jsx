"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { categories } from "./journalData";

export function CategoryFilters({ className }) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 md:gap-4", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
            activeCategory === category 
              ? "bg-foreground text-background border-foreground" 
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
