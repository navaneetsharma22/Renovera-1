import {
  ServicesHero,
  InteractiveServiceGrid,
  FeaturedServices,
  IndustriesServed,
  WhyChooseSection,
  ProcessPreview,
  FAQPreview,
  ServicesCTA
} from "@/components/services-page";

export const metadata = {
  title: "Luxury Architecture & Renovation Services | Renovera",
  description: "Discover Renovera's premium architecture, renovation, interior design, landscape, and smart home services designed to transform modern living spaces.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <ServicesHero />
      <InteractiveServiceGrid />
      <FeaturedServices />
      <IndustriesServed />
      <WhyChooseSection />
      <ProcessPreview />
      <FAQPreview />
      <ServicesCTA />
    </main>
  );
}
