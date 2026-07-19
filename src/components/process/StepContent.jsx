import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StepContent({ step }) {
  if (!step) return null;

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
      {/* Step Header */}
      <div className="flex flex-col mb-10">
        <span className="text-sm font-mono font-bold text-[#C5A059] mb-4">Step {step.number}</span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6 leading-tight">
          {titleWithHighlights(step.title)}
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {step.description}
        </p>
      </div>

      {/* Image Panel */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.3/1] rounded-2xl overflow-hidden mb-12 shadow-xl border border-border/50">
        <Image 
          src={step.image}
          alt={step.title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Grid for Deliverables and Meta */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Deliverables */}
        <div className="lg:col-span-8">
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6 flex items-center gap-2">
            <div className="w-4 h-[1px] bg-[#C5A059]" />
            Key Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {step.deliverables.map((item, idx) => (
              <div key={idx} className="bg-card p-5 rounded-xl border border-border/50 shadow-sm flex items-start gap-3 transition-colors hover:border-[#C5A059]/40">
                <CheckCircle2 className="size-4 text-[#C5A059] mt-0.5 shrink-0" />
                <span className="text-sm md:text-base font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[#C5A059]" />
              Estimated Timeline
            </h4>
            <span className="text-2xl md:text-3xl font-bold font-heading text-foreground block mb-8 pb-8 border-b border-border/50">
              {step.timeline}
            </span>
          </div>
          
          <Button asChild size="lg" className="w-full group h-14 bg-foreground text-background hover:bg-foreground/90">
            <Link href="/contact">
              Discuss this phase
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}

function titleWithHighlights(title) {
  // Simple heuristic to colorize the first word or the word before '&'
  const parts = title.split(" & ");
  if (parts.length > 1) {
    return (
      <>
        <span className="text-[#C5A059] font-serif italic font-normal tracking-normal">{parts[0]}</span> & {parts[1]}
      </>
    );
  }
  return title;
}
