import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProcessStep } from "@/components/process-step";

const steps = [
  {
    step: "01",
    title: "Konsultasi Awal",
    description: "Kami mempelajari kategori produk, target distribusi, dan kebutuhan sertifikasi Anda.",
  },
  {
    step: "02",
    title: "Pemetaan Dokumen",
    description: "Tim kami menyusun daftar dokumen, label, dan informasi yang perlu dipersiapkan.",
  },
  {
    step: "03",
    title: "Review & Perbaikan",
    description: "Kami mengecek detail penting, memberi arahan, dan merapikan bagian yang berisiko.",
  },
  {
    step: "04",
    title: "Pendampingan Final",
    description: "Proses ditutup dengan pendampingan pengajuan dan tindak lanjut sampai selesai.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Proses VSN"
          title="Alur kerja yang rapi, jelas, dan mudah dipahami"
          description="Kami menjaga setiap langkah tetap transparan agar tim Anda tahu apa yang sedang dikerjakan dan kenapa itu penting."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 110}>
              <ProcessStep {...step} className={index < steps.length - 1 ? "step-connect" : undefined} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
