import { Hero } from "@/components/hero";
import { TransformationSection } from "@/components/transformation";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";

import { WhyChooseSection } from "@/components/why-choose";
import { ProcessSection } from "@/components/process";
import { TestimonialsSection } from "@/components/testimonials";

import { FAQSection } from "@/components/faq";
import { ConsultationCTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <TransformationSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />

      <FAQSection />
      <ConsultationCTA />
    </main>
  );
}
