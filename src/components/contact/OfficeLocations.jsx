"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { contactData } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function OfficeLocations({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Global Presence
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            Our Studios.
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {contactData.offices.map((office, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row bg-[#FAFAFA] border border-[#E4E4E7] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
              
              <div className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto overflow-hidden shrink-0">
                <Image 
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col p-8 md:p-10 flex-grow">
                <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-6">
                  {office.city}
                </h4>
                
                <div className="flex flex-col gap-4 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                    <span className="text-sm text-[#52525B] leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-sm text-[#52525B]">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-sm text-[#52525B]">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-sm text-[#52525B]">{office.hours}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E4E4E7]">
                  <a 
                    href="#map"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09090B] group-hover:text-[#C5A059] transition-colors duration-300 inline-flex"
                  >
                    Get Directions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
