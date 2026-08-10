import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { SeoContentSection } from "@/components/seo-content-section";
import { faqs } from "@/components/seo-content-section";
import { services } from "@/lib/services";

const siteUrl = "https://versana.id";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "Veritas Sahabat Nusantara",
      alternateName: ["VSN", "Versana"],
      url: siteUrl,
      logo: `${siteUrl}/icon.jpeg`,
      image: `${siteUrl}/opengraph-image`,
      email: "veritassahabatnusantara@gmail.com",
      telephone: "+62-812-9907-2452",
      description:
        "Konsultasi sertifikasi BPOM, izin edar, pelatihan, dan pendampingan produk pangan untuk UMKM dan industri.",
      areaServed: { "@type": "Country", name: "Indonesia" },
      address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", telephone: "+62-812-9907-2452", availableLanguage: ["id", "en"] },
      serviceType: ["Sertifikasi produk", "Pelatihan Registration Officer", "Kepatuhan BPOM", "Konsultasi teknologi pangan"],
      knowsAbout: ["BPOM", "izin edar", "teknologi pangan", "keamanan pangan", "registrasi produk"],
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Veritas Sahabat Nusantara", alternateName: "VSN", publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "id-ID" },
    ...services.map((service) => ({ "@type": "Service", provider: { "@id": `${siteUrl}/#organization` }, serviceType: service.title, name: service.title, description: service.description, areaServed: { "@type": "Country", name: "Indonesia" }, url: `${siteUrl}/layanan/${service.slug}` })),
    { "@type": "FAQPage", "@id": `${siteUrl}/#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <SeoContentSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
