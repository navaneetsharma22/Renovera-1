import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

export function TrustIndicators({ className }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-[1000px] mx-auto", className)}>
      {ctaData.metrics.map((metric, idx) => (
        <div key={idx} className="flex flex-col items-center text-center border-t border-white/20 pt-6 group">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
            {metric.value}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 leading-tight">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}
