import { notFound } from "next/navigation";
import {
  ServiceHero,
  ServiceOverview,
  BenefitsGrid,
  IncludedChecklist,
  ProcessTimeline,
  GallerySection,
  MaterialsSection,
  ServiceBeforeAfter,
  ClientTestimonial,
  FAQSection,
  RelatedServices,
  ConsultationCTA,
  getServiceBySlug,
  getAllServiceSlugs
} from "@/components/service-details";

// Dynamic metadata generation based on service slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: "Service Not Found | Renovera" };
  }

  return {
    title: `${service.title} | Luxury Architecture & Renovation | Renovera`,
    description: service.description,
  };
}

// Statically generate all service routes at build time
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-background">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <BenefitsGrid service={service} />
      <IncludedChecklist service={service} />
      <ProcessTimeline service={service} />
      <GallerySection service={service} />
      <MaterialsSection service={service} />
      <ServiceBeforeAfter service={service} />
      <ClientTestimonial service={service} />
      <FAQSection service={service} />
      <RelatedServices service={service} />
      <ConsultationCTA service={service} />
    </main>
  );
}
