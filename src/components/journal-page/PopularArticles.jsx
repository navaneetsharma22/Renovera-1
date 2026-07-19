"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function PopularArticles({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Take top 4 by views
  const popularArticles = [...journalPageData.articles]
    .sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
    .slice(0, 4);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Most Read
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              Popular Articles.
            </h3>
          </div>
          <Link 
            href="#articles"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularArticles.map((article, idx) => (
            <Link 
              key={idx} 
              href={`/journal/${article.slug}`}
              className="group flex flex-col bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#E4E4E7]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#C5A059]" />
                  <span className="text-[10px] font-bold tracking-widest text-[#09090B]">
                    {article.views}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-3">
                  {article.category}
                </span>
                <h4 className="text-xl font-bold font-heading text-[#09090B] leading-tight group-hover:text-[#C5A059] transition-colors duration-300 mb-4">
                  {article.title}
                </h4>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#52525B]">
                  {article.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
