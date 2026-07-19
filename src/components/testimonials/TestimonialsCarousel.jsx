"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export function TestimonialsCarousel({ className }) {
  const scrollRef = useRef(null);

  return (
    <div className={cn("w-full relative group", className)}>
      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 sm:pl-6 lg:pl-0 pr-4 sm:pr-6 lg:pr-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="snap-start w-[85vw] sm:w-[45vw] lg:w-[400px] shrink-0 h-auto flex">
            <TestimonialCard testimonial={testimonial} className="w-full" />
          </div>
        ))}
      </div>
      
      {/* Hide Scrollbar CSS trick */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
