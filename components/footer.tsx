import { BrandLogo } from "@/components/brand-logo";
import Link from "next/link";

const footerLinks = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Proses", href: "/#proses" },
  { label: "Kontak", href: "/#kontak" },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-50 bg-white">
      <div className="container py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-3">
            <Link href="/#beranda" aria-label="Kembali ke beranda">
              <BrandLogo size={44} />
            </Link>
            <p className="text-sm font-medium text-slate-500">Sahabat UMKM & Industri.</p>
          </span>

          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-teal-600">
                {item.label}
              </Link>
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
