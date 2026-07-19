import { cn } from "@/lib/utils";

export function CategoryFilters({ categories, activeCategory, onCategoryChange, className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 md:gap-4", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border",
            activeCategory === category
              ? "bg-foreground text-background border-foreground shadow-md"
              : "bg-transparent text-muted-foreground border-border/60 hover:border-foreground/40 hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
