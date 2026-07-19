"use client";

import { useRef, useState } from "react";
import { Share2, Link2, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ShareSection({ articleTitle, className }) {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: sectionRef });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const encodedTitle = encodeURIComponent(articleTitle);

  return (
    <div ref={sectionRef} className={cn("my-12 py-8 border-y border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-6", className)}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09090B]">
        <Share2 className="w-4 h-4 text-[#C5A059]" />
        Share this article
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-[#52525B] hover:text-[#09090B] hover:border-[#09090B] transition-all duration-300"
          title="Copy Link"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
        </button>

        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-[#52525B] hover:text-[#09090B] hover:border-[#09090B] transition-all duration-300"
          title="Share on LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-[#52525B] hover:text-[#09090B] hover:border-[#09090B] transition-all duration-300"
          title="Share on Twitter"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>

        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-[#52525B] hover:text-[#09090B] hover:border-[#09090B] transition-all duration-300"
          title="Share on Facebook"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
      </div>
    </div>
  );
}
