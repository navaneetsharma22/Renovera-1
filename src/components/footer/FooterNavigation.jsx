import Link from "next/link";
import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

export function FooterNavigation({ className }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8", className)}>
      {Object.entries(footerData.navigation).map(([category, links]) => (
        <div key={category} className="flex flex-col">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA] mb-8">
            {category}
          </h4>
          <ul className="flex flex-col gap-4">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-sm text-[#A1A1AA] hover:text-[#C5A059] transition-colors duration-300 relative group inline-block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
