"use client";

import { useRef } from "react";
import { Tag, Eye, Clock, Calendar } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ArticleMetadata({ article, className }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-12 border-b border-[#E4E4E7] bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
        <div ref={containerRef} className="flex flex-wrap items-center gap-x-8 gap-y-4">
          
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#52525B]">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span className="flex flex-col">
              <span className="text-[9px] text-[#09090B]">Updated</span>
              {article.lastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#52525B]">
            <Clock className="w-4 h-4 text-[#C5A059]" />
            <span className="flex flex-col">
              <span className="text-[9px] text-[#09090B]">Read Time</span>
              {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#52525B]">
            <Eye className="w-4 h-4 text-[#C5A059]" />
            <span className="flex flex-col">
              <span className="text-[9px] text-[#09090B]">Views</span>
              {article.views}
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <Tag className="w-4 h-4 text-[#C5A059]" />
            {article.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#FAFAFA] border border-[#E4E4E7] rounded-full text-[10px] font-bold uppercase tracking-widest text-[#09090B]">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
