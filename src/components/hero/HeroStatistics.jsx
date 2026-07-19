import { cn } from "@/lib/utils";

/**
 * Renders large statistical numbers with small labels underneath.
 */
export function HeroStatistics({ items = [], columns = 2, animationReady = false, className }) {
  if (!items.length) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-y-8 pt-8", className)}>
      {items.map((stat, idx) => (
        <div 
          key={idx} 
          className={cn(
            "flex flex-col gap-1.5 w-1/2 sm:w-auto sm:flex-1 transition-all duration-300 hover:scale-105 hover:text-primary cursor-default group",
            idx !== 0 && "sm:border-l sm:border-border/60 sm:pl-8",
            idx % 2 !== 0 && "pl-8 border-l border-border/60 sm:border-0 sm:pl-0",
            idx > 0 && idx % 2 !== 0 && "sm:pl-8 sm:border-l sm:border-border/60"
          )}
        >
          <span className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight transition-colors group-hover:text-primary">
            {stat.value}
          </span>
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
