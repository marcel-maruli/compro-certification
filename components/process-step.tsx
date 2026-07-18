import { cn } from "@/lib/utils";

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
  className?: string;
};

export function ProcessStep({ step, title, description, className }: ProcessStepProps) {
  return (
    <div className={cn("reveal relative z-10 flex flex-col items-center text-center", className)}>
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-teal-50 text-2xl font-black text-teal-600 shadow-xl shadow-teal-500/10">
        {step}
      </div>
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 max-w-xs px-4 text-sm leading-7 text-slate-500">{description}</p>
    </div>
  );
}
