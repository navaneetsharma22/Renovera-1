import Image from "next/image";
import { cn } from "@/lib/utils";

export function MaterialCard({ material, className }) {
  return (
    <div className={cn("group flex flex-col relative w-[280px] md:w-[320px] lg:w-full shrink-0 rounded-2xl overflow-hidden cursor-pointer h-full", className)}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
        <Image 
          src={material.image}
          alt={material.name}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        {/* Dark overlay on hover for better text readability */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-2xl font-bold font-heading text-white mb-2 shadow-sm drop-shadow-md">
            {material.name}
          </h4>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2 block">
              Application: {material.application}
            </span>
            <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
              {material.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
