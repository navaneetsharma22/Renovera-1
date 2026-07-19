"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ClientVision({ project, className }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div ref={contentRef} className="lg:col-span-6 flex flex-col order-2 lg:order-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              The Brief
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight mb-8">
              Client Vision.
            </h3>

            <div className="space-y-8 mb-10">
              <div className="flex flex-col">
                <h4 className="text-lg font-bold font-heading text-[#09090B] mb-2">Lifestyle</h4>
                <p className="text-[#52525B] leading-relaxed">{project.clientVision.lifestyle}</p>
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-bold font-heading text-[#09090B] mb-2">Aesthetic</h4>
                <p className="text-[#52525B] leading-relaxed">{project.clientVision.aesthetic}</p>
              </div>
            </div>

            <div className="bg-white border border-[#E4E4E7] p-8 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#09090B] mb-6">Core Objectives</h4>
              <ul className="flex flex-col gap-4">
                {project.clientVision.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#52525B] font-medium leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div ref={imageRef} className="relative w-full aspect-[4/3] lg:aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={project.clientVision.image}
                alt="Client Vision Inspiration"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
