"use client";

import { useRef } from "react";
import { Phone, Mail, MessageCircle, MapPin, AlertCircle, Share2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { contactData } from "./contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function ContactCards({ className }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  const cards = [
    {
      icon: <Phone className="w-5 h-5 text-[#C5A059]" />,
      title: "Office Phone",
      value: contactData.company.phone,
      action: { label: "Call Us", href: `tel:${contactData.company.phone.replace(/[^0-9+]/g, '')}` }
    },
    {
      icon: <Mail className="w-5 h-5 text-[#C5A059]" />,
      title: "Email Address",
      value: contactData.company.email,
      action: { label: "Send Email", href: `mailto:${contactData.company.email}` }
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#C5A059]" />,
      title: "WhatsApp",
      value: contactData.company.whatsapp,
      action: { label: "Message", href: `https://wa.me/${contactData.company.whatsapp.replace(/[^0-9]/g, '')}` }
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-[#C5A059]" />,
      title: "Emergency Support",
      value: contactData.company.emergencyContact,
      action: { label: "Call Now", href: `tel:${contactData.company.emergencyContact.replace(/[^0-9+]/g, '')}` }
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#C5A059]" />,
      title: "Headquarters",
      value: contactData.company.address,
      action: { label: "Get Directions", href: "#map" }
    },
    {
      icon: <Share2 className="w-5 h-5 text-[#C5A059]" />,
      title: "Social Media",
      value: "@RenoveraStudio",
      action: { label: "Follow Us", href: contactData.company.socialLinks.instagram }
    }
  ];

  return (
    <section ref={sectionRef} className={cn("py-24 bg-[#FAFAFA] border-y border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#09090B]">
            Get In Touch
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#E4E4E7] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center mb-6">
                {card.icon}
              </div>
              
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-2">
                {card.title}
              </h4>
              <p className="text-lg md:text-xl font-bold font-heading text-[#09090B] mb-8 group-hover:text-[#C5A059] transition-colors">
                {card.value}
              </p>
              
              <div className="mt-auto pt-6 border-t border-[#E4E4E7] w-full">
                <a 
                  href={card.action.href}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#09090B] group-hover:text-[#C5A059] transition-colors"
                >
                  {card.action.label} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
