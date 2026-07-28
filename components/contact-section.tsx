import { Building2, Mail, MapPin, PhoneCall, Send } from "lucide-react";

import { Reveal } from "@/components/reveal";

const contactDetails = [
  {
    icon: PhoneCall,
    title: "Telepon",
    text: "+62 812-3456-7890",
  },
  {
    icon: Mail,
    title: "Email",
    text: "veritassahabatnusantara@gmail.com",
  },
  {
    icon: MapPin,
    title: "Kantor",
    text: "Jakarta, Indonesia",
  },
  {
    icon: Building2,
    title: "Jam kerja",
    text: "Senin - Jumat, 09.00 - 17.00",
  },
];

export function ContactSection() {
  return (
    <section className="bg-slate-50/70 py-16 md:py-32">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-soft sm:rounded-[2.75rem]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[linear-gradient(135deg,rgba(37,99,235,0.95),rgba(34,197,94,0.88))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <Reveal className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
                Kontak VSN
              </p>
              <h2 className="max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Siap memulai proses sertifikasi produk Anda?
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Kirim detail produk Anda, dan tim VSN akan membantu memetakan kebutuhan
                awal, alur kerja, serta langkah yang paling relevan.
              </p>

              <div className="flex flex-col gap-3">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={index * 90} className="w-full">
                      <div className="flex h-full min-w-0 items-start gap-3 rounded-[1.5rem] bg-white/10 p-3.5 backdrop-blur-sm sm:gap-4 sm:rounded-[1.75rem] sm:p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white/70">{item.title}</p>
                          {item.title === "Email" ? (
                            <a
                              href={`mailto:${item.text}`}
                              className="mt-1 block break-all text-sm font-bold text-white underline-offset-4 hover:underline sm:text-base"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm font-bold text-white sm:text-base">{item.text}</p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              </Reveal>
            </div>

            <Reveal className="bg-white px-5 py-8 text-slate-900 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <form className="rounded-[2rem] bg-white p-0 text-slate-900">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Nama</span>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 sm:text-base"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Perusahaan</span>
                    <input
                      type="text"
                      placeholder="Nama bisnis"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 sm:text-base"
                    />
                  </label>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Email</span>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.com"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 sm:text-base"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Telepon</span>
                    <input
                      type="tel"
                      placeholder="+62 ..."
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 sm:text-base"
                    />
                  </label>
                </div>

                <label className="mt-4 block space-y-2">
                  <span className="text-sm font-bold text-slate-700">Pesan</span>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan jenis produk, kebutuhan sertifikasi, atau kendala yang sedang Anda hadapi."
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100 sm:text-base"
                  />
                </label>

                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-600 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Kirim Pesan
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
