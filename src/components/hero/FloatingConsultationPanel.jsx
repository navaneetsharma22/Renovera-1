"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin, Ruler, Wallet, Home, CheckCircle2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingConsultationPanel({ className }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Hide toast after 4 seconds
      setTimeout(() => setShowToast(false), 4000);
    }, 1000);
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className={cn(
          "bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl w-full transition-all duration-500 overflow-hidden",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Property Type */}
          <div className="flex flex-1 items-center px-8 py-5 lg:py-8 group transition-colors hover:bg-white/5">
            <Home className="size-6 text-white/50 mr-5 flex-shrink-0 group-hover:text-white transition-colors" />
            <div className="flex flex-col w-full">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Property Type</span>
              <Input 
                type="text" 
                required
                placeholder="e.g. Luxury Villa" 
                className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-base font-medium text-white placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Project Budget */}
          <div className="flex flex-1 items-center px-8 py-5 lg:py-8 group transition-colors hover:bg-white/5">
            <Wallet className="size-6 text-white/50 mr-5 flex-shrink-0 group-hover:text-white transition-colors" />
            <div className="flex flex-col w-full">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Project Budget</span>
              <Input 
                type="text" 
                required
                placeholder="$150k - $500k+" 
                className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-base font-medium text-white placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-1 items-center px-8 py-5 lg:py-8 group transition-colors hover:bg-white/5">
            <Calendar className="size-6 text-white/50 mr-5 flex-shrink-0 group-hover:text-white transition-colors" />
            <div className="flex flex-col w-full">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Timeline</span>
              <Input 
                type="text" 
                required
                placeholder="Within 6 months" 
                className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-base font-medium text-white placeholder:text-white/30"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center lg:w-[260px] p-3 lg:p-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg" 
              className="w-full h-full min-h-[64px] rounded-2xl group bg-white text-black hover:bg-white/90 disabled:opacity-70 disabled:cursor-not-allowed font-semibold text-base"
            >
              {isSubmitting ? "Sending..." : "Start Your Project"}
              {!isSubmitting && <ArrowRight className="ml-3 size-4 transition-transform group-hover:translate-x-1" />}
            </Button>
          </div>
        </div>
      </form>

      {/* Custom Toast Notification */}
      {mounted && createPortal(
        <div 
          className={cn(
            "fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl shadow-2xl border border-border/50 transform transition-all duration-500 ease-out",
            showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="bg-green-100 text-green-600 rounded-full p-1">
            <CheckCircle2 className="size-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Details sent successfully!</p>
            <p className="text-xs text-muted-foreground">Our Customer Executive will contact you soon.</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
