import { cn } from "@/lib/utils";
import { TeamCard } from "./TeamCard";
import { teamMembers } from "./teamData";

export function TeamGrid({ className }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16", className)}>
      {teamMembers.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
