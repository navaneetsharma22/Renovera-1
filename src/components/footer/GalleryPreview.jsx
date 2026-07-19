import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function GalleryPreview({ className }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <h4 className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA] mb-8">
        Studio Gallery
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {footerData.gallery.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.link}
            className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#18181B] group border border-white/10"
          >
            <Image 
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-[#09090B]/0 group-hover:bg-[#09090B]/60 transition-colors duration-500 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
