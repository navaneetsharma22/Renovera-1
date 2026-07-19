import { cn } from "@/lib/utils";

export function SectionHeader({ badge, title, highlight, description, className, alignment = "center" }) {
  const parts = title?.split(highlight) || [];

  const alignmentClasses = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left",
  };

  return (
    <div className={cn("flex flex-col max-w-[720px]", alignmentClasses[alignment], className)}>
      {badge && (
        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-4 block">
          {badge}
        </span>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.1] mb-6 text-foreground">
        {highlight && parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="font-serif italic text-[#C5A059] font-normal tracking-normal block mt-2">
              {highlight}
            </span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
