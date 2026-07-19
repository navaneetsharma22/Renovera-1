import { cn } from "@/lib/utils";

export function HeroDescription({ description, maxWidth = "max-w-lg", className }) {
  if (!description) return null;

  return (
    <p className={cn(
      "text-lg md:text-xl text-muted-foreground leading-loose",
      maxWidth,
      className
    )}>
      {description}
    </p>
  );
}
