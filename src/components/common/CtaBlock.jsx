import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Reusable CTA Block component
 * 
 * @param {Object} props
 * @param {string} props.title - Main heading
 * @param {string} [props.description] - Paragraph description
 * @param {Object} [props.primaryBtn] - { label, href }
 * @param {Object} [props.secondaryBtn] - { label, href }
 * @param {'white'|'muted'|'primary'} [props.variant='muted'] - Background variant
 * @param {string} [props.className] - Additional classes
 */
export function CtaBlock({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  variant = "muted",
  className,
}) {
  const variantStyles = {
    white: "bg-background text-foreground border-y border-border",
    muted: "bg-muted text-foreground",
    primary: "bg-primary text-primary-foreground",
  };

  // Determine button variants based on block variant
  const getPrimaryBtnVariant = () => {
    if (variant === "primary") return "secondary"; // Invert on primary background
    return "default";
  };

  const getSecondaryBtnVariant = () => {
    if (variant === "primary") return "outline"; // White outline on primary bg
    return "outline";
  };

  return (
    <section className={cn("py-24 px-4 md:px-8", variantStyles[variant], className)}>
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6">
          {title}
        </h2>
        
        {description && (
          <p className={cn(
            "text-lg md:text-xl leading-relaxed mb-10 max-w-2xl",
            variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {primaryBtn && (
            <Button
              asChild
              size="lg"
              variant={getPrimaryBtnVariant()}
              className="w-full sm:w-auto min-w-[160px]"
            >
              <Link href={primaryBtn.href}>
                {primaryBtn.label}
              </Link>
            </Button>
          )}
          
          {secondaryBtn && (
            <Button
              asChild
              size="lg"
              variant={getSecondaryBtnVariant()}
              className={cn(
                "w-full sm:w-auto min-w-[160px]",
                variant === "primary" && "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              <Link href={secondaryBtn.href}>
                {secondaryBtn.label}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
