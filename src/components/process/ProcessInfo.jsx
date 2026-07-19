import { cn } from "@/lib/utils";

export function ProcessInfo({ className }) {
  const metrics = [
    { label: "Average Timeline", value: "4–12 Months" },
    { label: "Project Manager", value: "Dedicated" },
    { label: "Site Updates", value: "Weekly Reports" },
    { label: "Warranty", value: "Included" },
  ];

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 bg-card p-6 md:p-10 rounded-2xl border border-border/50 shadow-sm", className)}>
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex flex-col items-start border-l border-[#C5A059]/30 pl-4 md:pl-6">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
            {metric.label}
          </span>
          <span className="text-lg md:text-xl font-bold font-heading text-foreground tracking-tight">
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  );
}
