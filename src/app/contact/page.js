import {
  ContactHero,
  ConsultationForm,
  ContactCards,
  OfficeLocations,
  InteractiveMap,
  BusinessHours,
  FAQSection,
  WhyChooseCards,
  ContactCTA
} from "@/components/contact";

export const metadata = {
  title: "Contact Renovera | Book a Luxury Design Consultation",
  description: "Contact Renovera to discuss luxury home renovations, architecture, interior design, and turnkey construction services. Schedule your consultation today.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background relative">
      <ContactHero />
      <ConsultationForm />
      <ContactCards />
      <OfficeLocations />
      <InteractiveMap />
      <BusinessHours />
      <FAQSection />
      <WhyChooseCards />
      <ContactCTA />
    </main>
  );
}
