import { cn } from "@/lib/utils";
import { AdvantageCard } from "./AdvantageCard";
import { advantages } from "./whyChooseData";

export function AdvantageGrid({ className }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", className)}>
      {advantages.map((advantage) => (
        <AdvantageCard key={advantage.id} advantage={advantage} />
      ))}
    </div>
  );
}
