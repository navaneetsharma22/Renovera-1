import { cn } from "@/lib/utils";

export function HeroBadge({ text, icon: Icon, variant = "default", className }) {
  const variants = {
    default: "text-muted-foreground",
    primary: "text-primary",
  };

  return (
    <div className={cn("flex items-center gap-4 mb-4 md:mb-6", className)}>
      <span className="w-8 h-px bg-border"></span>
      <span className={cn(
        "text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-2",
        variants[variant]
      )}>
        {Icon && <Icon className="size-3" />}
        {text}
      </span>
    </div>
  );
}
