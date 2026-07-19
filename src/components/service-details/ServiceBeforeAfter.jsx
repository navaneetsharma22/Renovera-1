"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ServiceBeforeAfter({ service, className }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#09090B]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
            Before & After
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-6">
            The Transformation.
          </h3>
          <p className="text-white/70 max-w-[600px] mx-auto text-lg leading-relaxed">
            {service.beforeAfter.summary}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none bg-[#18181B]"
          onMouseDown={() => setIsDragging(true)}
          onMouseMove={onMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Base) */}
          <Image
            src={service.beforeAfter.afterImage}
            alt="After"
            fill
            className="object-cover object-center pointer-events-none"
            priority
          />
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-10 pointer-events-none">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">After</span>
          </div>

          {/* Before Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={service.beforeAfter.beforeImage}
              alt="Before"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Before</span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize pointer-events-none flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white text-[#09090B]">
              <MoveHorizontal className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
