import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

export function CTAContent({ className }) {
  return (
    <div className={cn("flex flex-col items-center text-center max-w-[760px] mx-auto", className)}>
      <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 md:mb-6 block">
        {ctaData.badge}
      </span>
      
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] mb-6 md:mb-8 text-white">
        {ctaData.heading}
      </h2>

      <p className="text-base md:text-xl text-white/70 leading-relaxed font-medium">
        {ctaData.description}
      </p>
    </div>
  );
}
