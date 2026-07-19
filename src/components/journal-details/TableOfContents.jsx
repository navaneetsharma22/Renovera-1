"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function TableOfContents({ items, className }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={cn("sticky top-32 hidden lg:block w-64", className)}>
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
        In this article
      </span>
      <nav className="flex flex-col border-l border-[#E4E4E7]">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={cn(
              "text-left pl-4 py-2 text-sm font-medium transition-all duration-300 border-l-2 -ml-[1px]",
              activeId === item.id 
                ? "border-[#09090B] text-[#09090B]" 
                : "border-transparent text-[#52525B] hover:text-[#09090B]"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
