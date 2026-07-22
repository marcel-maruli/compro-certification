"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda" },
  { label: "Tentang" },
  { label: "Layanan" },
  { label: "Proses" },
  { label: "Kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.18)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <span className="flex items-center gap-3">
            <BrandLogo compact size={44} />
          </span>

          <nav className="hidden items-center gap-10 text-sm font-semibold text-slate-600 md:flex">
            {navItems.map((item) => (
              <span key={item.label} className="transition-colors hover:text-teal-600">
                {item.label}
              </span>
            ))}
          </nav>

          <div className="hidden md:block">
            <span
              className="inline-flex items-center rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/30"
            >
              Konsultasi Gratis
            </span>
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
            <nav className="flex flex-col gap-3 px-4 py-4 text-sm font-semibold text-slate-600 sm:px-5">
              {navItems.map((item) => (
                <span
                  key={item.label}
                  className="rounded-2xl px-4 py-3 transition hover:bg-teal-50 hover:text-teal-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </span>
              ))}
              <span
                className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-teal-600"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
              </span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
