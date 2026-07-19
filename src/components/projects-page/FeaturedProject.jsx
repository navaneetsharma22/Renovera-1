"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { projectsPageData } from "./projectsData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function FeaturedProject({ className }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const featured = projectsPageData.featuredProject;

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
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div ref={imageRef} className="w-full lg:w-[65%] relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#09090B]/10 group-hover:bg-[#09090B]/0 transition-colors duration-500 pointer-events-none" />
          </div>

          <div ref={contentRef} className="w-full lg:w-[35%] flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A059]"></span>
              Featured Project
            </span>

            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] mb-6 tracking-tight leading-[1.1]">
              {featured.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-[#52525B] mb-8">
              <span>{featured.category}</span>
              <span>•</span>
              <span>{featured.location}</span>
              <span>•</span>
              <span>{featured.area}</span>
            </div>

            <p className="text-base text-[#52525B] leading-relaxed mb-10 border-l-2 border-[#E4E4E7] pl-6">
              {featured.story}
            </p>

            <Link 
              href={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors duration-300 group/btn"
            >
              View Full Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
