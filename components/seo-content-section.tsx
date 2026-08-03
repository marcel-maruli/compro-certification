import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    question: "Apa itu sertifikasi dan mengapa penting untuk produk?",
    answer:
      "Sertifikasi dan kelengkapan izin membantu menunjukkan bahwa produk, proses, dan dokumennya telah dipersiapkan sesuai persyaratan yang berlaku. VSN membantu memetakan kebutuhan tersebut sejak tahap awal.",
  },
  {
    question: "Apakah VSN membantu proses sertifikasi BPOM?",
    answer:
      "Ya. VSN menyediakan konsultasi, review label dan komposisi, pemetaan dokumen, serta pendampingan persiapan registrasi dan tindak lanjut terkait kepatuhan BPOM.",
  },
  {
    question: "Apakah tersedia pelatihan untuk Registration Officer?",
    answer:
      "Program VSN mencakup registrasi pelatihan, pelatihan online atau offline, post-test, dan sertifikasi kompetensi Registration Officer sesuai program yang tersedia.",
  },
  {
    question: "Apa hubungan teknologi pangan dan food technology dengan layanan VSN?",
    answer:
      "Pengetahuan teknologi pangan atau food technology membantu memahami keamanan, proses, bahan, pengemasan, dan daya simpan produk. VSN menggunakannya sebagai konteks saat membantu UMKM dan industri menyiapkan dokumen produk pangan.",
  },
];

export function SeoContentSection() {
  return (
    <section
      id="informasi-sertifikasi"
      className="border-y border-teal-50 bg-white py-20 md:py-28"
    >
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Informasi Sertifikasi & Pelatihan"
          title="Certificate, sertifikat, dan kesiapan produk untuk pasar"
          description="Veritas Sahabat Nusantara mendampingi UMKM dan industri dalam menyiapkan pelatihan, sertifikasi, dokumen izin edar, serta pemahaman teknologi pangan untuk produk yang aman dan siap berkembang."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-teal-50 bg-slate-50/70 p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-950 marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
