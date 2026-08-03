import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { SeoContentSection } from "@/components/seo-content-section";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Veritas Sahabat Nusantara",
  alternateName: "VSN",
  url: siteUrl,
  email: "veritassahabatnusantara@gmail.com",
  description:
    "Konsultasi sertifikasi, pelatihan, kepatuhan BPOM, dan pendampingan produk pangan untuk UMKM dan industri.",
  areaServed: "ID",
  serviceType: [
    "Sertifikasi produk",
    "Pelatihan Registration Officer",
    "Kepatuhan BPOM",
    "Konsultasi teknologi pangan",
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
