"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const FILTERS = ["Semua", "Mesin", "Kaki-kaki", "Body & Paint", "Kelistrikan"];

const GALLERY_ITEMS = [
  { id: "g1", category: "Mesin", title: "ECU Remap — Honda Civic", before: null, tag: "After" },
  { id: "g2", category: "Body & Paint", title: "Full Repaint — Toyota Camry", before: null, tag: "After" },
  { id: "g3", category: "Mesin", title: "Engine Bay Detailing", before: null, tag: "After" },
  { id: "g4", category: "Kaki-kaki", title: "Spooring & Balancing — BMW", before: null, tag: "Process" },
  { id: "g5", category: "Kelistrikan", title: "Scan ECU — Mitsubishi Pajero", before: null, tag: "Process" },
  { id: "g6", category: "Body & Paint", title: "Perbaikan Penyok — Innova", before: null, tag: "Before / After" },
  { id: "g7", category: "Mesin", title: "Tune Up — Avanza", before: null, tag: "Process" },
  { id: "g8", category: "Kaki-kaki", title: "Ganti Shockbreaker — Jazz", before: null, tag: "After" },
  { id: "g9", category: "Kelistrikan", title: "Service AC — Fortuner", before: null, tag: "Process" },
];

// Cinematic placeholder colors by category
const CATEGORY_COLORS: Record<string, string> = {
  "Mesin": "linear-gradient(135deg, #1a1a1a 0%, #2a1f0a 100%)",
  "Kaki-kaki": "linear-gradient(135deg, #0d0d0d 0%, #0a1a1a 100%)",
  "Body & Paint": "linear-gradient(135deg, #1a0d0d 0%, #2a1500 100%)",
  "Kelistrikan": "linear-gradient(135deg, #0d0d1a 0%, #0a0a2a 100%)",
};

const VIDEOS = [
  {
    id: "v1",
    title: "Tips: Kapan Harus Ganti Oli?",
    duration: "3:24",
    thumb: "Mesin",
  },
  {
    id: "v2",
    title: "Cara Baca Kode Error di OBD2",
    duration: "5:12",
    thumb: "Kelistrikan",
  },
  {
    id: "v3",
    title: "Spooring vs Balancing — Apa Bedanya?",
    duration: "4:07",
    thumb: "Kaki-kaki",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <main className="relative bg-[#080808] min-h-screen" id="gallery-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Galeri">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="label-gold mb-4">Hasil Pekerjaan Kami</p>
            <h1 className="heading-xl text-white mb-6">
              Galeri &<br />
              <span style={{ color: "var(--gold)" }}>Portofolio</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Setiap kendaraan yang kami tangani adalah bukti komitmen kami terhadap kualitas dan presisi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 md:px-6 py-6 md:py-8" aria-label="Filter galeri">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                onClick={() => setActive(f)}
                className="px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  background: active === f ? "var(--gold)" : "transparent",
                  color: active === f ? "#080808" : "var(--text-muted)",
                  border: active === f ? "1px solid var(--gold)" : "1px solid var(--accent-line)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-6 pb-12 md:pb-16" aria-label="Grid galeri">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Placeholder visual */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: CATEGORY_COLORS[item.category] }}
                />

                {/* Gold grid decorative */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(201,168,76,0.3) 39px, rgba(201,168,76,0.3) 40px)",
                  }}
                />

                {/* Icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 border flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <svg className="w-8 h-8" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="text-[0.55rem] tracking-widest uppercase mb-2 inline-block px-2 py-0.5"
                    style={{
                      background: "var(--gold-glow)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "var(--gold)",
                    }}
                  >
                    {item.tag}
                  </span>
                  <p
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0D0D0D]" aria-label="Video Tips">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-3">Tips dari Mekanik</p>
            <h2 className="heading-lg text-white mb-4">Video Edukasi</h2>
            <div className="gold-line" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEOS.map((v, i) => (
              <motion.div
                key={v.id}
                id={`video-${v.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                {/* Thumb */}
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: "16/9", background: CATEGORY_COLORS[v.thumb] }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--gold)" }}
                    >
                      <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[0.6rem] text-white font-mono">
                    {v.duration}
                  </div>
                </div>
                <p
                  className="text-white text-sm font-semibold group-hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {v.title}
                </p>
                <p className="text-zinc-500 text-xs mt-1">LQ Garage · Tips Otomotif</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 text-center" aria-label="CTA">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-4">Kendaraan Anda berikutnya?</p>
            <h2 className="heading-lg text-white mb-8">Jadilah Bagian<br />dari Portofolio Kami</h2>
            <Link href="/booking" className="btn-gold" id="gallery-booking-cta">
              <span>Booking Sekarang</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
