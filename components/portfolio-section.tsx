"use client";

import Image, { type StaticImageData } from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import antibioticImage from "@/assets/doYouKnow/antibiotic.jpeg";
import frozenFoodImage from "@/assets/doYouKnow/frozen-food.jpeg";
import instantNoodleImage from "@/assets/doYouKnow/instant-noodle.jpeg";
import modulesImage from "@/assets/modules.jpeg";
import omegaEggImage from "@/assets/doYouKnow/omega-egg.jpeg";
import skincareImage from "@/assets/doYouKnow/skincare.jpeg";
import visionImage from "@/assets/vision.jpeg";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type GalleryItem = {
  image: StaticImageData;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  aspect: string;
};

const highlights: GalleryItem[] = [
  {
    image: antibioticImage,
    alt: "Infografik tentang penggunaan antibiotik",
    eyebrow: "Kesehatan",
    title: "Habiskan antibiotik sesuai durasi",
    description:
      "Menghentikan antibiotik terlalu cepat dapat membuat infeksi kembali dan meningkatkan risiko bakteri kebal.",
    aspect: "aspect-square",
  },
  {
    image: skincareImage,
    alt: "Infografik tentang penyimpanan skincare",
    eyebrow: "Kosmetik",
    title: "Simpan skincare jauh dari matahari",
    description:
      "Panas dan sinar matahari dapat merusak bahan aktif, memperpendek umur simpan, dan memicu iritasi kulit.",
    aspect: "aspect-square",
  },
  {
    image: instantNoodleImage,
    alt: "Infografik tentang konsumsi mie instan di Indonesia",
    eyebrow: "Pangan",
    title: "Indonesia jadi pasar mie instan terbesar ke-2 di dunia",
    description:
      "Konsumsi mie instan di Indonesia terus meningkat karena praktis, terjangkau, dan menjadi favorit berbagai generasi.",
    aspect: "aspect-square",
  },
  {
    image: omegaEggImage,
    alt: "Infografik tentang telur omega",
    eyebrow: "Pangan",
    title: "Telur omega berasal dari pakan ayam",
    description:
      "Ayam sehat yang mendapat pakan kaya omega-3 dapat menghasilkan telur dengan kandungan omega-3 lebih tinggi.",
    aspect: "aspect-square",
  },
  {
    image: frozenFoodImage,
    alt: "Infografik tentang daya simpan frozen food",
    eyebrow: "Teknologi pangan",
    title: "Frozen food dapat awet tanpa pengawet",
    description:
      "Sterilisasi, pengemasan hermetis, dan pembekuan cepat membantu menjaga keamanan serta daya simpan produk.",
    aspect: "aspect-square",
  },
];

const materials: GalleryItem[] = [
  {
    image: visionImage,
    alt: "Logo dan visi PT Veritas Sahabat Nusantara",
    eyebrow: "Visi VSN",
    title: "",
    description:
      "Membangun percepatan pertumbuhan ekonomi dengan kepatuhan regulasi dan persaingan global.",
    aspect: "aspect-[4/5]",
  },
  {
    image: modulesImage,
    alt: "Poster modul pelatihan diversifikasi produk",
    eyebrow: "Modul pelatihan",
    title: "Diversifikasi produk & kepatuhan izin edar",
    description:
      "Tahap pertama berfokus pada persiapan dokumen dan standar sarana, dilengkapi pelatihan, post-test, serta sertifikasi Registration Officer.",
    aspect: "aspect-square",
  },
];

const allItems = [...highlights, ...materials];

function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group overflow-hidden rounded-[1.75rem] border border-teal-50 bg-white text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className={cn("relative overflow-hidden", item.aspect)}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
          {item.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
        <span className="mt-4 inline-flex text-sm font-bold text-teal-700">
          Klik untuk memperbesar
        </span>
      </div>
    </button>
  );
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const activeItem = useMemo(() => allItems[activeIndex], [activeIndex]);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomOpen]);

  const openItem = (index: number) => {
    setActiveIndex(index);
    setZoomScale(1);
    setZoomOpen(true);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container space-y-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">
              Highlights
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Insight produk yang aman dan informatif
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pelajari fakta penting seputar pangan, kosmetik, dan kesehatan dari materi edukasi VSN.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <GalleryCard item={item} onOpen={() => openItem(index)} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-[2.5rem] bg-slate-50/80 p-6 sm:p-8">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600">
                Materi VSN
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                Visi dan pelatihan untuk produk yang siap berkembang
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {materials.map((item, index) => (
                <GalleryCard
                  key={item.title}
                  item={item}
                  onOpen={() => openItem(highlights.length + index)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {zoomOpen && isMounted
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label={`Preview: ${activeItem.title}`}
              onClick={() => setZoomOpen(false)}
            >
              <div
                className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-end gap-2 border-b border-slate-100 px-5 py-4 sm:px-6">
                  <button type="button" onClick={() => setZoomScale((value) => Math.max(1, Number((value - 0.15).toFixed(2))))} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700" aria-label="Zoom out"><Minus className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setZoomScale(1)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Reset</button>
                  <button type="button" onClick={() => setZoomScale((value) => Math.min(3, Number((value + 0.15).toFixed(2))))} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700" aria-label="Zoom in"><Plus className="h-4 w-4" /></button>
                  <button type="button" onClick={() => setZoomOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700" aria-label="Close preview"><X className="h-4 w-4" /></button>
                </div>
                <div className="relative h-[70vh] bg-slate-100">
                  <div className="absolute inset-0 overflow-auto">
                    <div className="flex h-full min-h-full items-center justify-center p-6">
                      <div
                        className="relative h-full w-full max-w-[980px] transition-transform duration-200 ease-out"
                        style={{ transform: `scale(${zoomScale})` }}
                      >
                        <Image src={activeItem.image} alt={activeItem.alt} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 980px" priority />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
