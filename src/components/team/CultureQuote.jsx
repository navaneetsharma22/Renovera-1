import { cn } from "@/lib/utils";

export function CultureQuote({ className }) {
  return (
    <div className={cn("max-w-4xl mx-auto text-center px-4", className)}>
      <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium leading-tight md:leading-[1.3] text-foreground tracking-tight">
        "Our greatest strength isn't just our designs—it's the <span className="text-[#C5A059] font-serif italic font-normal tracking-normal">collaborative mindset</span>, technical expertise, and shared commitment that every team member brings to each project."
      </blockquote>
    </div>
  );
}
