import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroImage({ 
  src, 
  alt, 
  priority = true, 
  fill = true, 
  overlay = true, 
  className 
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        quality={100}
        unoptimized
        className={cn("object-cover object-center animate-hero-zoom contrast-[1.05] saturate-[.90]", className)}
        sizes="100vw"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
      )}
      
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1.08); }
          100% { transform: scale(1.00); }
        }
        .animate-hero-zoom {
          animation: heroZoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  );
}
