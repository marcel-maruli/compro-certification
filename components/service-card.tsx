import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  className?: string;
};

export function ServiceCard({ icon: Icon, title, description, points, className }: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[2.5rem] border border-teal-50 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:bg-teal-500 hover:shadow-soft",
        className,
      )}
    >
      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-white/20 group-hover:text-white">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-2xl font-bold text-slate-950 transition-colors group-hover:text-white">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-slate-600 transition-colors group-hover:text-white/80">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-sm font-medium text-slate-600 transition-colors group-hover:text-white/85">
            <span className="mt-1 h-2 w-2 rounded-full bg-teal-500 transition-colors group-hover:bg-white" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <span
        className="mt-8 inline-flex items-center gap-2 font-bold text-teal-600 transition-colors group-hover:text-white"
      >
        Selengkapnya
        <ArrowRight className="h-4 w-4" />
      </span>
    </article>
  );
}
