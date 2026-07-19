"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function ContactHero({ className }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(bgRef.current,
      { scale: 1.05 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, { scope: sectionRef });

  const scrollToForm = () => {
    const formEl = document.getElementById("consultation-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className={cn("relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src="/images/luxury-dusk-villa.png"
          alt="Contact Renovera Studio"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-[#09090B]/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div ref={contentRef} className="max-w-[800px] flex flex-col items-center">
          
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-6">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-white mb-6 md:mb-8">
            Let's Build <br className="hidden sm:block" />
            Something Extraordinary.
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-[600px]">
            Whether you're planning a luxury renovation, designing your dream home, or exploring architectural ideas, our team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-5 bg-white text-[#09090B] font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </button>

            <a 
              href="tel:+15551234567"
              className="w-full sm:w-auto px-8 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:border-white hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Call Our Studio <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
