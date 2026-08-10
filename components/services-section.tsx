import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-28 bg-slate-50/70 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Layanan VSN"
          title="Layanan yang dirancang untuk mempercepat kelayakan produk"
          description="Dari review awal sampai pendampingan sertifikasi, VSN menjaga proses tetap sederhana, terukur, dan mudah diikuti oleh tim Anda."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
            <ServiceCard {...service} description={service.shortDescription} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
