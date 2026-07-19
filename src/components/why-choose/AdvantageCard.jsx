import { cn } from "@/lib/utils";

export function AdvantageCard({ advantage, className }) {
  const Icon = advantage.icon;
  
  return (
    <div className={cn(
      "group bg-white p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30",
      className
    )}>
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-border group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/30 transition-colors duration-500">
          <Icon className="size-5 text-foreground group-hover:text-[#C5A059] transition-colors duration-500 stroke-[1.5]" />
        </div>
        <span className="text-sm font-mono font-bold text-muted-foreground group-hover:text-[#C5A059] transition-colors duration-500">
          {advantage.number}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-[#C5A059] transition-colors duration-500">
        {advantage.title}
      </h3>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {advantage.description}
      </p>
    </div>
  );
}
