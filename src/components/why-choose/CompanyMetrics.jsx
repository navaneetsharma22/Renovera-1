import { cn } from "@/lib/utils";
import { metrics } from "./whyChooseData";

export function CompanyMetrics({ className }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12", className)}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left border-t border-[#C5A059]/30 pt-6">
          <span className="text-4xl md:text-5xl lg:text-5xl font-bold font-heading text-foreground tracking-tight mb-2">
            {metric.value}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}
