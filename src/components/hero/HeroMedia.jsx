import { cn } from "@/lib/utils";

export function HeroMedia({ children, className }) {
  return (
    <div className={cn(
      "relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-0 bg-muted overflow-hidden rounded-sm group",
      className
    )}>
      {children}
    </div>
  );
}
