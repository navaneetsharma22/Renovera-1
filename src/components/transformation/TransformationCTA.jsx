import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TransformationCTA({ className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4 mt-8", className)}>
      <Button 
        size="lg" 
        asChild 
        className="group relative h-14 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 px-8"
      >
        <Link href="/projects/luxury-villa">
          View Complete Case Study
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        asChild 
        className="group h-14 bg-transparent border-border text-foreground hover:bg-muted hover:border-border transition-all duration-300 px-8"
      >
        <Link href="/projects">
          Explore All Projects
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}
