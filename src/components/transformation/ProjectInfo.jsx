import { cn } from "@/lib/utils";

export function ProjectInfo({ className }) {
  const details = [
    { label: "Project Name", value: "Luxury Villa Renovation" },
    { label: "Location", value: "Goa, India" },
    { label: "Timeline", value: "8 Months" },
    { label: "Project Size", value: "6,500 Sq Ft" },
    { label: "Investment", value: "₹2.8 Cr" },
    { label: "Completion", value: "2025" },
  ];

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8", className)}>
      {/* Specs Grid */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-y-8 gap-x-6">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-col border-l border-border/60 pl-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">{detail.label}</span>
            <span className="text-base md:text-lg font-bold text-foreground font-heading">{detail.value}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:pl-12 lg:border-l border-border/60">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
            <div className="w-4 h-[1px] bg-[#C5A059]" />
            The Challenge
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            The client acquired a dated 1980s property with a closed-off floor plan and poor natural lighting. The objective was to modernize the entire layout into an open, bright luxury contemporary home while maintaining the original structural footprint.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
            <div className="w-4 h-[1px] bg-[#C5A059]" />
            Our Solution
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            We completely gutted the interior, removing non-load-bearing walls to create a vast open living space. By installing floor-to-ceiling panoramic glass and introducing premium materials like imported Italian marble and warm bespoke wood paneling, we delivered a timeless architectural masterpiece.
          </p>
        </div>
      </div>
    </div>
  );
}
