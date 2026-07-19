import { cn } from "@/lib/utils";

export function ProjectMetrics({ className }) {
  const metrics = [
    { value: "40%", label: "Property Value Increased" },
    { value: "8", suffix: " Months", label: "Completion Time" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "6500", suffix: " Sq Ft", label: "Renovated" },
  ];

  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12", className)}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex flex-col items-start border-t border-[#C5A059]/30 pt-6">
          <div className="flex items-baseline mb-2">
            <span className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight">{metric.value}</span>
            {metric.suffix && <span className="text-xl md:text-2xl font-medium text-foreground ml-1">{metric.suffix}</span>}
          </div>
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
