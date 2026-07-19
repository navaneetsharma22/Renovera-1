import { cn } from "@/lib/utils";

export function QualityCard({ standard, className }) {
  const Icon = standard.icon;
  
  return (
    <div className={cn(
      "group bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30",
      className
    )}>
      <div className="flex flex-col mb-8">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="w-14 h-14 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-border group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/30 transition-colors duration-500">
            <Icon className="size-6 text-foreground group-hover:text-[#C5A059] transition-colors duration-500 stroke-[1.5]" />
          </div>
          <span className="text-sm font-mono font-bold text-muted-foreground group-hover:text-[#C5A059] transition-colors duration-500">
            {standard.number}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground group-hover:text-[#C5A059] transition-colors duration-500">
          {standard.title}
        </h3>
      </div>

      <p className="text-base text-muted-foreground leading-relaxed">
        {standard.description}
      </p>
    </div>
  );
}
