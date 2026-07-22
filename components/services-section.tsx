import { BookCheck, ClipboardCheck, FileSearch, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: ClipboardCheck,
    title: "Registrasi Produk",
    description:
      "Pendampingan dokumen dan alur registrasi agar produk Anda siap melalui proses verifikasi.",
    points: ["Analisis kebutuhan produk", "Cek kelengkapan dokumen", "Pendampingan registrasi"],
  },
  {
    icon: FileSearch,
    title: "Review Label & Komposisi",
    description:
      "Kami meninjau label, komposisi, klaim, dan dokumen pendukung agar lebih aman saat diajukan.",
    points: ["Audit label", "Pemeriksaan klaim", "Saran perbaikan cepat"],
  },
  {
    icon: ShieldCheck,
    title: "Kepatuhan BPOM",
    description:
      "Solusi kepatuhan untuk membantu bisnis meminimalkan risiko revisi dan hambatan administratif.",
    points: ["Pemetaan risiko", "Checklist standar", "Rencana mitigasi"],
  },
  {
    icon: BookCheck,
    title: "Pendampingan Sertifikasi",
    description:
      "Layanan dari awal hingga final untuk memastikan tim internal tetap fokus pada operasional.",
    points: ["Briefing proses", "Pendampingan audit", "Follow-up tindak lanjut"],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-50/70 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Layanan VSN"
          title="Layanan yang dirancang untuk mempercepat kelayakan produk"
          description="Dari review awal sampai pendampingan sertifikasi, VSN menjaga proses tetap sederhana, terukur, dan mudah diikuti oleh tim Anda."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
