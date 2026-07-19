"use client";

import { useRef, useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function NewsletterSection({ className }) {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  useGSAP(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className={cn("py-24 md:py-32 bg-[#FAFAFA] border-t border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px] text-center">
        
        <div className="w-16 h-16 mx-auto bg-white border border-[#E4E4E7] rounded-full flex items-center justify-center mb-8 shadow-sm">
          <Mail className="w-6 h-6 text-[#C5A059]" />
        </div>

        <h3 className="text-4xl md:text-5xl font-bold font-heading text-[#09090B] tracking-tight mb-6">
          {journalPageData.newsletter.heading}
        </h3>

        <p className="text-base md:text-lg text-[#52525B] leading-relaxed mb-10 max-w-[600px] mx-auto">
          {journalPageData.newsletter.description}
        </p>

        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row items-center gap-4 max-w-[500px] mx-auto"
        >
          <input 
            type="email"
            required
            placeholder={journalPageData.newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white border border-[#E4E4E7] px-6 py-4 text-sm focus:outline-none focus:border-[#09090B] transition-colors"
          />
          <button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full sm:w-auto px-8 py-4 bg-[#09090B] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-colors duration-300 disabled:opacity-80 flex items-center justify-center gap-2"
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : journalPageData.newsletter.buttonText}
            {status === "idle" && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <p className="text-xs text-[#52525B] mt-6">
          {journalPageData.newsletter.privacy}
        </p>

      </div>
    </section>
  );
}
