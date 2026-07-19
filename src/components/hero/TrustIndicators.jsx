import { cn } from "@/lib/utils";
import { Building, ShieldCheck, Star, Trophy } from "lucide-react";

export function TrustIndicators({ items = [], className }) {
  if (!items.length) return null;

  // Map values to specific icons based on the design
  const getIcon = (value) => {
    switch(value) {
      case "500+": return <Building className="size-7 text-white/90 stroke-1" />;
      case "15+": return <ShieldCheck className="size-7 text-white/90 stroke-1" />;
      case "98%": return <Star className="size-7 text-white/90 stroke-1" />;
      case "Award": return <Trophy className="size-7 text-white/90 stroke-1" />;
      default: return <ShieldCheck className="size-7 text-white/90 stroke-1" />;
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-12 md:gap-16 lg:gap-20 mt-16", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-start gap-3 relative">
          {getIcon(item.value)}
          <div>
            <div className="text-white font-bold text-2xl md:text-3xl font-heading tracking-tight mb-1">{item.value}</div>
            <div className="text-white/60 text-[11px] font-medium uppercase tracking-[0.15em] max-w-[90px] leading-snug">{item.label}</div>
          </div>
          {idx !== items.length - 1 && (
            <div className="absolute -right-5 md:-right-7 lg:-right-8 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
