import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial, className }) {
  return (
    <div className={cn(
      "group flex flex-col bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#C5A059]/30 h-full",
      className
    )}>
      {/* Header Info */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-muted border border-border/50">
            <Image 
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold font-heading text-foreground group-hover:text-[#C5A059] transition-colors duration-500">
              {testimonial.name}
            </h4>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {testimonial.projectType}
            </span>
          </div>
        </div>
        <Quote className="w-8 h-8 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors duration-500" />
      </div>

      {/* Quote */}
      <div className="flex-1">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic mb-8">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between border-t border-border/50 pt-6 mt-auto">
        <div className="flex items-center gap-1 text-[#C5A059]">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn("w-4 h-4", i < testimonial.rating ? "fill-current" : "opacity-30")} 
            />
          ))}
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {testimonial.location}
        </span>
      </div>
    </div>
  );
}
