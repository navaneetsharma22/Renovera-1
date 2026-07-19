"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ClientTestimonial({ service, className }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px]">
        
        <div ref={contentRef} className="flex flex-col items-center text-center">
          
          <div className="flex items-center gap-1 mb-8">
            {[...Array(service.testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
            ))}
          </div>

          <h3 className="text-3xl md:text-5xl font-serif italic text-[#09090B] leading-relaxed mb-12">
            "{service.testimonial.quote}"
          </h3>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image 
                src={service.testimonial.image}
                alt={service.testimonial.client}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-heading text-[#09090B]">
                {service.testimonial.client}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-[#52525B]">
                {service.testimonial.project} — {service.testimonial.location}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
