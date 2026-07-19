import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left group border-b border-border/50 py-8 transition-all duration-500 flex items-center justify-between",
        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
      )}
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
        <span className={cn(
          "text-sm font-bold font-mono transition-colors duration-500",
          isActive ? "text-[#C5A059]" : "text-muted-foreground"
        )}>
          {service.number}
        </span>
        <h3 className={cn(
          "text-3xl md:text-4xl font-bold font-heading transition-all duration-500",
          isActive ? "text-foreground translate-x-0" : "text-foreground group-hover:translate-x-2"
        )}>
          {service.title}
        </h3>
      </div>
      
      <div className={cn(
        "hidden md:flex items-center justify-center size-12 rounded-full border transition-all duration-500 shrink-0",
        isActive 
          ? "border-[#C5A059] bg-[#C5A059] text-white" 
          : "border-transparent text-transparent"
      )}>
        <ArrowRight className="size-5 transition-transform duration-500 -rotate-45" />
      </div>
    </button>
  );
}
