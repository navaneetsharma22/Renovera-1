"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { ctaData } from "./ctaData";

import { CTAContent } from "./CTAContent";
import { CTAButtons } from "./CTAButtons";
import { BenefitCards } from "./BenefitCards";
import { TrustIndicators } from "./TrustIndicators";
import { ContactStrip } from "./ContactStrip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ConsultationCTA({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const benefitsRef = useRef(null);
  const trustRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    // Subtle background scale on scroll
    gsap.fromTo(imageRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // Fade up sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    )
    .fromTo(buttonsRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(benefitsRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(trustRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(contactRef.current.children,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("relative py-32 md:py-48 overflow-hidden", className)}>
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          ref={imageRef}
          src={ctaData.backgroundImage}
          alt="Luxury Renovera Consultation"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-[#09090B]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div ref={contentRef} className="mb-12 md:mb-16">
          <CTAContent />
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="mb-16 md:mb-24">
          <CTAButtons />
        </div>

        {/* Benefit Chips */}
        <div ref={benefitsRef} className="mb-24 md:mb-32">
          <BenefitCards />
        </div>

        {/* Trust Indicators */}
        <div ref={trustRef} className="mb-16 md:mb-24">
          <TrustIndicators />
        </div>

        {/* Contact Strip */}
        <div ref={contactRef}>
          <ContactStrip />
        </div>

      </div>
    </section>
  );
}
