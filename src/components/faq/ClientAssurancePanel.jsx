import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { assuranceData } from "./faqData";

export function ClientAssurancePanel({ className }) {
  return (
    <div className={cn("bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col h-full sticky top-32", className)}>
      
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
        {assuranceData.badge}
      </span>
      
      <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4 tracking-tight leading-[1.2]">
        {assuranceData.title}
      </h3>
      
      <p className="text-base text-muted-foreground leading-relaxed mb-8">
        {assuranceData.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-col gap-4 mb-10 border-b border-border/50 pb-10">
        {assuranceData.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <span className="text-sm font-medium text-foreground">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-6 mb-10 flex-1">
        {assuranceData.metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {metric.label}
            </span>
            <span className="text-xl md:text-2xl font-bold font-heading text-foreground">
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      <Link 
        href={assuranceData.ctaLink}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-colors duration-300 rounded-none group mt-auto"
      >
        {assuranceData.ctaText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>

    </div>
  );
}
