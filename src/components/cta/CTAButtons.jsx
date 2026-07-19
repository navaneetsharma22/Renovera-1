import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

export function CTAButtons({ className }) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto", className)}>
      <Link 
        href={ctaData.primaryCTA.link}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-[#09090B] font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none group"
      >
        {ctaData.primaryCTA.text}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <Link 
        href={ctaData.secondaryCTA.link}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:border-white hover:bg-white/5 transition-colors duration-300 rounded-none"
      >
        {ctaData.secondaryCTA.text}
      </Link>
    </div>
  );
}
