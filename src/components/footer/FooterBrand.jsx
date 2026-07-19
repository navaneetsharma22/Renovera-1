import Link from "next/link";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function FooterBrand({ className }) {
  return (
    <div className={cn("flex flex-col max-w-[420px]", className)}>
      <Link
        href="/"
        className="text-2xl font-bold font-heading tracking-widest text-[#FAFAFA] mb-8 inline-block uppercase"
      >
        {footerData.brand.logo}
      </Link>
      
      <h3 className="text-3xl md:text-4xl font-bold font-heading text-[#FAFAFA] mb-6 tracking-tight leading-tight whitespace-pre-line">
        {footerData.brand.tagline}
      </h3>
      
      <p className="text-base text-[#A1A1AA] leading-relaxed">
        {footerData.brand.description}
      </p>
    </div>
  );
}
