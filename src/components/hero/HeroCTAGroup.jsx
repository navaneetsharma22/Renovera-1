import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroCTAGroup({ 
  primaryButton, 
  secondaryButton, 
  className 
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-6 mt-10", className)}>
      {primaryButton && (
        <Button 
          size="lg" 
          asChild 
          className="group relative h-14 px-8 bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all duration-300"
        >
          <Link href={primaryButton.href}>
            <span className="font-semibold">{primaryButton.label}</span>
            <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      )}
      
      {secondaryButton && (
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="group relative h-14 px-8 bg-transparent border-white/40 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500"
        >
          <Link href={secondaryButton.href}>
            <span className="font-semibold">{secondaryButton.label}</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
