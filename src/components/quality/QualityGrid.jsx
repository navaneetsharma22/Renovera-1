import { cn } from "@/lib/utils";
import { QualityCard } from "./QualityCard";
import { qualityStandards } from "./qualityData";

export function QualityGrid({ className }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", className)}>
      {qualityStandards.map((standard) => (
        <QualityCard key={standard.id} standard={standard} />
      ))}
    </div>
  );
}
