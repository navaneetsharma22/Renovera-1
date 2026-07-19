"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { servicesPageData } from "./servicesData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FeaturedServices({ className }) {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Flagship Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Masterclass Offerings.
          </h3>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {servicesPageData.featured.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                ref={(el) => (itemsRef.current[idx] = el)}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                )}
              >
                
                {/* Image */}
                <div className={cn("relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-muted shadow-xl", isEven ? "lg:order-1" : "lg:order-2")}>
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className={cn("flex flex-col", isEven ? "lg:order-2" : "lg:order-1")}>
                  <h4 className="text-3xl md:text-4xl font-bold font-heading text-[#09090B] mb-6 leading-tight">
                    {service.title}
                  </h4>
                  
                  <p className="text-base md:text-lg text-[#52525B] leading-relaxed mb-8">
                    {service.overview}
                  </p>

                  <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded-2xl p-6 mb-8">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-[#09090B] mb-4">Key Deliverables</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                          <span className="text-sm text-[#52525B] font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-1">Estimated Timeline</span>
                      <span className="text-lg font-bold text-[#09090B]">{service.timeline}</span>
                    </div>
                    <Link 
                      href="#"
                      className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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
