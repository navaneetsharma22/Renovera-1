import { cn } from "@/lib/utils";

/**
 * Premium Heading for the Hero.
 * Optionally highlights specific words by splitting the title on the highlight string.
 */
export function HeroHeading({ title, highlight, className }) {
  if (!highlight || !title.includes(highlight)) {
    return (
      <h1 className={cn("text-5xl md:text-6xl lg:text-[72px] font-bold font-heading tracking-tight leading-[1.1] mb-6 max-w-[600px]", className)}>
        {title}
      </h1>
    );
  }

  const parts = title.split(highlight);

  return (
    <h1 className={cn("text-5xl md:text-6xl lg:text-[72px] font-bold font-heading tracking-tight leading-[1.05] mb-8 max-w-[700px]", className)}>
      {parts[0]}
      <span className="font-serif italic text-[#C7A76C] font-normal tracking-normal block mt-4">
        {highlight}
      </span>
      {parts[1]}
    </h1>
  );
}
