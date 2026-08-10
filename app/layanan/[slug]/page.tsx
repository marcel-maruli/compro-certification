import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getService, services } from "@/lib/services";

const siteUrl = "https://versana.id";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  return {
    title: `${service.title} | Konsultan BPOM`,
    description: service.description,
    keywords: [service.title, "konsultan BPOM", "sertifikasi produk", "izin edar produk"],
    alternates: { canonical: `${siteUrl}/layanan/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/layanan/${service.slug}`,
      title: `${service.title} | Veritas Sahabat Nusantara`,
      description: service.description,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);

  if (!service) {
    return null;
  }

  const Icon = service.icon;
  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteUrl}/layanan/${service.slug}`,
    provider: { "@type": "ProfessionalService", name: "Veritas Sahabat Nusantara", url: siteUrl },
    areaServed: { "@type": "Country", name: "Indonesia" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.09),transparent_40%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.11),transparent_28%)]" />
          <div className="container">
            <Link href="/#layanan" className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700">
              ← Kembali ke semua layanan
            </Link>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-teal-50 text-teal-600 shadow-sm">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-teal-600">Layanan VSN</p>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{service.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{service.description}</p>
                <Link href="/#kontak" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition hover:bg-teal-600">
                  Konsultasikan kebutuhan Anda <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>

              <Reveal delay={100} className="rounded-[2.5rem] border border-teal-50 bg-white p-8 shadow-card sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">Yang kami bantu</p>
                <ul className="mt-6 space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-base font-semibold text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 py-20 md:py-28">
          <div className="container">
            <SectionHeading align="center" eyebrow="Hasil yang dituju" title="Persiapan yang lebih tenang dan terukur" description="Kami menyederhanakan bagian yang kompleks agar Anda dapat mengambil langkah berikutnya dengan lebih percaya diri." />
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
              {service.outcomes.map((outcome, index) => (
                <Reveal key={outcome} delay={index * 90} className="rounded-[2rem] border border-teal-50 bg-white p-7 shadow-card">
                  <span className="text-3xl font-extrabold text-teal-500">0{index + 1}</span>
                  <p className="mt-5 font-bold leading-7 text-slate-800">{outcome}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <SectionHeading eyebrow="Layanan terkait" title="Temukan dukungan yang melengkapi kebutuhan Anda" description="Setiap layanan dapat dipadukan sesuai tahap produk dan kesiapan tim Anda." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedServices.slice(0, 3).map((related) => {
                const RelatedIcon = related.icon;
                return <Link key={related.slug} href={`/layanan/${related.slug}`} className="group rounded-[2rem] border border-teal-50 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-teal-200">
                  <RelatedIcon className="h-8 w-8 text-teal-500" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-bold text-slate-900">{related.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{related.shortDescription}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600">Lihat layanan <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
