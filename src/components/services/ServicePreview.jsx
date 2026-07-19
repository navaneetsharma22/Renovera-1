import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicePreview({ service }) {
  if (!service) return null;

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/50 sticky top-32">
      {/* Image Wrapper */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image 
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6">
          <h4 className="text-2xl md:text-3xl font-bold font-heading text-white">{service.title}</h4>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {service.fullDescription}
        </p>

        {/* Features List */}
        <div className="mb-8">
          <h5 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Key Features</h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="size-4 text-[#C5A059] mt-0.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-border/50">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Timeline</span>
            <span className="text-sm font-bold text-foreground">{service.timeline}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Property Type</span>
            <span className="text-sm font-bold text-foreground">{service.propertyType}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Button 
            asChild 
            className="w-full group h-14 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href={`/services/${service.id}`}>
              Explore {service.title}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
