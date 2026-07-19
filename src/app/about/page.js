import { 
  AboutHero, 
  CompanyStory, 
  MissionVision, 
  CoreValues, 
  Timeline, 
  AwardsSection, 
  LeadershipSection, 
  StudioCulture, 
  DesignPhilosophy, 
  TrustMetrics, 
  AboutCTA 
} from "@/components/about";

export const metadata = {
  title: "About Renovera | Luxury Architecture & Home Renovation Studio",
  description: "Learn about Renovera's story, design philosophy, leadership team, values, and commitment to creating timeless architectural and renovation experiences.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <AwardsSection />
      <LeadershipSection />
      <StudioCulture />
      <DesignPhilosophy />
      <TrustMetrics />
      <AboutCTA />
    </main>
  );
}

