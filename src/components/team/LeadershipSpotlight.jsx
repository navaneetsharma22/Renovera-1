import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { leader } from "./teamData";

export function LeadershipSpotlight({ className }) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center", className)}>
      
      {/* Portrait Side */}
      <div className="lg:col-span-5 relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted group">
        <Image 
          src={leader.portrait}
          alt={leader.name}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
      </div>

      {/* Content Side */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
          Leadership Spotlight
        </span>
        
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 tracking-tight leading-[1.1]">
          {leader.name}
        </h3>
        
        <p className="text-lg md:text-xl font-medium text-foreground/80 mb-8 font-heading italic">
          {leader.role}
        </p>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          {leader.biography}
        </p>

        <blockquote className="border-l-2 border-[#C5A059] pl-6 mb-10 max-w-2xl">
          <p className="text-lg md:text-2xl font-serif italic text-foreground leading-snug">
            "{leader.quote}"
          </p>
        </blockquote>

        <div className="flex items-center gap-8">
          <Link 
            href={leader.profileLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-[#C5A059] transition-colors duration-300 rounded-none group"
          >
            View Profile
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {leader.yearsExperience}
          </span>
        </div>
      </div>

    </div>
  );
}
