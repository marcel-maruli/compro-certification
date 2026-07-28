import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import logoImage from "@/assets/logo.jpeg";
import { Reveal } from "@/components/reveal";

function WhatsAppIcon() {
  return (
    <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#25D366] shadow-sm transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
      <svg
        aria-hidden="true"
        className="h-5 w-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.25a9.73 9.73 0 0 0-8.4 14.65L2.3 21.7l4.92-1.27A9.75 9.75 0 1 0 12 2.25Zm0 17.7a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.92.76.78-2.84-.19-.3A7.94 7.94 0 1 1 12 19.95Zm4.35-5.93c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.59 4.1 3.63.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="absolute -right-0.5 -top-1 text-[10px] text-yellow-300">
        ✦
      </span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-10 md:pb-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.11),transparent_28%)]" />
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-14">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulseSoft" />
              Sahabat UMKM & Industri
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white bg-white shadow-lg shadow-blue-100/60">
                  <Image
                    src={logoImage}
                    alt="VSN logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">
                    VSN
                  </p>
                  <p className="text-sm text-slate-500">
                    Sahabat UMKM & Industri
                  </p>
                </div>
              </div>
              <h1 className="max-w-3xl text-xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Mencetak UMKM & Industri yang Kompeten
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Veritas Sahabat Nusantara hadir sebagai Sahabat UMKM & Industri
                untuk membantu menyiapkan dan mengunggah persyaratan izin edar
                produk dengan proses yang jelas, terarah, dan terukur.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <span className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30">
                <WhatsAppIcon />
                Mulai Konsultasi
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-100 bg-white px-7 py-4 text-base font-bold text-teal-700 shadow-sm transition hover:border-teal-200 hover:bg-teal-50">
                <Play className="h-4 w-4 fill-current" />
                Lihat Layanan
              </span>
            </div>

            <div className="flex gap-4 sm:grid-cols-3 flex-wrap">
              {[
                { label: "Klien Dibantu", icon: ShieldCheck },
                {
                  value: "Produk Resiko  Tinggi",
                  label: "87 SKU (Average : 35 hari)",
                  icon: BadgeCheck,
                },
                {
                  value: "Produk Resiko Menengah Tinggi",
                  label: "753 SKU (Average : 18 hari)",
                  icon: BadgeCheck,
                },
                {
                  value: "Produk Resiko Menangah Rendah",
                  label: "462 SKU (Average : 2 hari)",
                  icon: BadgeCheck,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.label}
                    delay={index * 120}
                    className="w-full"
                  >
                    <div className="rounded-3xl border border-teal-50 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(20,184,166,0.18)]">
                      <Icon className="mb-4 h-5 w-5 text-teal-600" />
                      {item.value ? (
                        <div className="text-2xl font-extrabold text-slate-950">
                          {item.value}
                        </div>
                      ) : null}
                      <p
                        className={
                          item.value
                            ? "mt-1 text-sm font-medium text-slate-500"
                            : "text-sm font-medium text-slate-500"
                        }
                      >
                        {item.label}
                      </p>
                      {!item.value ? (
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          {[
                            { value: "3724", label: "UMKM" },
                            { value: "144", label: "Industri" },
                          ].map((subCard) => (
                            <div
                              key={subCard.label}
                              className="rounded-2xl border border-teal-50 bg-teal-50/70 px-3 py-3"
                            >
                              <div className="text-lg font-extrabold text-teal-700">
                                {subCard.value}
                              </div>
                              <p className="mt-0.5 text-xs font-semibold text-slate-500">
                                {subCard.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="relative min-w-0">
            <div className="hero-gradient relative min-w-0 overflow-hidden rounded-[2.5rem] p-5 shadow-soft sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_35%)]" />

              <div className="relative grid gap-5">
                <div className="rounded-[2rem] border border-white/30 bg-white/15 p-4 backdrop-blur-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/75">
                        Program Registration Officer
                      </p>
                      <h2 className="mt-2 max-w-xl text-xl font-extrabold leading-tight text-black sm:text-2xl">
                        Siapkan dan unggah persyaratan izin edar
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-white/15 px-3 py-2 text-sm font-bold text-black">
                      24/7
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 flex-col">
                  <div className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-glow sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-lg font-extrabold leading-tight text-slate-900">
                            Registration Officer Flow
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                        Valid
                      </span>
                    </div>

                    <p className="mt-5 max-w-md text-2xl leading-6 text-black font-bold">
                      Proses Sertifikasi
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {[
                        "Registrasi Pelatihan",
                        "Pelatihan online/offline",
                        "Post Test",
                        "Sertifikasi Kompetensi",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3.5 py-3"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                          <span className="text-sm font-semibold text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 max-w-md text-2xl leading-6 text-black font-bold">
                      Proses Pendampingan
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {["Pendampingan dan Pemeriksaan Kelengkapan Dokumen"].map(
                        (item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3.5 py-3"
                          >
                            <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                            <span className="text-sm font-semibold text-slate-600">
                              {item}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Konsultasi", value: "Gratis" },
                    { label: "Pendampingan", value: "End-to-end" },
                    { label: "Respon", value: "Cepat" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] bg-white/12 px-4 py-4 text-black backdrop-blur-sm"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/70">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-extrabold">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
