"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FAQPreview({ className }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Common Questions
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight mb-8">
            Client Assurance.
          </h3>
          <p className="text-lg text-[#52525B] leading-relaxed max-w-[600px] mx-auto">
            Find answers to the most common questions regarding our process, timelines, and costs.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col mb-16">
          <Accordion type="single" collapsible className="w-full">
            {servicesPageData.faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border-b border-[#E4E4E7] py-2"
              >
                <AccordionTrigger className="text-lg font-bold font-heading text-[#09090B] hover:text-[#C5A059] hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#52525B] leading-relaxed pt-2 pb-6 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/faq"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All FAQs
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
