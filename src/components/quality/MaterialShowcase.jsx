"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { MaterialCard } from "./MaterialCard";
import { materials } from "./qualityData";

export function MaterialShowcase({ className }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Optional: Add horizontal drag-to-scroll functionality if desired, 
    // but native CSS overflow-x-auto works perfectly for mobile and desktop trackpads.
  }, []);

  return (
    <div className={cn("w-full relative", className)}>
      <div 
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbar pl-4 sm:pl-6 lg:pl-0 pr-4 sm:pr-6 lg:pr-0 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {materials.map((material) => (
          <div key={material.id} className="snap-start w-full">
            <MaterialCard material={material} className="w-full h-full" />
          </div>
        ))}
      </div>
      
      {/* Hide Scrollbar CSS trick for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
