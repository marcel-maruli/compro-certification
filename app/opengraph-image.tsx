import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VSN - Konsultasi sertifikasi BPOM dan izin edar produk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ecfeff 52%, #ccfbf1 100%)",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 84px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ color: "#0f766e", fontSize: 30, fontWeight: 700, letterSpacing: 5 }}>
            VSN · VERITAS SAHABAT NUSANTARA
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, maxWidth: 950 }}>
            Konsultasi Sertifikasi BPOM &amp; Izin Edar Produk
          </div>
          <div style={{ color: "#475569", fontSize: 30, lineHeight: 1.35, maxWidth: 850 }}>
            Pendampingan untuk UMKM dan industri pangan di Indonesia.
          </div>
        </div>
        <div style={{ color: "#0f766e", fontSize: 28, fontWeight: 700 }}>
          Sertifikasi · Pelatihan · Teknologi Pangan
        </div>
      </div>
    ),
    { ...size },
  );
}
