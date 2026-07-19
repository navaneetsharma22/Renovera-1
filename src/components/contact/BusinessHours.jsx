"use client";

import { useRef, useState, useEffect } from "react";
import { Clock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { contactData } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function BusinessHours({ className }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simple logic for NY Time (EST)
    const checkOpenStatus = () => {
      const nyTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
      const date = new Date(nyTime);
      const day = date.getDay();
      const hour = date.getHours();

      if (day >= 1 && day <= 5) {
        setIsOpen(hour >= 9 && hour < 18);
      } else if (day === 6) {
        setIsOpen(hour >= 10 && hour < 16);
      } else {
        setIsOpen(false);
      }
    };
    
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-12 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div ref={cardRef} className="bg-[#09090B] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
              <Clock className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <h4 className="text-2xl font-bold font-heading mb-2">Business Hours</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Current Status:</span>
                <div className="flex items-center gap-2">
                  <span className={cn("w-2 h-2 rounded-full", isOpen ? "bg-green-500 animate-pulse" : "bg-red-500")} />
                  <span className={cn("text-sm font-bold uppercase tracking-widest", isOpen ? "text-green-500" : "text-red-500")}>
                    {isOpen ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full md:w-auto relative z-10 border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-16">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Monday – Friday</span>
              <span className="text-lg font-bold text-white">{contactData.company.businessHours.weekdays}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Saturday</span>
              <span className="text-lg font-bold text-white">{contactData.company.businessHours.saturday}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
