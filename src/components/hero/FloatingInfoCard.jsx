import { cn } from "@/lib/utils";
import { Building, ShieldCheck, MapPin } from "lucide-react";

export function FloatingInfoCard({ className, items = [] }) {
  if (!items.length) return null;

  const getIcon = (value) => {
    switch(value) {
      case "520+": return <Building className="size-7 text-zinc-800 stroke-[1.5]" />;
      case "15+": return <ShieldCheck className="size-7 text-zinc-800 stroke-[1.5]" />;
      case "25+": return <MapPin className="size-7 text-zinc-800 stroke-[1.5]" />;
      default: return <ShieldCheck className="size-7 text-zinc-800 stroke-[1.5]" />;
    }
  };

  return (
    <div className={cn("bg-white text-zinc-900 p-10 lg:p-12 rounded-2xl shadow-2xl shadow-black/20 flex flex-col divide-y divide-zinc-200 hover:-translate-y-1 transition-transform duration-500", className)}>
      <h3 className="font-heading font-bold text-xl mb-4 text-zinc-900">Our Impact</h3>
      <div className="flex flex-col divide-y divide-zinc-200 border-t border-zinc-200">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-5 py-5 group">
          <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {getIcon(item.value)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-zinc-900 mb-0.5">{item.value}</span>
            <span className="text-[13px] text-zinc-500 font-medium">{item.label}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
