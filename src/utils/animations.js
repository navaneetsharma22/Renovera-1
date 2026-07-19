import gsap from "gsap";

/**
 * Premium Hero Entrance Animation Sequence
 * @param {Object} refs - Object containing React refs for the elements to animate
 */
export const animateHeroEntrance = (refs) => {
  const {
    container,
    badge,
    heading,
    description,
    buttons,
    statistics,
    mediaWrapper,
    image,
    floatingCard,
    scrollIndicator,
  } = refs;

  // Use gsap.matchMedia for prefers-reduced-motion
  let mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // 1. Initial State Setup
    gsap.set(container, { opacity: 0, y: 30 });
    gsap.set([badge, description, floatingCard], { opacity: 0, y: 20 });
    
    // Heading clip path reveal setup
    gsap.set(heading, { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
    
    // Buttons and stats stagger setup
    gsap.set(buttons.children, { opacity: 0, y: 20 });
    if (statistics) {
      gsap.set(statistics.children, { opacity: 0, scale: 0.95 });
    }

    // Image mask reveal setup
    gsap.set(mediaWrapper, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" });
    gsap.set(image, { scale: 1.1, opacity: 0 });

    gsap.set(scrollIndicator, { opacity: 0 });

    // 2. Master Timeline Sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(badge, {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, "-=0.4")
    .to(heading, {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.0,
    }, "-=0.4")
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, "-=0.6")
    .to(buttons.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
    }, "-=0.6");

    // Media animation in parallel with content finish
    tl.to(mediaWrapper, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=1.0")
    .to(image, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.0")
    .to(floatingCard, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, "-=0.8");

    if (statistics) {
      tl.to(statistics.children, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.8");
    }

    tl.to(scrollIndicator, {
      opacity: 1,
      duration: 1.0,
    }, "-=0.2");

    return () => tl.kill();
  });

  // Fallback for reduced motion
  mm.add("(prefers-reduced-motion: reduce)", () => {
    const allEls = [container, badge, heading, description, mediaWrapper, image, floatingCard, scrollIndicator, ...buttons.children];
    if (statistics) allEls.push(...statistics.children);
    
    gsap.set(allEls, { clearProps: "all" });
    gsap.set(allEls, { opacity: 0 });
    gsap.to(allEls, { opacity: 1, duration: 0.5, stagger: 0.05 });
  });

  return () => mm.revert();
};

export const animateCinematicHero = (refs) => {
  const {
    container,
    background,
    content,
    badge,
    heading,
    description,
    buttons,
    statistics,
    floatingCard,
    panel,
    scrollIndicator,
  } = refs;

  let mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Initial Setup
    gsap.set(background, { scale: 1.05, opacity: 0 });
    gsap.set(content, { opacity: 0 });
    gsap.set([badge, description, panel, floatingCard].filter(Boolean), { opacity: 0, y: 20 });
    gsap.set(heading, { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
    gsap.set(buttons.children, { opacity: 0, y: 20 });
    gsap.set(statistics.children, { opacity: 0, y: 15 });
    gsap.set(scrollIndicator, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Sequence:
    // 1. Navbar Fade (handled globally or implicit here if we had navbar ref, skipping since it's fixed/handled by React state)
    // 2. Hero Image Scale
    tl.to(background, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    // Container/Content setup
    .to(content, {
      opacity: 1,
      duration: 0.5,
    }, "-=0.5")
    // 3. Badge Fade Up (if present)
    .call(() => {
      if (badge) gsap.to(badge, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
    }, null, "-=0.2")
    // 4. Heading Reveal
    .to(heading, {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.0,
      ease: "power3.out"
    }, "-=0.4")
    // 5. Italic Text Reveal (part of heading)
    // 6. Paragraph Fade
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    // 7. Buttons Slide Up
    .to(buttons.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.6")
    // 8. Trust Metrics Fade
    .to(statistics.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4")
    // 9. Impact Card Slide From Right
    .to(floatingCard, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.2")
    // 10. Consultation Planner Slide Up
    .to(panel, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")
    .to(scrollIndicator, {
      opacity: 1,
      duration: 1.0,
      ease: "power2.out"
    }, "-=0.2");

    return () => tl.kill();
  });

  mm.add("(prefers-reduced-motion: reduce)", () => {
    const allEls = [background, content, badge, heading, description, floatingCard, panel, scrollIndicator, ...buttons.children, ...statistics.children].filter(Boolean);
    gsap.set(allEls, { clearProps: "all" });
    gsap.set(allEls, { opacity: 0 });
    gsap.to(allEls, { opacity: 1, duration: 0.5, stagger: 0.05 });
  });

  return () => mm.revert();
};
