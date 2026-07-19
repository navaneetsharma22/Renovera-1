import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function StudioInfo({ className }) {
  const { studio } = footerData;
  return (
    <div className={cn("flex flex-col", className)}>
      <h4 className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA] mb-8">
        {studio.title}
      </h4>
      
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <p className="text-sm text-[#A1A1AA] leading-relaxed whitespace-pre-line">
            {studio.address}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
          <a href={`tel:${studio.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-[#A1A1AA] hover:text-[#C5A059] transition-colors duration-300">
            {studio.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
          <a href={`mailto:${studio.email}`} className="text-sm text-[#A1A1AA] hover:text-[#C5A059] transition-colors duration-300">
            {studio.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <p className="text-sm text-[#A1A1AA] leading-relaxed whitespace-pre-line">
            {studio.hours}
          </p>
        </div>
      </div>
    </div>
  );
}
