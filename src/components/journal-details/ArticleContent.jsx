"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ArticleContent({ htmlContent, className }) {
  const contentRef = useRef(null);

  useGSAP(() => {
    // Fade in text elements as they scroll into view
    const elements = contentRef.current.querySelectorAll("p, h2, h3, ul, ol, blockquote, div");
    
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: contentRef });

  return (
    <div 
      ref={contentRef}
      className={cn(
        "prose prose-lg md:prose-xl max-w-none w-full text-[#52525B] leading-relaxed",
        "prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#09090B] prose-headings:tracking-tight",
        "prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6",
        "prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-4",
        "prose-p:mb-8",
        "prose-a:text-[#C5A059] prose-a:no-underline hover:prose-a:underline",
        "prose-ul:list-none prose-ul:pl-0",
        "prose-li:relative prose-li:pl-6 prose-li:mb-4",
        "marker:prose-li:content-[''] before:prose-li:absolute before:prose-li:left-0 before:prose-li:top-[0.6em] before:prose-li:w-2 before:prose-li:h-2 before:prose-li:bg-[#C5A059] before:prose-li:rounded-full",
        className
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
