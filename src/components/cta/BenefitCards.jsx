import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

export function BenefitCards({ className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full max-w-[1000px] mx-auto", className)}>
      {ctaData.benefits.map((benefit, idx) => (
        <div 
          key={idx} 
          className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white"
        >
          <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold uppercase tracking-widest">{benefit}</span>
        </div>
      ))}
    </div>
  );
}
