import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectsCTA({ className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4 mt-16 md:mt-24", className)}>
      <Button 
        size="lg" 
        asChild 
        className="group h-14 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
      >
        <Link href="/projects">
          View All Projects
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        asChild 
        className="group h-14 bg-transparent border-border text-foreground hover:bg-muted hover:border-border px-8"
      >
        <Link href="/contact">
          <Calendar className="mr-2 size-4" />
          Schedule Consultation
        </Link>
      </Button>
    </div>
  );
}
