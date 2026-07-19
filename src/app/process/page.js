import { ProcessSection } from "@/components/process";
import { ConsultationCTA } from "@/components/cta";

export const metadata = {
  title: "Our Process | Renovera",
  description: "Learn about Renovera's meticulous design and construction process. From vision to reality.",
};

export default function ProcessPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background pt-24 md:pt-32">
      <ProcessSection />
      <ConsultationCTA />
    </main>
  );
}
