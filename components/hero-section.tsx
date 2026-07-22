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
                Mencetak Registration Officer yang Kompeten.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Veritas Sahabat Nusantara hadir sebagai Sahabat UMKM & Industri
                untuk membantu menyiapkan dan mengunggah persyaratan izin edar
                produk dengan proses yang jelas, terarah, dan terukur.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <span
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30"
              >
                Mulai Konsultasi
                <ArrowRight className="h-4 w-4" />
              </span>
              <span
                className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-100 bg-white px-7 py-4 text-base font-bold text-teal-700 shadow-sm transition hover:border-teal-200 hover:bg-teal-50"
              >
                <Play className="h-4 w-4 fill-current" />
                Lihat Layanan
              </span>
            </div>

            <div className="flex gap-4 sm:grid-cols-3 flex-wrap">
              {[
                { label: "Klien Dibantu", icon: ShieldCheck },
                {
                  value: "95%",
                  label: "Dokumen Siap Diajukan",
                  icon: BadgeCheck,
                },
                { value: "7 Hari", label: "Respons Cepat", icon: Sparkles },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.label}
                    delay={index * 120}
                    className={index == 0 ? "w-full" : "w-[48%]"}
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
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                            Pengajuan Izin Edar
                          </p>
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
                        "Sertifikasi",
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
                      {[
                        "Pendampingan dan Pemeriksaan Kelengkapan Dokumen",
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
                  </div>

                  <div className="min-w-0 rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/20 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                        Status Pengajuan
                      </p>
                      <span className="flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                        Aktif
                      </span>
                    </div>

                    <p className="mt-7 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                      Siap diunggah
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Dokumen telah diarahkan untuk masuk ke proses pengajuan
                      izin edar.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-2">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <p className="text-xs text-white/55">Tahap</p>
                        <p className="mt-1 font-bold">01</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3">
                        <p className="text-xs text-white/55">Gelar</p>
                        <p className="mt-1 font-bold">RO</p>
                      </div>
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
