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

export function DesignSolution({ project, className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(contentRef.current.children,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div ref={imageRef} className="relative w-full aspect-[4/3] bg-black rounded-3xl overflow-hidden">
            <Image
              src={project.designSolution.image}
              alt="Design Solution Concept"
              fill
              className="object-cover object-center opacity-80 mix-blend-luminosity"
            />
            {/* Subtle grid pattern overlay for architectural feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              The Solution
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8 tracking-tight leading-[1.1]">
              Strategic Innovation.
            </h3>
            
            <p className="text-xl text-white font-medium leading-relaxed mb-8 border-l-2 border-[#C5A059] pl-6">
              "{project.designSolution.concept}"
            </p>

            <div className="flex flex-col gap-6">
              {project.designSolution.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base text-white/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
