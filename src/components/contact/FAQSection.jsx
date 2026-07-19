"use client";

import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { contactData } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FAQSection({ className }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white border-t border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Common Questions
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Frequently Asked Questions.
          </h3>
        </div>

        <div ref={listRef} className="flex flex-col gap-4">
          {contactData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300 bg-[#FAFAFA]",
                  isOpen ? "border-[#09090B]" : "border-[#E4E4E7] hover:border-[#09090B]/30"
                )}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-bold font-heading transition-colors duration-300 pr-4",
                    isOpen ? "text-[#C5A059]" : "text-[#09090B]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                    isOpen ? "bg-[#09090B] border-[#09090B] text-white" : "bg-white border-[#E4E4E7] text-[#09090B]"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className="grid transition-all duration-500 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-8 text-[#52525B] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
