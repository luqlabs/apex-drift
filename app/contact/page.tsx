"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const CONTACT_INFO = [
  {
    id: "alamat",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Alamat",
    value: "Jl. Raya Kedung Asem No.99\nKedung Baruk, Kec. Rungkut\nSurabaya, Jawa Timur 60298",
    href: "https://maps.app.goo.gl/PPwvccxK6iUJuZcp7",
    linkLabel: "Buka di Google Maps →",
  },
  {
    id: "whatsapp",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "0812-1666-9089",
    href: "https://wa.me/6281216669089",
    linkLabel: "Mulai Chat →",
  },
  {
    id: "instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    label: "Instagram",
    value: "@fullthrottle_garagesby",
    href: "https://instagram.com/fullthrottle_garagesby",
    linkLabel: "Kunjungi Profil →",
  },
];

const HOURS = [
  { day: "Senin", time: "08.00 – 17.00", open: true },
  { day: "Selasa", time: "08.00 – 17.00", open: true },
  { day: "Rabu", time: "08.00 – 17.00", open: true },
  { day: "Kamis", time: "08.00 – 17.00", open: true },
  { day: "Jumat", time: "08.00 – 17.00", open: true },
  { day: "Sabtu", time: "08.00 – 16.00", open: true },
  { day: "Minggu", time: "Tutup", open: false },
];

export default function ContactPage() {
  // Today's day of week (0=Sun, 1=Mon...6=Sat)
  const todayIdx = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5]; // convert JS day to our HOURS index
  const todayHoursIdx = dayMap[todayIdx];

  return (
    <main className="relative bg-[#080808] min-h-screen" id="contact-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Kontak & Lokasi">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="label-gold mb-4">Temukan Kami</p>
            <h1 className="heading-xl text-white mb-6">
              Kontak &<br />
              <span style={{ color: "var(--gold)" }}>Lokasi</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Kami berlokasi di Jl. Raya Kedung Asem No.99, Surabaya. Kunjungi kami langsung atau hubungi via WhatsApp untuk membuat janji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 px-4 md:px-6 pb-16 md:pb-20" aria-label="Info Kontak dan Peta">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Contact Cards */}
              {CONTACT_INFO.map((c, i) => (
                <motion.div
                  key={c.id}
                  id={`contact-${c.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-dark p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                      style={{
                        borderColor: "var(--accent-line)",
                        color: "var(--gold)",
                        background: "var(--gold-glow)",
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="label-gold text-[0.55rem] mb-1">{c.label}</p>
                      <p className="text-white text-sm leading-relaxed whitespace-pre-line mb-2">{c.value}</p>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`contact-link-${c.id}`}
                        className="text-[var(--gold)] text-xs hover:underline"
                      >
                        {c.linkLabel}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Emergency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="p-5 border"
                style={{ borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)" }}
              >
                <p className="text-[0.6rem] tracking-widest uppercase text-red-400 mb-2 font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  🚨 Darurat / Derek
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                  Kendaraan Anda mogok di jalan? Hubungi kami segera untuk bantuan darurat.
                </p>
                <a
                  href="https://wa.me/6281216669089?text=DARURAT%3A%20Kendaraan%20saya%20mogok%2C%20butuh%20bantuan%20segera."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-emergency-btn"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    background: "#dc2626",
                  }}
                >
                  Hubungi Sekarang
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Map + Hours */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Google Maps Embed */}
              <div
                className="overflow-hidden border border-[var(--accent-line)]"
                style={{ height: "400px" }}
              >
                <iframe
                  title="Lokasi FT Garage Surabaya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1854932456!2d112.7582!3d-7.3278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb84d4b0b79b%3A0x98f46f8c1e4d6a3e!2sBengkel%20Mobil%20FT%20Garage%20Kedung%20Asem%20%7C%20Spesialis%20Tune%20Up%20%7C%20Remap%20Ecu!5e0!3m2!1sid!2sid!4v1712400000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="google-maps-embed"
                />
              </div>

              {/* Open in Maps CTA */}
              <a
                href="https://maps.app.goo.gl/PPwvccxK6iUJuZcp7"
                target="_blank"
                rel="noopener noreferrer"
                id="open-maps-btn"
                className="btn-gold inline-flex w-full justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Buka Navigasi di Google Maps</span>
              </a>

              {/* Jam Operasional */}
              <div className="card-dark p-6">
                <p className="label-gold mb-5">Jam Operasional</p>
                <div className="space-y-3">
                  {HOURS.map((h, i) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center py-2 border-b border-[var(--accent-line)] last:border-0"
                      style={{
                        background: i === todayHoursIdx ? "var(--gold-glow)" : "transparent",
                        marginLeft: i === todayHoursIdx ? "-1rem" : 0,
                        marginRight: i === todayHoursIdx ? "-1rem" : 0,
                        padding: i === todayHoursIdx ? "0.5rem 1rem" : "0.5rem 0",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {i === todayHoursIdx && (
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: h.open ? "var(--gold)" : "#71717a" }}
                          />
                        )}
                        <span
                          className="text-sm"
                          style={{
                            color: i === todayHoursIdx ? "#ffffff" : "var(--text-muted)",
                            fontWeight: i === todayHoursIdx ? 600 : 400,
                            fontFamily: i === todayHoursIdx ? "Montserrat, sans-serif" : "inherit",
                          }}
                        >
                          {h.day}
                          {i === todayHoursIdx && <span className="text-[var(--gold)] text-xs ml-2">(Hari ini)</span>}
                        </span>
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{
                          color: h.open ? (i === todayHoursIdx ? "var(--gold)" : "var(--text-muted)") : "#52525b",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0D0D0D]" aria-label="CTA Booking">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border"
            style={{ borderColor: "rgba(201,168,76,0.2)", background: "var(--gold-glow)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="label-gold mb-2">Siap Berkunjung?</p>
              <h3 className="heading-md text-white">Buat Janji Terlebih Dahulu<br />untuk Dilayani Lebih Cepat</h3>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Link href="/booking" className="btn-gold" id="contact-booking-cta">
                <span>Booking Online</span>
              </Link>
              <a
                href="https://wa.me/6281216669089"
                className="btn-wa"
                id="contact-wa-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat WA</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
