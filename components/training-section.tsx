import Image from "next/image";
import { ArrowUpRight, BadgeCheck, BookOpenCheck, CalendarDays, Users, Video } from "lucide-react";

import trainingPoster from "@/assets/pelatihan-registration-officer-2026.jpeg";
import { Reveal } from "@/components/reveal";

const highlights = [
  { icon: CalendarDays, label: "Jadwal", value: "8–9 Oktober 2026" },
  { icon: Video, label: "Format", value: "Daring melalui Zoom" },
  { icon: BadgeCheck, label: "Sertifikat", value: "E-Sertifikat" },
  { icon: Users, label: "Peserta", value: "UMKM & industri pangan" },
];

const curriculum = [
  {
    title: "Pengantar & regulasi",
    topics: ["Kode etik", "Izin CPPOB/SMKPO", "Kategori pangan"],
  },
  {
    title: "Praktik & aplikasi",
    topics: [
      "Registrasi akun perusahaan",
      "Praktik penyiapan dokumen registrasi",
      "Simulasi pengajuan registrasi melalui aplikasi",
    ],
  },
  {
    title: "Teknis registrasi & standar produk",
    topics: [
      "Konsep dasar registrasi dan identifikasi dokumen registrasi produk pangan olahan",
      "Penggunaan bahan tambahan pangan",
      "Cemaran pangan olahan",
      "Kemasan pangan olahan",
      "Informasi nilai gizi",
      "Label pangan olahan",
      "Sertifikasi halal",
      "Digitalisasi penggunaan AI",
    ],
  },
];

export function TrainingSection() {
  return (
    <section id="pelatihan" className="scroll-mt-28 bg-slate-50/70 py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <Reveal>
            <div className="mx-auto max-w-[28rem] overflow-hidden rounded-[2rem] border border-teal-100 bg-white p-2 shadow-card sm:rounded-[2.5rem] sm:p-3">
              <Image
                src={trainingPoster}
                alt="Poster Pelatihan Registration Officer Pangan Olahan, 8–9 Oktober 2026"
                className="h-auto w-full rounded-[1.5rem] sm:rounded-[2rem]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">
              Pelatihan VSN
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Registration Officer Pangan Olahan
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Tingkatkan kompetensi dan pahami regulasi untuk menyiapkan
              registrasi produk pangan olahan dengan lebih terarah.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-teal-50 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-bold text-slate-900 sm:text-base">
                      {value}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://linktr.ee/veritassahabatnusantara"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-600 sm:text-base"
            >
              Daftar pelatihan <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Investasi ilmu untuk masa depan produk pangan yang lebih aman.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 md:mt-16">
          <div className="rounded-[2rem] border border-teal-50 bg-white p-6 shadow-card sm:rounded-[2.5rem] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <BookOpenCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-600">
                  Materi pelatihan
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-slate-950 sm:text-2xl">
                  Dari pemahaman regulasi sampai simulasi registrasi
                </h3>
              </div>
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {curriculum.map((group) => (
                <div key={group.title} className="rounded-2xl bg-slate-50 p-5">
                  <h4 className="font-bold text-teal-700">{group.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {group.topics.map((topic) => (
                      <li key={topic} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
