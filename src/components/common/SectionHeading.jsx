import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Reusable Section Heading component
 * 
 * @param {Object} props
 * @param {string} [props.badge] - Optional badge text
 * @param {string} props.title - Main heading
 * @param {string} [props.subtitle] - Smaller overtitle or subtitle
 * @param {string} [props.description] - Paragraph description
 * @param {Object} [props.cta] - CTA object { label, href }
 * @param {'left'|'center'|'right'} [props.align='left'] - Text alignment
 * @param {string} [props.className] - Additional classes
 */
export function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  cta,
  align = "left",
  className,
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-4 max-w-3xl", alignmentClasses[align], className)}>
      {/* Badge / Subtitle Area */}
      {(badge || subtitle) && (
        <div className="flex items-center gap-3 mb-2">
          {badge && (
            <Badge variant="outline" className="uppercase tracking-wider text-xs">
              {badge}
            </Badge>
          )}
          {subtitle && (
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed mt-2">
          {description}
        </p>
      )}

      {/* Optional CTA */}
      {cta && (
        <div className="mt-4">
          <Button asChild variant="link" className="p-0 h-auto font-medium group">
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
