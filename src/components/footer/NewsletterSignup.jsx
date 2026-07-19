"use client";

import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function NewsletterSignup({ className }) {
  return (
    <div className={cn("bg-[#18181B] border border-white/10 rounded-2xl p-8 md:p-10", className)}>
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-5 h-5 text-[#C5A059]" />
        <h4 className="text-lg font-bold font-heading text-[#FAFAFA]">
          {footerData.newsletter.heading}
        </h4>
      </div>
      
      <p className="text-sm text-[#A1A1AA] mb-8 leading-relaxed max-w-sm">
        {footerData.newsletter.description}
      </p>

      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Email address"
          required
          className="w-full bg-[#09090B] border border-white/10 text-[#FAFAFA] px-4 py-3 outline-none focus:border-[#C5A059] transition-colors duration-300 placeholder:text-[#A1A1AA]/60 text-sm font-medium rounded-none"
        />
        <button 
          type="submit"
          className="w-full bg-[#FAFAFA] text-[#09090B] font-bold uppercase tracking-widest text-[10px] px-6 py-4 hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none"
        >
          {footerData.newsletter.cta}
        </button>
      </form>

      <p className="text-[10px] text-[#A1A1AA]/60 mt-4 font-medium uppercase tracking-wider text-center">
        {footerData.newsletter.privacyNote}
      </p>
    </div>
  );
}
