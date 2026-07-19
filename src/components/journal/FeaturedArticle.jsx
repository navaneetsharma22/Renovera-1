import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { featuredArticle } from "./journalData";

export function FeaturedArticle({ className }) {
  return (
    <div className={cn("group flex flex-col cursor-pointer", className)}>
      {/* Magazine Cover Image */}
      <div className="relative w-full aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden bg-muted mb-8 md:mb-12">
        <Image 
          src={featuredArticle.image}
          alt={featuredArticle.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
        
        {/* Category Badge overlay on image */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
            {featuredArticle.category}
          </span>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="flex flex-col max-w-4xl mx-auto text-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
          <span className="flex items-center gap-2">
            <User className="w-3.5 h-3.5" /> {featuredArticle.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" /> {featuredArticle.publishDate}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> {featuredArticle.readingTime}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6 tracking-tight leading-[1.1] group-hover:text-[#C5A059] transition-colors duration-500">
          {featuredArticle.title}
        </h3>

        <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-8">
          {featuredArticle.summary}
        </p>

        <div className="flex justify-center">
          <Link 
            href={featuredArticle.slug}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-[#C5A059] transition-colors duration-300 group/link"
          >
            {featuredArticle.ctaText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>

    </div>
  );
}
