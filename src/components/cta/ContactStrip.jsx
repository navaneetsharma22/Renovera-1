import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

export function ContactStrip({ className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full max-w-[1000px] mx-auto text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50", className)}>
      <span className="hover:text-white transition-colors duration-300 cursor-pointer">
        {ctaData.contact.phone}
      </span>
      <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
      <span className="hover:text-white transition-colors duration-300 cursor-pointer">
        {ctaData.contact.email}
      </span>
      <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/20" />
      <span>
        {ctaData.contact.location}
      </span>
      <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-white/20" />
      <span>
        {ctaData.contact.hours}
      </span>
    </div>
  );
}
