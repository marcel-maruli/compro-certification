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
    text: "hello@certitrust.id",
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
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="rounded-[2.75rem] bg-hero-gradient px-6 py-10 text-white shadow-soft sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
                Kontak
              </p>
              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Siap memulai proses sertifikasi produk Anda?
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/85">
                Kirim detail produk Anda, dan tim CertiTrust akan membantu memetakan kebutuhan
                awal, alur kerja, serta langkah yang paling relevan.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={index * 90}>
                      <div className="flex h-full items-start gap-4 rounded-[1.75rem] bg-white/10 p-4 backdrop-blur-sm">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/70">{item.title}</p>
                          <p className="mt-1 font-bold text-white">{item.text}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>

            <Reveal>
              <form className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl shadow-slate-950/10 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Nama</span>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Perusahaan</span>
                    <input
                      type="text"
                      placeholder="Nama bisnis"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                    />
                  </label>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Email</span>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.com"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-bold text-slate-700">Telepon</span>
                    <input
                      type="tel"
                      placeholder="+62 ..."
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                    />
                  </label>
                </div>

                <label className="mt-4 block space-y-2">
                  <span className="text-sm font-bold text-slate-700">Pesan</span>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan jenis produk, kebutuhan sertifikasi, atau kendala yang sedang Anda hadapi."
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
                  />
                </label>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 font-bold text-white transition hover:bg-teal-600"
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
