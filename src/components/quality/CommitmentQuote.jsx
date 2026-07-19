import { cn } from "@/lib/utils";

export function CommitmentQuote({ className }) {
  return (
    <div className={cn("max-w-4xl mx-auto text-center px-4", className)}>
      <blockquote className="text-3xl md:text-4xl lg:text-6xl font-heading font-medium leading-tight md:leading-[1.2] text-foreground tracking-tight">
        "Quality is not an upgrade—it's the <span className="text-[#C5A059] font-serif italic font-normal tracking-normal">foundation</span> of every Renovera project."
      </blockquote>
    </div>
  );
}
