import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TeamCard({ member, className }) {
  return (
    <div className={cn("group flex flex-col cursor-pointer", className)}>
      {/* Portrait Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted mb-6">
        <Image 
          src={member.portrait}
          alt={member.name}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
        <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col relative">
        <div className="flex justify-between items-start mb-1">
          <h4 className="text-xl md:text-2xl font-bold font-heading text-foreground group-hover:text-[#C5A059] transition-colors duration-500">
            {member.name}
          </h4>
          {member.socialLinks?.linkedin && (
            <Link 
              href={member.socialLinks.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#C5A059] transition-colors opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
            </Link>
          )}
        </div>
        
        <p className="text-sm font-medium text-muted-foreground mb-3 font-heading italic">
          {member.role}
        </p>

        <div className="flex flex-col gap-1 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-75">
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
            Experience: <span className="text-foreground">{member.experience}</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
            Focus: <span className="text-foreground">{member.specialization}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
