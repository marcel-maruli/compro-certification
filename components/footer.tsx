import { BrandLogo } from "@/components/brand-logo";

const footerLinks = [
  { label: "Tentang" },
  { label: "Layanan" },
  { label: "Proses" },
  { label: "Kontak" },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-50 bg-white">
      <div className="container py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-3">
            <BrandLogo size={44} />
            <p className="text-sm font-medium text-slate-500">Sahabat UMKM & Industri.</p>
          </span>

          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            {footerLinks.map((item) => (
              <span key={item.label} className="transition hover:text-teal-600">
                {item.label}
              </span>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-teal-50 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 VSN. All rights reserved.</p>
          <p>Solusi sertifikasi yang modern, ramah, dan terpercaya.</p>
        </div>
      </div>
    </footer>
  );
}
