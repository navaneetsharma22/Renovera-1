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

export function CompanyStory({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -50 },
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
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Large Editorial Image */}
          <div ref={imageRef} className="relative w-full aspect-[4/5] lg:aspect-square bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={aboutData.story.image}
              alt="The Renovera Story"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right: Story Content */}
          <div ref={contentRef} className="flex flex-col">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              {aboutData.story.heading}
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-10 tracking-tight leading-[1.1] whitespace-pre-line">
              {aboutData.story.subheading}
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {aboutData.story.content.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-[#52525B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pl-6 border-l-2 border-[#C5A059]">
              <p className="text-xl md:text-2xl font-serif italic text-[#09090B] leading-relaxed">
                {aboutData.story.founderMessage}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
