import { TeamSection } from "@/components/team";
import { ConsultationCTA } from "@/components/cta";
import { TeamHero } from "@/components/team/TeamHero";

export const metadata = {
  title: "Our Team | Renovera - Luxury Architecture & Home Renovation",
  description: "Meet the talented architects, designers, engineers, and project managers behind Renovera's exceptional renovation and architectural projects.",
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <TeamHero />
      <TeamSection />
      <ConsultationCTA />
    </main>
  );
}
