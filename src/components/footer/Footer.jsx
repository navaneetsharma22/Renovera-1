"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { FooterBrand } from "./FooterBrand";
import { NewsletterSignup } from "./NewsletterSignup";
import { FooterNavigation } from "./FooterNavigation";
import { StudioInfo } from "./StudioInfo";
import { SocialLinks } from "./SocialLinks";
import { GalleryPreview } from "./GalleryPreview";
import { BottomBar } from "./BottomBar";
import { BackToTopButton } from "./BackToTopButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function Footer({ className }) {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const navRef = useRef(null);
  const studioRef = useRef(null);
  const galleryRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      }
    });

    // Animate Columns sequentially
    tl.fromTo(brandRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(navRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(studioRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(galleryRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(bottomRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    );

  }, { scope: footerRef });

  return (
    <>
      <footer ref={footerRef} className={cn("bg-[#09090B] pt-24 md:pt-32 pb-8 overflow-hidden", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 xl:gap-16 mb-24 md:mb-32">
            
            {/* Column 1: Brand & Newsletter */}
            <div ref={brandRef} className="flex flex-col gap-12 lg:pr-8">
              <FooterBrand />
              <NewsletterSignup />
            </div>

            {/* Column 2: Navigation (Takes up 1.5 columns visually on large screens) */}
            <div ref={navRef} className="lg:col-span-2">
              <FooterNavigation />
            </div>

            {/* Column 3: Studio Info & Social & Gallery */}
            <div ref={studioRef} className="flex flex-col gap-16">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-12 sm:gap-16 lg:gap-12">
                <StudioInfo className="flex-1" />
                <SocialLinks className="flex-1" />
              </div>
              <div ref={galleryRef}>
                <GalleryPreview />
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div ref={bottomRef}>
            <BottomBar />
          </div>

        </div>
      </footer>
      <BackToTopButton />
    </>
  );
}
