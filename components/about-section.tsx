import { BadgeCheck, Boxes, Clock3, Leaf } from "lucide-react";

import { Reveal } from "@/components/reveal";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Konsultasi yang jelas",
    description:
      "Kami memetakan kebutuhan regulasi dan langkah kerja tanpa bahasa yang berputar-putar.",
  },
  {
    icon: Boxes,
    title: "Pendekatan berbasis produk",
    description:
      "Setiap kategori produk diperlakukan sesuai risiko, dokumen, dan tujuan distribusinya.",
  },
  {
    icon: Clock3,
    title: "Proses responsif",
    description:
      "Tim kami bergerak cepat dari review awal sampai pendampingan final.",
  },
  {
    icon: Leaf,
    title: "Solusi yang ramah UMKM",
    description:
      "Kami merancang alur yang realistis, terjangkau, dan tetap patuh standar.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-slate-50/70 py-24 md:py-32">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32">
            <div className="space-y-6 rounded-[2.5rem] bg-white p-8 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">
                Tentang VSN
              </p>
              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Mitra terpercaya untuk produk aman, patuh, dan siap masuk pasar
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Veritas Sahabat Nusantara adalah Sahabat UMKM & Industri yang
                mendampingi proses sertifikasi BPOM dan standardisasi produk
                dengan pendekatan yang rapi, hangat, dan berbasis detail. Kami
                membantu tim Anda menghindari revisi berulang, mempercepat
                validasi, dan menjaga kepercayaan pasar.
              </p>

              <div className="rounded-3xl border border-teal-100 bg-teal-50/70 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                  Visi VSN
                </p>
                <p className="mt-3 text-lg font-bold leading-8 text-slate-900">
                  Membangun percepatan pertumbuhan ekonomi dengan kepatuhan
                  regulasi dan persaingan global.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  // { value: "xx+", label: "Tahun pengalaman" },
                  { value: "3x", label: "Lebih efisien dalam review awal" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-teal-50 bg-slate-50 p-6"
                  >
                    <div className="text-3xl font-extrabold text-teal-600">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="h-full rounded-[2rem] border border-teal-50 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
