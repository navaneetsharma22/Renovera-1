import { cn } from "@/lib/utils";
import { ArrowDown, Mouse } from "lucide-react";

export function ScrollIndicator({ variant = "line", label = "Scroll", className }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="flex flex-col items-center gap-4 animate-bounce">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70 rotate-90 my-6">
          Scroll
        </span>
        <ArrowDown className="size-4 text-white/70" />
      </div>

      {variant === "mouse" && (
        <Mouse className="size-5 text-muted-foreground" />
      )}

      {variant === "arrow" && (
        <ArrowDown className="size-4 text-muted-foreground animate-bounce" />
      )}
    </div>
  );
}
