"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateCinematicHero } from "@/utils/animations";

import { 
  HeroContainer, 
  HeroContent, 
  HeroImage,
  HeroBadge,
  HeroHeading,
  HeroDescription,
  HeroCTAGroup,
  HeroStatistics,
  TrustIndicators,
  FloatingInfoCard,
  FloatingConsultationPanel,
  ScrollIndicator
} from "./index";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const floatingCardRef = useRef(null);
  const panelRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    animateCinematicHero({
      container: containerRef.current,
      background: backgroundRef.current,
      content: contentRef.current,
      badge: badgeRef.current,
      heading: headingRef.current,
      description: descriptionRef.current,
      buttons: buttonsRef.current,
      statistics: statsRef.current,
      floatingCard: floatingCardRef.current,
      panel: panelRef.current,
      scrollIndicator: scrollIndicatorRef.current,
    });

    // Hero Background Slideshow — crossfade + scale
    const slides = containerRef.current.querySelectorAll(".hero-slide");
    if (slides.length > 1) {
      const DURATION = 1.5;  // crossfade duration
      const HOLD = 6;        // seconds each image stays visible
      const totalSlides = slides.length;

      // Set initial scale for all slides
      slides.forEach((slide, i) => {
        gsap.set(slide, { scale: i === 0 ? 1 : 1.08 });
      });

      // Animate the first slide's scale during its hold time
      gsap.fromTo(slides[0], { scale: 1.08 }, { scale: 1, duration: HOLD + DURATION, ease: "none" });

      const crossfade = (currentIndex) => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        const current = slides[currentIndex];
        const next = slides[nextIndex];

        // Prepare next slide
        gsap.set(next, { scale: 1.08 });

        const tl = gsap.timeline({
          onComplete: () => crossfade(nextIndex),
        });

        // Scale the next image from 1.08 → 1.0 while it fades in
        tl.to(next, {
          opacity: 1,
          scale: 1,
          duration: HOLD + DURATION,
          ease: "none",
        })
        // Simultaneously fade out the current slide
        .to(current, {
          opacity: 0,
          duration: DURATION,
          ease: "power2.inOut",
        }, 0);
      };

      // Start the slideshow after the first image has been visible
      gsap.delayedCall(HOLD, () => crossfade(0));
    }

    // Scroll Exit Animation (Parallax)
    gsap.to(containerRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="dark w-full h-full relative">
      <HeroContainer 
        variant="transparent"
        background={
          <div ref={backgroundRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            {/* Slideshow Images — stacked, GSAP controls opacity + scale */}
            {[
              "/images/img1.png",
              "/images/img2.png",
              "/images/img3.png",
              "/images/img4.png",
            ].map((src, i) => (
              <div
                key={i}
                className="hero-slide absolute inset-0 w-full h-full"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <HeroImage
                  src={src}
                  alt={`Luxury architecture showcase ${i + 1}`}
                  overlay={false}
                  priority={i === 0}
                  className="!animate-none"
                />
              </div>
            ))}

            {/* Cinematic Gradient overlay (80% left, 40% right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 pointer-events-none z-[1]" />
            
            {/* Architectural Grid Overlay (3% opacity) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1]"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem'
              }}
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.4)_100%)] pointer-events-none z-[1]" />
          </div>
        }
      >
        <div ref={contentRef} className="flex flex-col h-full justify-center pt-28 md:pt-[130px] pb-24 relative z-10 w-full lg:w-[45%]">
          <HeroContent
            badge={<div ref={badgeRef} className="mb-8"><HeroBadge text="Premium Design & Build Studio" variant="primary" className="text-white" /></div>}
            title={<div ref={headingRef} className="mb-10"><HeroHeading title="Transforming Spaces. Elevating Living." highlight="Elevating Living." className="text-white" /></div>}
            description={<div ref={descriptionRef} className="mb-12"><HeroDescription description="We design and renovate exceptional homes through thoughtful architecture, premium craftsmanship, and personalized project management." maxWidth="max-w-[620px]" className="text-white/90" /></div>}
            buttons={
              <div ref={buttonsRef}>
                <HeroCTAGroup 
                  primaryButton={{ label: "Book Consultation", href: "/contact" }} 
                  secondaryButton={{ label: "View Portfolio", href: "/projects" }} 
                />
              </div>
            }
            statistics={
              <div ref={statsRef}>
                <TrustIndicators 
                  className="mt-12"
                  items={[
                    { value: "500+", label: "Projects Completed" },
                    { value: "15+", label: "Years Experience" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "Award", label: "Winning Studio" },
                  ]}
                />
              </div>
            }
          />
        </div>
        
        {/* Floating Statistics Card */}
        <div ref={floatingCardRef} className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 z-10 w-full max-w-[320px]">
          <FloatingInfoCard 
            title="Global Reach"
            className="rounded-xl shadow-sm border-border/50 p-8"
            items={[
              { label: "Projects Completed", value: "520+" },
              { label: "Cities Served", value: "25+" },
              { label: "Client Satisfaction", value: "98%" },
            ]}
          />
        </div>

        {/* Floating Consultation Panel */}
        <div ref={panelRef} className="absolute bottom-6 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-5xl z-20">
          <FloatingConsultationPanel />
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-1/2 right-8 hidden lg:flex z-10">
          <ScrollIndicator variant="line" className="text-white" />
        </div>
      </HeroContainer>
    </div>
  );
}
