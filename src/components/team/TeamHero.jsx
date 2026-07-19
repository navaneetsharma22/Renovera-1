"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function TeamHero({ className }) {
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

  return (
    <section ref={sectionRef} className={cn("relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src="/images/hero-architecture.png"
          alt="Our Team"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#09090B]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div ref={contentRef} className="max-w-[800px] mx-auto flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-6 block">
            Our Team
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-white mb-8">
            The People Behind{" "}
            <span className="italic font-light text-[#C5A059]">Every Transformation.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-[700px]">
            Renovera brings together architects, designers, engineers, and project managers who share a passion for creating exceptional spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
