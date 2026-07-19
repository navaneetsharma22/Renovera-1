"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After",
  className 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    // Clamp between 0 and 100
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, stopDragging]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(prev - 5, 0));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(prev + 5, 100));
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full overflow-hidden select-none touch-none group bg-muted rounded-xl", className)}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <div className="relative w-full h-full">
        <Image 
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Label After */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Label Before */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center transform -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
        role="slider"
        aria-valuenow={sliderPosition}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Image comparison slider"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* The Handle Circle */}
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-110 focus-visible:ring-4 focus-visible:ring-primary/50 outline-none">
          <MoveHorizontal className="size-5 md:size-6 text-zinc-900" />
        </div>
      </div>
    </div>
  );
}
