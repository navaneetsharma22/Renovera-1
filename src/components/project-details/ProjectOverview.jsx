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

export function ProjectOverview({ project, className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
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
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div ref={imageRef} className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.overview.image}
              alt="Project Overview"
              fill
              className="object-cover object-center"
            />
          </div>

          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              Project Overview
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-10 tracking-tight leading-[1.1]">
              {project.overview.heading}
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {project.overview.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#52525B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Project Info Block embedded below overview for seamless flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-[#E4E4E7]">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-1">Lead Architect</span>
                <span className="text-sm font-bold text-[#09090B]">{project.info.leadArchitect}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-1">Interior Designer</span>
                <span className="text-sm font-bold text-[#09090B]">{project.info.interiorDesigner}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-1">Construction Team</span>
                <span className="text-sm font-bold text-[#09090B]">{project.info.constructionTeam}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#52525B] mb-1">Completion Date</span>
                <span className="text-sm font-bold text-[#09090B]">{project.info.completionDate}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
