"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const LETTERS = "RENOVERA".split("");

export function Preloader({ onComplete }) {
  const overlayRef = useRef(null);
  const gridRef = useRef(null);
  const monogramRef = useRef(null);
  const lettersRef = useRef([]);
  const tagline1Ref = useRef(null);
  const tagline2Ref = useRef(null);
  const progressLineRef = useRef(null);
  const progressDotRef = useRef(null);
  const draftingRef = useRef(null);
  const [removed, setRemoved] = useState(false);

  const handleComplete = useCallback(() => {
    setRemoved(true);
    document.body.style.overflow = "";
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useGSAP(() => {
    if (removed) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // STEP 1: Black screen (300ms)
      tl.set(overlayRef.current, { opacity: 1 });

      // STEP 2: Blueprint grid fade in (500ms)
      tl.to(gridRef.current, {
        opacity: 0.02,
        duration: 0.5,
      }, 0.3);

      // STEP 3: "R" monogram appears (500ms)
      tl.fromTo(monogramRef.current, {
        scale: 0.9,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
      }, 0.6);

      // Subtle gold glow pulse on monogram
      tl.to(monogramRef.current, {
        textShadow: "0 0 30px rgba(199,167,108,0.3), 0 0 60px rgba(199,167,108,0.1)",
        duration: 0.4,
        ease: "power2.in",
      }, 0.8);

      // STEP 4: RENOVERA letter-by-letter clip-path reveal (900ms)
      lettersRef.current.forEach((letter, i) => {
        if (!letter) return;
        tl.fromTo(letter, {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          opacity: 0,
        }, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 1,
          duration: 0.12,
          ease: "power2.out",
        }, 1.1 + i * 0.1);
      });

      // Fade out monogram as letters appear
      tl.to(monogramRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
      }, 1.1);

      // STEP 5: Taglines
      tl.fromTo(tagline1Ref.current, {
        y: 12,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }, 2.1);

      tl.fromTo(tagline2Ref.current, {
        y: 12,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
      }, 2.5);

      // STEP 6: Gold progress line expands from center (500ms)
      tl.fromTo(progressLineRef.current, {
        scaleX: 0,
      }, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.inOut",
      }, 2.4);

      // STEP 7: Gold dot travels across the line
      tl.fromTo(progressDotRef.current, {
        left: "0%",
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.1,
      }, 2.6);

      tl.to(progressDotRef.current, {
        left: "100%",
        duration: 0.8,
        ease: "power1.inOut",
      }, 2.7);

      // STEP 8: Drafting details fade in
      tl.to(draftingRef.current, {
        opacity: 0.03,
        duration: 0.4,
      }, 2.6);

      // STEP 9: Curtain reveal — slide the entire preloader upward
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: handleComplete,
      }, 3.2);
    });

    // Reduced motion fallback
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(overlayRef.current, { opacity: 1 });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: handleComplete,
      });
    });

    return () => mm.revert();
  }, { scope: overlayRef });

  if (removed) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "#09090B" }}
      aria-hidden="true"
    >
      {/* Blueprint Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0,
          backgroundImage: `linear-gradient(to right, #FAFAFA 1px, transparent 1px), linear-gradient(to bottom, #FAFAFA 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Architectural Drafting Details */}
      <div
        ref={draftingRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0 }}
      >
        {/* Top-left corner mark */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16">
          <div className="w-8 h-[1px] bg-white/60" />
          <div className="w-[1px] h-8 bg-white/60" />
        </div>
        {/* Top-right corner mark */}
        <div className="absolute top-8 right-8 md:top-16 md:right-16">
          <div className="w-8 h-[1px] bg-white/60 ml-auto" />
          <div className="w-[1px] h-8 bg-white/60 ml-auto" />
        </div>
        {/* Bottom-left corner mark */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
          <div className="w-[1px] h-8 bg-white/60" />
          <div className="w-8 h-[1px] bg-white/60" />
        </div>
        {/* Bottom-right corner mark */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16">
          <div className="w-[1px] h-8 bg-white/60 ml-auto" />
          <div className="w-8 h-[1px] bg-white/60 ml-auto" />
        </div>
        {/* Measurement line */}
        <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 flex items-center gap-1">
          <div className="w-[1px] h-3 bg-white/40" />
          <span className="text-[8px] text-white/40 font-mono tracking-[0.3em]">1200</span>
          <div className="w-[1px] h-3 bg-white/40" />
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center relative z-10">
        {/* Monogram "R" */}
        <div
          ref={monogramRef}
          className="text-5xl md:text-7xl font-bold tracking-tighter absolute"
          style={{
            color: "#FAFAFA",
            opacity: 0,
            fontFamily: "var(--font-sans)",
          }}
        >
          R
        </div>

        {/* RENOVERA Letters */}
        <div className="flex items-center justify-center gap-[2px] md:gap-[4px] mb-6 md:mb-8">
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em] md:tracking-[0.3em] inline-block"
              style={{
                color: "#FAFAFA",
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                opacity: 0,
                fontFamily: "var(--font-sans)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline 1 */}
        <p
          ref={tagline1Ref}
          className="text-sm md:text-base tracking-[0.15em] mb-1"
          style={{ color: "#FAFAFA", opacity: 0, fontFamily: "var(--font-sans)" }}
        >
          Transforming Spaces.
        </p>

        {/* Tagline 2 — Italic Serif */}
        <p
          ref={tagline2Ref}
          className="text-sm md:text-base italic tracking-[0.1em] mb-8 md:mb-10"
          style={{
            color: "#C7A76C",
            opacity: 0,
            fontFamily: "var(--font-serif), serif",
          }}
        >
          Elevating Living.
        </p>

        {/* Progress Line */}
        <div className="relative w-48 md:w-64 h-[1px]">
          <div
            ref={progressLineRef}
            className="absolute inset-0"
            style={{
              backgroundColor: "#C7A76C",
              transformOrigin: "center",
              transform: "scaleX(0)",
            }}
          />
          {/* Progress Dot */}
          <div
            ref={progressDotRef}
            className="absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full"
            style={{
              backgroundColor: "#C7A76C",
              left: "0%",
              opacity: 0,
              boxShadow: "0 0 8px rgba(199,167,108,0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
