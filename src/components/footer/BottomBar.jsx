import Link from "next/link";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function BottomBar({ className }) {
  return (
    <div className={cn("flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pt-8 border-t border-white/10", className)}>
      
      {/* Left: Copyright */}
      <p className="text-xs text-[#A1A1AA] font-medium order-2 md:order-1 text-center md:text-left">
        {footerData.bottomBar.copyright}
      </p>

      {/* Center: Message */}
      <p className="text-[10px] text-[#A1A1AA]/60 font-bold uppercase tracking-widest order-1 md:order-2 text-center">
        {footerData.bottomBar.centerText}
      </p>

      {/* Right: Legal Links */}
      <div className="flex items-center gap-6 order-3 md:order-3">
        {footerData.bottomBar.links.map((link, idx) => (
          <Link 
            key={idx}
            href={link.href}
            className="text-xs text-[#A1A1AA] font-medium hover:text-[#C5A059] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>

    </div>
  );
}
