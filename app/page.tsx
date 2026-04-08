"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

// Dynamic import for DriftSequence to avoid SSR canvas issues
const DriftSequence = dynamic(() => import("@/components/DriftSequence"), {
  ssr: false,
  loading: () => (
    <div
      className="fixed inset-0 bg-[#080808] flex items-center justify-center z-[200]"
      aria-busy="true"
      aria-label="Loading cinematic experience"
    >
      <p className="text-[0.6rem] tracking-[0.4em] text-zinc-700 uppercase">
        Initializing...
      </p>
    </div>
  ),
});

// ─── SERVICE ICONS ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "ecu-remap",
    label: "ECU Remap",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "tuning",
    label: "Tuning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "inspection",
    label: "Inspection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    id: "kaki-kaki",
    label: "Kaki-kaki",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    id: "body-paint",
    label: "Body & Paint",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

// ─── TESTIMONIALS ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Budi Santoso",
    car: "Toyota Camry 2020",
    rating: 5,
    text: "ECU remap di FT Garage hasilnya luar biasa! Tenaga mesin terasa lebih responsif dan konsumsi BBM lebih efisien. Mekaniknya juga sangat profesional dan transparan soal harga.",
    date: "2 minggu lalu",
  },
  {
    id: "t2",
    name: "Rizky Pratama",
    car: "Honda Civic Type R",
    rating: 5,
    text: "Sudah langganan di sini untuk tune up rutin. Bengkelnya bersih, mekaniknya berpengalaman, dan harganya sangat worth it. Tidak perlu khawatir kendaraan ditambah-tambahin masalah.",
    date: "1 bulan lalu",
  },
  {
    id: "t3",
    name: "Dewi Rahayu",
    car: "Mitsubishi Xpander",
    rating: 5,
    text: "Pertama kali coba, langsung cocok. AC mobilku yang tadinya kurang dingin sekarang sudah perfect. Pelayanannya cepat dan timnya sangat ramah. Recommended banget!",
    date: "3 minggu lalu",
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "4.9⭐", label: "Rating Google" },
  { value: "537+", label: "Ulasan Pelanggan" },
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "30 Hari", label: "Garansi Servis" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="relative bg-[#080808] min-h-screen" id="main-content">
      <Header />

      {/* Scroll to experience hint */}
      <motion.div
        className="fixed top-28 left-1/2 -translate-x-1/2 z-[80] flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-[0.55rem] tracking-[0.5em] uppercase text-zinc-700">
          Scroll to Experience
        </p>
      </motion.div>

      {/* ── CANVAS SCROLLYTELLING ── */}
      <DriftSequence />

      {/* ── HERO CLIMAX — ENGINE IS OUR PASSION ── */}
      <section className="hero-climax" id="hero-climax" aria-label="FT Garage Hero">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Big Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              <p className="label-gold mb-6">Bengkel Spesialis Surabaya</p>
              <h1 className="hero-climax-text mb-6">
                ENGINE<br />
                IS OUR<br />
                <span className="gold">PASSION.</span>
              </h1>
              <p className="hero-tag mb-10">#itsaroadlife</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="badge badge-gold">✓ Garansi 30 Hari</span>
                <span className="badge">✓ Mekanik Bersertifikat</span>
                <span className="badge">✓ Est. 2014</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/booking" className="btn-gold" id="climax-booking-btn">
                  <span>Booking Servis Sekarang</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/6281216669089"
                  className="btn-wa"
                  id="climax-wa-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Service Quick Icons */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            >
              <p className="label-sm mb-6">Layanan Kami</p>
              <div className="grid grid-cols-3 gap-3">
                {SERVICES.map((svc, i) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                  >
                    <Link
                      href="/services"
                      className="service-icon-card"
                      id={`home-service-${svc.id}`}
                      aria-label={`Layanan ${svc.label}`}
                    >
                      <div className="service-icon-wrap">{svc.icon}</div>
                      <span className="service-icon-label">{svc.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-[#0D0D0D] py-16 px-6" aria-label="Statistik Bengkel">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <p
                  className="gold-glow-text mb-2"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    fontWeight: 900,
                    color: "var(--gold)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="label-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIALS ── */}
      <section className="py-24 px-6 bg-[#080808]" id="testimonials" aria-label="Testimoni Pelanggan">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-3">Kata Mereka</p>
            <h2 className="heading-lg text-white mb-4">Apa Kata Pelanggan<br />Kami?</h2>
            <div className="gold-line" />
          </motion.div>

          {/* Google Rating Highlight */}
          <motion.div
            className="flex items-center gap-6 mb-12 p-6 card-glass"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center">
              <p className="text-5xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>4.9</p>
              <p className="text-yellow-400 text-lg mt-1">★★★★★</p>
              <p className="label-sm mt-1">537 Ulasan</p>
            </div>
            <div className="h-16 w-px bg-zinc-800" />
            <div>
              <p className="text-white font-semibold mb-1">Bengkel Mobil FT Garage</p>
              <p className="text-zinc-500 text-sm">Kedung Asem, Surabaya</p>
              <a
                href="https://maps.app.goo.gl/PPwvccxK6iUJuZcp7"
                target="_blank"
                rel="noopener noreferrer"
                id="google-maps-link"
                className="text-[var(--gold)] text-xs mt-2 inline-block hover:underline"
              >
                Lihat di Google Maps →
              </a>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                className="testimonial-card"
                id={`testimonial-${t.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="label-sm mt-1">{t.car}</p>
                  </div>
                  <p className="text-zinc-700 text-xs">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WA CTA BANNER ── */}
      <section className="py-16 px-6 bg-[#0D0D0D]" aria-label="Hubungi via WhatsApp">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-[rgba(201,168,76,0.2)] bg-[var(--gold-glow)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="label-gold mb-2">Ada Masalah dengan Kendaraan Anda?</p>
              <h3 className="heading-md text-white">Konsultasi Gratis<br />via WhatsApp</h3>
            </div>
            <a
              href="https://wa.me/6281216669089?text=Halo%20FT%20Garage%2C%20saya%20ingin%20konsultasi%20mengenai%20kendaraan%20saya."
              className="btn-wa flex-shrink-0"
              id="home-wa-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat Sekarang</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
