"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function RelatedArticles({ articles, className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
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

  if (!articles || articles.length === 0) return null;

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex items-center justify-between gap-8 mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Continue Reading
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              Related Articles.
            </h3>
          </div>
          <Link 
            href="/journal"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="group flex flex-col bg-white border border-[#E4E4E7] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
              <Link href={`/journal/${article.slug}`} className="relative w-full aspect-[4/3] bg-muted overflow-hidden block">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090B]">
                    {article.category}
                  </span>
                </div>
              </Link>
              
              <div className="flex flex-col flex-grow p-6 lg:p-8">
                <div className="flex items-center gap-x-4 text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                
                <Link href={`/journal/${article.slug}`}>
                  <h4 className="text-xl md:text-2xl font-bold font-heading text-[#09090B] mb-6 group-hover:text-[#C5A059] transition-colors duration-300 leading-tight">
                    {article.title}
                  </h4>
                </Link>
                
                <div className="mt-auto pt-6 border-t border-[#E4E4E7]">
                  <Link 
                    href={`/journal/${article.slug}`}
                    className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#09090B] group-hover:text-[#C5A059] transition-colors duration-300"
                  >
                    Read Article <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
