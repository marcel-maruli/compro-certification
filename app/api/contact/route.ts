import { NextResponse } from "next/server";

const recipient = "veritassahabatnusantara@gmail.com";

async function sendWithRetry(url: string, options: RequestInit) {
  let lastError: unknown;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await fetch(url, { ...options, cache: "no-store" });
    } catch (error) {
      lastError = error;
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
      }
    }
  }

  throw lastError;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data.name ?? "").trim();
    const company = String(data.company ?? "").trim();
    const email = String(data.email ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY belum dikonfigurasi.");
      return NextResponse.json(
        { error: "Konfigurasi email belum lengkap." },
        { status: 500 },
      );
    }

    const emailResponse = await sendWithRetry("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: [recipient],
        reply_to: email,
        subject: `Konsultasi Sertifikasi Produk - ${name}`,
        text: [
          "Halo tim Veritas Sahabat Nusantara,",
          "",
          "Saya ingin berkonsultasi mengenai sertifikasi produk dengan detail berikut:",
          `Nama: ${name}`,
          `Perusahaan: ${company}`,
          `Email: ${email}`,
          `Telepon: ${phone}`,
          "",
          "Pesan:",
          message,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      const resendError = await emailResponse.json().catch(() => null);
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: resendError?.message ?? "Email gagal dikirim oleh Resend." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Tidak dapat terhubung ke layanan email. Silakan coba lagi." },
      { status: 503 },
    );
  }
}
