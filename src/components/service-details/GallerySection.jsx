"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GallerySection({ service, className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === service.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? service.gallery.length - 1 : prev - 1));
  };

  return (
    <>
      <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA]", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-4">
              Project Showcase
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight">
              A Selection of Our Work.
            </h3>
          </div>

          <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {service.gallery.map((imgSrc, idx) => (
              <div 
                key={idx}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer bg-muted shadow-lg"
                onClick={() => openLightbox(idx)}
              >
                {/* We use standard img for masonry dynamic heights or Next Image with layout responsive. For masonry, Next Image with fill requires an aspect ratio wrapper. Let's use standard img for perfect masonry or wrap in varied aspect ratios. We will use a standard img here for pure CSS masonry support without fixed aspect ratios. */}
                <img 
                  src={imgSrc} 
                  alt={`Project image ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-[#09090B]/0 group-hover:bg-[#09090B]/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[#09090B]/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white z-10 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] mx-4" onClick={e => e.stopPropagation()}>
            <Image 
              src={service.gallery[currentIndex]}
              alt="Lightbox image"
              fill
              className="object-contain"
            />
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white z-10 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase">
            {currentIndex + 1} / {service.gallery.length}
          </div>
        </div>
      )}
    </>
  );
}
