import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans.ttf",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CertiTrust | Wujudkan Produk Aman Dengan CertiTrust",
  description:
    "Company profile CertiTrust untuk layanan sertifikasi BPOM, standardisasi, dan konsultasi produk aman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
