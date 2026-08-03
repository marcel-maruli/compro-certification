import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const plusJakartaSans = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sertifikasi BPOM, Pelatihan & Teknologi Pangan | VSN",
    template: "%s | VSN",
  },
  description:
    "Veritas Sahabat Nusantara membantu UMKM dan industri melalui sertifikasi, pelatihan, pendampingan BPOM, serta konsultasi teknologi pangan dan food technology.",
  keywords: [
    "certificate",
    "sertifikat",
    "sertifikasi",
    "pelatihan",
    "BPOM",
    "teknologi pangan",
    "food technology",
    "izin edar",
    "Registration Officer",
  ],
  applicationName: "VSN - Veritas Sahabat Nusantara",
  authors: [{ name: "Veritas Sahabat Nusantara" }],
  creator: "Veritas Sahabat Nusantara",
  publisher: "Veritas Sahabat Nusantara",
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Veritas Sahabat Nusantara",
    title: "Sertifikasi BPOM, Pelatihan & Teknologi Pangan | VSN",
    description:
      "Pendampingan sertifikasi, pelatihan kompetensi, dan kepatuhan BPOM untuk produk pangan dan industri.",
  },
  twitter: {
    card: "summary",
    title: "Sertifikasi BPOM, Pelatihan & Teknologi Pangan | VSN",
    description:
      "Pendampingan sertifikasi, pelatihan kompetensi, dan kepatuhan BPOM untuk produk pangan dan industri.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
