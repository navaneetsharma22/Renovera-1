import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleCard({ article, className }) {
  return (
    <div className={cn("group flex flex-col cursor-pointer bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30 transition-all duration-500 h-full", className)}>
      {/* Cover Image */}
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image 
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        
        {/* Category Badge overlay on image */}
        <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#C5A059]">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
          <span>{article.publishDate}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime}</span>
        </div>
        
        <h4 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-[#C5A059] transition-colors duration-500 leading-tight">
          {article.title}
        </h4>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto border-t border-border/50 pt-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
            By {article.author}
          </span>
          <Link 
            href={article.slug}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-[#C5A059] transition-colors duration-300 group/link"
          >
            Read
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
