import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function ProjectHighlights({ className }) {
  const highlights = [
    "Complete Structural Renovation",
    "Luxury Interior Upgrade",
    "Landscape Redesign",
    "Smart Home Integration",
    "Energy Efficient Systems",
    "Premium Imported Materials",
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6", className)}>
      {highlights.map((highlight, idx) => (
        <div 
          key={idx} 
          className="bg-card p-6 md:p-8 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border group flex items-start gap-4"
        >
          <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="size-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-sm md:text-base font-medium text-foreground leading-snug">
            {highlight}
          </span>
        </div>
      ))}
    </div>
  );
}
