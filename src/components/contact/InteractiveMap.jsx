"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function InteractiveMap({ className }) {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(mapRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="map" ref={sectionRef} className={cn("py-12 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div ref={mapRef} className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-muted border border-[#E4E4E7]">
          {/* Simulated Map: In production, embed Google Maps iframe or use mapbox-gl */}
          <Image 
            src="/images/luxury-dusk-villa.png" // Fallback image acting as map
            alt="Office Location Map"
            fill
            className="object-cover object-center filter grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-[#FAFAFA]/50" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl border border-[#E4E4E7] flex flex-col items-center pointer-events-auto hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-[#09090B] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold font-heading text-[#09090B]">Renovera NY Studio</h4>
              <p className="text-sm text-[#52525B] mt-1">123 Architecture Ave, NY 10001</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#C5A059] hover:text-[#09090B] transition-colors">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
