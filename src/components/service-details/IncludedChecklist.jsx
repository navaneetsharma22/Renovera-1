"use client";

import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function IncludedChecklist({ service, className }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(listRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px]">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Scope of Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            What's Included.
          </h3>
        </div>

        <div className="bg-[#18181B] border border-white/10 p-8 md:p-12 rounded-3xl">
          <ul ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 group">
                <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-white/80 font-medium group-hover:text-white transition-colors text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
