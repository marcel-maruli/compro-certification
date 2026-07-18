import { BookCheck, ClipboardCheck, FileSearch, ShieldCheck } from "lucide-react";

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
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">Layanan</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Layanan yang dirancang untuk mempercepat kelayakan produk
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Dari review awal sampai pendampingan sertifikasi, CertiTrust menjaga proses tetap
            sederhana, terukur, dan mudah diikuti oleh tim Anda.
          </p>
        </Reveal>

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
