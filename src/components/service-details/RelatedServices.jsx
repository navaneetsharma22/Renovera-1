"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function RelatedServices({ service, className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Explore More
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              Related Services.
            </h3>
          </div>
          <Link 
            href="/services"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {service.relatedServices.map((rel, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-muted rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image 
                  src={rel.image}
                  alt={rel.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#09090B]/5 group-hover:bg-[#09090B]/0 transition-colors duration-500" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-3 group-hover:text-[#C5A059] transition-colors">
                {rel.title}
              </h4>
              <p className="text-[#52525B] leading-relaxed mb-6 flex-1">
                {rel.desc}
              </p>
              <Link 
                href={`/services/${rel.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group/btn"
              >
                Explore Service
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
