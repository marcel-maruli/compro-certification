"use client";

import { useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#services", label: "Layanan" },
  { href: "#process", label: "Proses" },
  { href: "#contact", label: "Kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-50/80 bg-white/80 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500 shadow-lg shadow-teal-200">
              <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              CertiTrust
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-semibold text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-teal-600">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-teal-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30"
            >
              Konsultasi Gratis
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-100 text-slate-700 transition hover:border-teal-200 hover:bg-teal-50 md:hidden"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden border-t border-teal-50 transition-[grid-template-rows] duration-300 md:hidden",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0">
            <nav className="flex flex-col gap-3 py-4 text-sm font-semibold text-slate-600">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
