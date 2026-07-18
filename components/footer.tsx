import { ShieldCheck } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Layanan" },
  { href: "#process", label: "Proses" },
  { href: "#contact", label: "Kontak" },
];

export function Footer() {
  return (
    <footer className="border-t border-teal-50 bg-white">
      <div className="container py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500 shadow-lg shadow-teal-200">
              <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-slate-900">CertiTrust</p>
              <p className="text-sm text-slate-500">Wujudkan Produk Aman Dengan CertiTrust</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-teal-600">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-teal-50 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CertiTrust. All rights reserved.</p>
          <p>Solusi sertifikasi yang modern, ramah, dan terpercaya.</p>
        </div>
      </div>
    </footer>
  );
}
