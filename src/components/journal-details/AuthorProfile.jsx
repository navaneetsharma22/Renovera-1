"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function AuthorProfile({ author, className }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={cn("my-16 pt-16 border-t border-[#E4E4E7] flex flex-col md:flex-row gap-8 items-start", className)}>
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-[#E4E4E7] shrink-0">
        <Image src={author.image} alt={author.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] mb-2">
          Written By
        </span>
        <h4 className="text-2xl font-bold font-heading text-[#09090B] mb-1">
          {author.name}
        </h4>
        <span className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-4">
          {author.role}
        </span>
        <p className="text-sm md:text-base text-[#52525B] leading-relaxed max-w-[600px] mb-6">
          {author.bio}
        </p>
        
        <div className="flex items-center gap-4">
          {author.social?.linkedin && (
            <a href={author.social.linkedin} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors flex items-center gap-1">
              LinkedIn <ArrowRight className="w-3 h-3" />
            </a>
          )}
          {author.social?.twitter && (
            <a href={author.social.twitter} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors flex items-center gap-1">
              Twitter <ArrowRight className="w-3 h-3" />
            </a>
          )}
          {author.social?.instagram && (
            <a href={author.social.instagram} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#09090B] hover:text-[#C5A059] transition-colors flex items-center gap-1">
              Instagram <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
