import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { featuredStory } from "./testimonialsData";

export function FeaturedStory({ className }) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center", className)}>
      
      {/* Content Side */}
      <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
          Featured Story
        </span>
        
        <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 tracking-tight leading-[1.2]">
          {featuredStory.clientName}
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {featuredStory.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {featuredStory.duration}
          </span>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
          {featuredStory.summary}
        </p>

        <blockquote className="border-l-2 border-[#C5A059] pl-6 mb-10">
          <p className="text-lg md:text-xl font-serif italic text-foreground leading-snug">
            "{featuredStory.quote}"
          </p>
        </blockquote>

        <div>
          <Link 
            href={featuredStory.ctaLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-[#C5A059] transition-colors duration-300 rounded-none group"
          >
            Read Full Story
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image Side */}
      <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted group order-1 lg:order-2">
        <Image 
          src={featuredStory.coverImage}
          alt={featuredStory.clientName}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
      </div>

    </div>
  );
}
