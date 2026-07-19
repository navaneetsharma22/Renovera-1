"use client";

import { useRef } from "react";
import { TrendingUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function TrendingTopics({ className }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-16 md:py-24 bg-[#FAFAFA] border-y border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-[#C5A059]" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#09090B]">
            Trending Topics
          </h3>
        </div>

        <div ref={listRef} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {journalPageData.trendingTopics.map((topic, idx) => (
            <button 
              key={idx}
              className="px-6 py-3 bg-white border border-[#E4E4E7] rounded-full text-sm font-bold text-[#52525B] hover:text-[#09090B] hover:border-[#09090B] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {topic}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
