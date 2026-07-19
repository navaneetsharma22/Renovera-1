"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function ServiceHero({ service, className }) {
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
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-24", className)}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={bgRef}
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#09090B]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-[800px] flex flex-col items-start">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{service.title}</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
            {service.category}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1] text-white mb-8">
            {service.title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-[700px]">
            {service.description}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-12 border-y border-white/20 py-6 w-full max-w-[700px]">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Estimated Timeline</span>
              <span className="text-sm font-bold text-white">{service.timeline}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Project Type</span>
              <span className="text-sm font-bold text-white">{service.category}</span>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Suitable Property</span>
              <span className="text-sm font-bold text-white">{service.propertyType}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-[#09090B] font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors duration-300 rounded-none text-center"
            >
              Book Consultation
            </Link>
            <Link 
              href="/projects"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-white transition-colors duration-300 rounded-none text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
