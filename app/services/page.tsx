"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  {
    id: "mekanikal",
    icon: "🔧",
    title: "Mekanikal & Mesin",
    description: "Penanganan menyeluruh untuk komponen mesin kendaraan Anda.",
    services: [
      { name: "Tune Up", desc: "Servis ringan rutin: busi, filter udara, injektor cleaning." },
      { name: "Ganti Oli & Filter", desc: "Oli mesin, transmisi, gardan — semua jenis kendaraan." },
      { name: "Turun Mesin (Overhaul)", desc: "Pembongkaran & rekondisi mesin secara menyeluruh." },
      { name: "ECU Remap", desc: "Optimasi mapping ECU untuk tenaga & efisiensi BBM maksimal." },
      { name: "Injeksi & Karburator", desc: "Cleaning & kalibrasi sistem bahan bakar." },
    ],
  },
  {
    id: "kaki-kaki",
    icon: "🛞",
    title: "Kaki-kaki & Suspensi",
    description: "Kenyamanan dan keamanan berkendara dimulai dari roda.",
    services: [
      { name: "Spooring", desc: "Penyesuaian sudut roda agar lurus dan stabil." },
      { name: "Balancing", desc: "Penyeimbangan roda untuk menghilangkan getaran." },
      { name: "Shockbreaker", desc: "Ganti & servis shock absorber semua merk." },
      { name: "Rotasi Ban", desc: "Rotasi ban untuk pemakaian yang lebih merata." },
      { name: "Tie Rod & Ball Joint", desc: "Pengecekan & penggantian komponen kemudi." },
    ],
  },
  {
    id: "kelistrikan",
    icon: "⚡",
    title: "Kelistrikan & AC",
    description: "Diagnosa dan perbaikan sistem elektrikal & pendingin kendaraan.",
    services: [
      { name: "Scan ECU / OBD2", desc: "Pembacaan kode error & diagnosa komputer kendaraan." },
      { name: "Service AC", desc: "Isi freon, cleaning evaporator, ganti kompresor." },
      { name: "Ganti Aki", desc: "Penggantian baterai semua kapasitas & merk." },
      { name: "Kelistrikan Bodi", desc: "Perbaikan lampu, sensor, klakson, power window, dll." },
      { name: "Alarm & Audio", desc: "Instalasi alarm, head unit, dan aksesori kelistrikan." },
    ],
  },
  {
    id: "body-paint",
    icon: "🎨",
    title: "Body & Paint",
    description: "Kembalikan tampilan eksterior kendaraan Anda seperti baru.",
    services: [
      { name: "Poles / Detailing", desc: "Poles bodi, coating, dan proteksi cat." },
      { name: "Perbaikan Penyok", desc: "Ketok magic & dent removal tanpa cat ulang." },
      { name: "Pengecatan Partial", desc: "Cat ulang panel atau bagian tertentu, warna matched." },
      { name: "Pengecatan Full", desc: "Cat ulang total satu kendaraan, oven finish." },
      { name: "Anti Karat", desc: "Aplikasi lapisan anti karat bagian bawah kendaraan." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-[#080808] min-h-screen" id="services-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Halaman Layanan">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="label-gold mb-4">Apa yang Kami Kerjakan</p>
            <h1 className="heading-xl text-white mb-6">
              Layanan<br />
              <span style={{ color: "var(--gold)" }}>Kami</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Dari tune up harian hingga ECU remap performa tinggi — kami menangani semua kebutuhan kendaraan Anda dengan standar presisi tertinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 px-4 md:px-6" aria-label="Kategori Layanan">
        <div className="max-w-screen-xl mx-auto space-y-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.id}
              id={`service-cat-${cat.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: ci * 0.05 }}
              className="border border-[var(--accent-line)] bg-[#0D0D0D] overflow-hidden"
            >
              {/* Category Header */}
              <div className="p-8 border-b border-[var(--accent-line)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="heading-md text-white">{cat.title}</h2>
                    <p className="text-zinc-500 text-sm mt-1">{cat.description}</p>
                  </div>
                </div>
                <Link
                  href={`/booking?service=${cat.id}`}
                  className="btn-gold flex-shrink-0"
                  id={`book-${cat.id}`}
                  style={{ padding: "0.65rem 1.5rem" }}
                >
                  <span>Booking Layanan Ini</span>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Service Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--accent-line)]">
                {cat.services.map((svc, si) => (
                  <motion.div
                    key={svc.name}
                    className="p-6 bg-[#0D0D0D] hover:bg-[#141414] transition-colors duration-200 group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.05 }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-1 h-full min-h-[2rem] flex-shrink-0 mt-1"
                        style={{ background: "var(--gold)", width: "2px" }}
                      />
                      <div>
                        <h3
                          className="text-white font-semibold text-sm mb-1 group-hover:text-[var(--gold)] transition-colors"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {svc.name}
                        </h3>
                        <p className="text-zinc-500 text-xs leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6" aria-label="CTA Booking">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-4">Tidak yakin layanan apa yang dibutuhkan?</p>
            <h2 className="heading-lg text-white mb-8">Konsultasi Gratis<br />dengan Mekanik Kami</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-gold" id="services-booking-btn">
                <span>Booking Online Sekarang</span>
              </Link>
              <a
                href="https://wa.me/6289998887776?text=Halo%20LQ%20Garage%2C%20saya%20butuh%20konsultasi%20servis%20kendaraan."
                className="btn-wa"
                id="services-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
