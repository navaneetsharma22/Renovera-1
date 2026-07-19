import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { newsletterData } from "./journalData";

export function NewsletterPreview({ className }) {
  return (
    <div className={cn("max-w-4xl mx-auto bg-card border border-border/50 rounded-3xl p-8 md:p-16 text-center shadow-sm relative overflow-hidden", className)}>
      
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center border border-border mb-8">
          <Mail className="w-6 h-6 text-[#C5A059] stroke-[1.5]" />
        </div>

        <h3 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6 tracking-tight">
          {newsletterData.heading}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          {newsletterData.description}
        </p>

        <form className="w-full max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address..."
            required
            className="w-full bg-background border border-border text-foreground px-6 py-4 rounded-none outline-none focus:border-[#C5A059] transition-colors duration-300 placeholder:text-muted-foreground/60 text-sm md:text-base font-medium"
          />
          <button 
            type="submit"
            className="w-full mt-4 bg-foreground text-background font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#C5A059] transition-colors duration-300 rounded-none"
          >
            {newsletterData.ctaText}
          </button>
        </form>

        <p className="text-xs text-muted-foreground/80 mt-6 font-medium">
          {newsletterData.privacyText}
        </p>
      </div>
    </div>
  );
}
