import { cn } from "@/lib/utils";

export function HeroContent({ 
  badge, 
  title, 
  description, 
  buttons, 
  statistics, 
  children,
  className 
}) {
  return (
    <div className={cn("flex flex-col max-w-2xl lg:max-w-xl", className)}>
      {badge}
      {title}
      {description}
      {children}
      
      {buttons && (
        <div className="mt-8 lg:mt-12">
          {buttons}
        </div>
      )}
      
      {statistics && (
        <div className="mt-12 lg:mt-auto pt-6 border-t border-border/50">
          {statistics}
        </div>
      )}
    </div>
  );
}
