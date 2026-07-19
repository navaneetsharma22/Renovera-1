import { cn } from "@/lib/utils";

export function TimelineNavigation({ steps, activeStepId, onStepClick, className }) {
  return (
    <div className={cn("flex flex-col relative", className)}>
      {/* Background track line */}
      <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-border/40" />

      {steps.map((step, index) => {
        const isActive = activeStepId === step.id;

        return (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className="flex items-start text-left py-4 md:py-6 group relative z-10"
          >
            {/* Indicator */}
            <div className="relative flex items-center justify-center shrink-0 mt-1 mr-6 md:mr-8 w-2 h-2">
              <div 
                className={cn(
                  "absolute w-[7px] h-[7px] rounded-full transition-colors duration-500",
                  isActive ? "bg-[#C5A059]" : "bg-border group-hover:bg-foreground/40"
                )} 
              />
              {isActive && (
                <div className="absolute w-4 h-4 rounded-full border border-[#C5A059] animate-pulse" />
              )}
            </div>

            <div className="flex gap-4 md:gap-6 items-baseline transition-transform duration-500 group-hover:translate-x-1">
              <span className={cn(
                "text-xs md:text-sm font-mono font-bold transition-colors duration-500",
                isActive ? "text-[#C5A059]" : "text-muted-foreground"
              )}>
                {step.number}
              </span>
              <span className={cn(
                "text-lg md:text-xl lg:text-2xl font-bold font-heading transition-colors duration-500",
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/70"
              )}>
                {step.shortName}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
