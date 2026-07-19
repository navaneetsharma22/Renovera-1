"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQItem } from "./FAQItem";
import { faqs } from "./faqData";

export function FAQAccordion({ className }) {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("flex flex-col border border-border/50 rounded-2xl overflow-hidden shadow-sm", className)}>
      {faqs.map((faq) => (
        <FAQItem 
          key={faq.id} 
          faq={faq} 
          isOpen={openId === faq.id} 
          onToggle={() => handleToggle(faq.id)} 
        />
      ))}
    </div>
  );
}
