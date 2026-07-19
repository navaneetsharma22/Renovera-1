import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }) {
  return (
    <div className={cn("group flex flex-col bg-white border border-[#E4E4E7] rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500", className)}>
      {/* Cover Image */}
      <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
        <Image 
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[#09090B]/5 group-hover:bg-[#09090B]/0 transition-colors duration-500 pointer-events-none" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#09090B]">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8 md:p-10">
        <h4 className="text-2xl md:text-3xl font-bold font-heading text-[#09090B] mb-4 group-hover:text-[#C5A059] transition-colors duration-500 leading-tight">
          {service.title}
        </h4>

        <p className="text-sm md:text-base text-[#52525B] leading-relaxed mb-8 flex-1">
          {service.description}
        </p>

        {/* Benefits */}
        <div className="flex flex-col gap-3 mb-8">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span className="text-sm text-[#09090B] font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-[#E4E4E7] pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#52525B]">
            <Clock className="w-4 h-4" />
            <span>{service.timeline}</span>
          </div>
          <Link 
            href={`/services/${service.slug}`}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group/link"
          >
            {service.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
