import { cn } from "@/lib/utils";
import { metrics } from "./testimonialsData";

export function ClientMetrics({ className }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto", className)}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left border-t border-border pt-6 group">
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground tracking-tight mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
            {metric.value}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}
