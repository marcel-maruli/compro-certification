import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

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
    default: "Konsultasi Sertifikasi BPOM & Izin Edar Produk | VSN",
    template: "%s | VSN",
  },
  description:
    "Veritas Sahabat Nusantara membantu UMKM dan industri menyiapkan sertifikasi BPOM, izin edar, review label, dan pelatihan Registration Officer dengan proses yang jelas.",
  keywords: [
    "sertifikasi BPOM",
    "izin edar produk pangan",
    "konsultan BPOM",
    "pendampingan BPOM",
    "review label produk",
    "pelatihan Registration Officer",
    "teknologi pangan",
    "konsultasi UMKM pangan",
  ],
  applicationName: "VSN - Veritas Sahabat Nusantara",
  authors: [{ name: "Veritas Sahabat Nusantara" }],
  creator: "Veritas Sahabat Nusantara",
  publisher: "Veritas Sahabat Nusantara",
  category: "business",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Veritas Sahabat Nusantara",
    title: "Konsultasi Sertifikasi BPOM & Izin Edar Produk | VSN",
    description:
      "Pendampingan sertifikasi BPOM, izin edar, review label, dan pelatihan Registration Officer untuk UMKM dan industri.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VSN - Konsultasi sertifikasi BPOM dan izin edar produk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konsultasi Sertifikasi BPOM & Izin Edar Produk | VSN",
    description:
      "Pendampingan sertifikasi BPOM, izin edar, review label, dan pelatihan Registration Officer untuk UMKM dan industri.",
    images: ["/opengraph-image"],
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
