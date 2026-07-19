import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleCard({ article, className }) {
  return (
    <div className={cn("group flex flex-col bg-white border border-[#E4E4E7] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500", className)}>
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
          <h4 className="text-xl md:text-2xl font-bold font-heading text-[#09090B] mb-3 group-hover:text-[#C5A059] transition-colors duration-300 leading-tight">
            {article.title}
          </h4>
        </Link>
        
        <p className="text-sm text-[#52525B] leading-relaxed mb-6 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-[#E4E4E7] mt-auto">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E4E4E7]">
              <Image src={article.author.image} alt={article.author.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <span className="text-xs font-bold text-[#09090B]">{article.author.name}</span>
          </div>
          
          <Link 
            href={`/journal/${article.slug}`}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#09090B] group-hover:text-[#C5A059] transition-colors duration-300"
          >
            Read <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
