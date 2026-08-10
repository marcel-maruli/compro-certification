import { BookCheck, ClipboardCheck, FileSearch, ShieldCheck, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  points: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "registrasi-produk",
    icon: ClipboardCheck,
    title: "Registrasi Produk",
    shortDescription: "Pendampingan dokumen dan alur registrasi agar produk siap melalui proses verifikasi.",
    description: "Kami membantu Anda memahami kebutuhan registrasi, menyiapkan dokumen secara terstruktur, dan menjaga setiap tahap pengajuan tetap terpantau.",
    points: ["Analisis kebutuhan produk", "Cek kelengkapan dokumen", "Pendampingan registrasi"],
    outcomes: ["Peta persyaratan yang lebih jelas", "Dokumen tersusun sebelum diajukan", "Tindak lanjut pengajuan yang terarah"],
  },
  {
    slug: "review-label-komposisi",
    icon: FileSearch,
    title: "Review Label & Komposisi",
    shortDescription: "Review label, komposisi, klaim, dan dokumen pendukung agar lebih aman saat diajukan.",
    description: "Tim VSN meninjau informasi penting pada label dan komposisi produk untuk menemukan bagian yang perlu diperbaiki sebelum proses registrasi berjalan.",
    points: ["Audit label", "Pemeriksaan klaim", "Saran perbaikan cepat"],
    outcomes: ["Label lebih konsisten dengan komposisi", "Klaim ditinjau sesuai kebutuhan produk", "Risiko revisi administratif lebih kecil"],
  },
  {
    slug: "kepatuhan-bpom",
    icon: ShieldCheck,
    title: "Kepatuhan BPOM",
    shortDescription: "Pemetaan risiko dan checklist persiapan kepatuhan BPOM untuk bisnis Anda.",
    description: "Kami memetakan area kepatuhan yang relevan dengan produk dan operasional Anda, lalu mengubahnya menjadi langkah praktis yang mudah diikuti tim.",
    points: ["Pemetaan risiko", "Checklist standar", "Rencana mitigasi"],
    outcomes: ["Prioritas perbaikan lebih terukur", "Checklist kepatuhan untuk tim", "Dasar pengambilan keputusan yang lebih kuat"],
  },
  {
    slug: "pendampingan-sertifikasi",
    icon: BookCheck,
    title: "Pendampingan Sertifikasi",
    shortDescription: "Layanan dari awal hingga final agar tim internal tetap fokus pada operasional.",
    description: "Dari briefing awal sampai tindak lanjut, VSN mendampingi proses sertifikasi dengan alur kerja yang rapi dan komunikasi yang mudah dipahami.",
    points: ["Briefing proses", "Pendampingan audit", "Follow-up tindak lanjut"],
    outcomes: ["Tim memahami tahapan sertifikasi", "Persiapan audit lebih sistematis", "Tindak lanjut tidak terlewat"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
