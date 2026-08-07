import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";

import "./globals.css";

const siteUrl = "https://versana.id";

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
    default: "Jasa Konsultan Sertifikasi BPOM dan Izin Edar Produk | VSN",
    template: "%s | Veritas Sahabat Nusantara",
  },
  description:
    "Konsultan sertifikasi BPOM, izin edar, review label, dan pelatihan Registration Officer untuk UMKM dan industri pangan di Indonesia.",
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
  applicationName: "Veritas Sahabat Nusantara",
  authors: [{ name: "Veritas Sahabat Nusantara" }],
  creator: "Veritas Sahabat Nusantara",
  publisher: "Veritas Sahabat Nusantara",
  category: "business",
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: "/icon.jpeg", type: "image/jpeg" }],
    apple: "/icon.jpeg",
  },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Veritas Sahabat Nusantara",
    title: "Jasa Konsultan Sertifikasi BPOM dan Izin Edar Produk | VSN",
    description:
      "Pendampingan sertifikasi BPOM, izin edar, review label, dan pelatihan Registration Officer untuk UMKM dan industri.",
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VSN - Konsultasi sertifikasi BPOM dan izin edar produk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Konsultan Sertifikasi BPOM dan Izin Edar Produk | VSN",
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
