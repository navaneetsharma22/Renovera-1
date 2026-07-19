import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileQuestion, FolderOpen, Search, Newspaper } from "lucide-react";

const icons = {
  generic: FileQuestion,
  projects: FolderOpen,
  search: Search,
  blog: Newspaper,
};

/**
 * Reusable Empty State component
 * 
 * @param {Object} props
 * @param {'generic'|'projects'|'search'|'blog'} [props.type='generic'] - Preset icon type
 * @param {string} props.title - Main heading
 * @param {string} [props.description] - Paragraph description
 * @param {Object} [props.action] - { label, href, onClick }
 * @param {string} [props.className] - Additional classes
 */
export function EmptyState({
  type = "generic",
  title,
  description,
  action,
  className,
}) {
  const Icon = icons[type] || icons.generic;

  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-12 md:p-24 text-center border border-dashed border-border rounded-sm bg-card",
      className
    )}>
      <div className="flex items-center justify-center size-16 rounded-full bg-muted mb-6 text-muted-foreground">
        <Icon className="size-8" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      {description && (
        <p className="text-muted-foreground max-w-md mb-8">
          {description}
        </p>
      )}

      {action && (
        action.href ? (
          <Button asChild variant="outline">
            <Link href={action.href}>
              {action.label}
            </Link>
          </Button>
        ) : (
          <Button variant="outline" onClick={action.onClick}>
            {action.label}
          </Button>
        )
      )}
    </div>
  );
}
