import { cn } from "@/lib/utils";

export function CommitmentQuote({ className }) {
  return (
    <div className={cn("max-w-5xl mx-auto text-center px-4", className)}>
      <blockquote className="text-2xl md:text-3xl lg:text-5xl font-heading font-medium leading-tight md:leading-[1.3] text-foreground tracking-tight">
        "We believe every renovation should combine exceptional design, technical precision, and transparent collaboration—creating homes that <span className="text-[#C5A059] font-serif italic font-normal tracking-normal">inspire</span> for generations."
      </blockquote>
    </div>
  );
}
