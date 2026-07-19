"use client";

import { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div 
      className={cn(
        "bg-card border-b border-border/50 overflow-hidden transition-colors duration-500",
        isOpen ? "bg-[#FAFAFA]" : "hover:bg-[#FAFAFA]/50"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left p-6 md:p-8 focus:outline-none group"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${faq.id}`}
      >
        <span className={cn(
          "text-lg md:text-xl font-bold font-heading pr-8 transition-colors duration-300",
          isOpen ? "text-[#C5A059]" : "text-foreground group-hover:text-[#C5A059]"
        )}>
          {faq.question}
        </span>
        
        <div className="shrink-0 relative w-6 h-6 flex items-center justify-center">
          <Plus className={cn("absolute w-5 h-5 text-muted-foreground transition-all duration-300 transform", isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100 group-hover:text-[#C5A059]")} strokeWidth={1.5} />
          <Minus className={cn("absolute w-5 h-5 text-[#C5A059] transition-all duration-300 transform", isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")} strokeWidth={1.5} />
        </div>
      </button>

      <div
        id={`faq-content-${faq.id}`}
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 100 + "px" : "0px",
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="p-6 md:p-8 pt-0 text-base md:text-lg text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
