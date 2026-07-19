"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FeaturedArticle({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const article = journalPageData.featuredArticle;

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div ref={imageRef} className="w-full lg:w-[60%] relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src={article.image}
              alt={article.title}
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#09090B]/10 group-hover:bg-[#09090B]/0 transition-colors duration-500 pointer-events-none" />
          </div>

          <div ref={contentRef} className="w-full lg:w-[40%] flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              Editor's Pick
            </span>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-[#52525B] mb-6">
              <span>{article.category}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-6 tracking-tight leading-[1.1]">
              {article.title}
            </h3>

            <p className="text-base md:text-lg text-[#52525B] leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E4E4E7]">
                <Image src={article.author.image} alt={article.author.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#09090B]">{article.author.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B]">{article.author.role}</span>
              </div>
            </div>

            <Link 
              href={`/journal/${article.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group/btn"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
