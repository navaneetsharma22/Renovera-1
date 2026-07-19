"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "@/hooks/useIntersection";
import { cn } from "@/lib/utils";

/**
 * Reusable Counter Card component
 * 
 * @param {Object} props
 * @param {number} props.number - Target number to count up to
 * @param {string} [props.prefix] - E.g. "+" or "$"
 * @param {string} [props.suffix] - E.g. "M", "%" or "+"
 * @param {string} props.label - Short title for the statistic
 * @param {string} [props.description] - Additional context
 * @param {string} [props.className] - Additional classes
 */
export function CounterCard({
  number,
  prefix = "",
  suffix = "",
  label,
  description,
  className,
}) {
  const { ref, hasIntersected } = useIntersection({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  const countRef = useRef(null);

  useEffect(() => {
    if (hasIntersected && countRef.current) {
      // Create a proxy object for GSAP to animate
      const proxy = { val: 0 };
      
      gsap.to(proxy, {
        val: number,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) {
            // Math.floor or Math.round based on preference
            const currentVal = Math.floor(proxy.val);
            countRef.current.innerText = `${prefix}${currentVal}${suffix}`;
          }
        },
      });
    }
  }, [hasIntersected, number, prefix, suffix]);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col p-8 border border-border bg-card text-card-foreground rounded-sm",
        className
      )}
    >
      <div className="flex items-baseline mb-4">
        {/* We use a span that GSAP will update textContent for performance */}
        <span
          ref={countRef}
          className="text-5xl md:text-6xl font-heading font-bold text-primary tracking-tighter"
        >
          {prefix}0{suffix}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-foreground mb-2">
        {label}
      </h4>
      
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
