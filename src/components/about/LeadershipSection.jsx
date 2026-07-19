"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { aboutData } from "./aboutData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function LeadershipSection({ className }) {
  const sectionRef = useRef(null);
  const featureRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // Reveal Featured Leader
    gsap.fromTo(featureRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 75%",
        }
      }
    );

    // Reveal Grid
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const { featured, grid } = aboutData.leadership;

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Leadership Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
            The Visionaries Behind Renovera.
          </h3>
        </div>

        {/* Featured Leader */}
        <div ref={featureRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="relative w-full aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
              {featured.role}
            </span>
            <h4 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-6 tracking-tight">
              {featured.name}
            </h4>
            <p className="text-lg text-[#52525B] leading-relaxed mb-8">
              {featured.bio}
            </p>
            <div className="pl-6 border-l-2 border-[#C5A059] mb-8">
              <p className="text-xl font-serif italic text-[#09090B] leading-relaxed">
                "{featured.quote}"
              </p>
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#09090B]">
              {featured.experience}
            </span>
          </div>
        </div>

        {/* Leadership Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {grid.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative w-full aspect-[4/5] bg-muted rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h5 className="text-2xl font-bold font-heading text-[#09090B] mb-2">
                {member.name}
              </h5>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                {member.role}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
