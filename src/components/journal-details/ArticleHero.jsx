"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function ArticleHero({ article, className }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(bgRef.current,
      { scale: 1.05 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("relative min-h-[90vh] flex items-end justify-start overflow-hidden pt-32 pb-16 md:pb-24", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src={article.featuredImage}
          alt={article.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-[#09090B]/40 to-[#09090B]/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div ref={contentRef} className="max-w-[900px] flex flex-col">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </nav>

          <span className="inline-block self-start px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-6">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-white mb-6 md:mb-8">
            {article.title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-[700px]">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30">
                <Image src={article.author.image} alt={article.author.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">{article.author.name}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Author</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
              <Calendar className="w-4 h-4" />
              {article.publishDate}
            </div>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
