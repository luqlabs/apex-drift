"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const TEAM = [
  {
    id: "owner",
    name: "Fandi Tri",
    role: "Owner & Head Mechanic",
    expertise: "ECU Remap, Engine Tuning",
    experience: "12+ Tahun",
    initial: "LQ",
  },
  {
    id: "mech1",
    name: "Rudi Hartono",
    role: "Senior Mechanic",
    expertise: "Mesin & Kaki-kaki",
    experience: "9 Tahun",
    initial: "RH",
  },
  {
    id: "mech2",
    name: "Bagas Pratama",
    role: "Mechanic Specialist",
    expertise: "Kelistrikan & AC",
    experience: "7 Tahun",
    initial: "BP",
  },
  {
    id: "mech3",
    name: "Danu Wijaya",
    role: "Body & Paint Specialist",
    expertise: "Pengecatan & Detailing",
    experience: "8 Tahun",
    initial: "DW",
  },
];

const STATS = [
  { value: "2014", label: "Tahun Berdiri" },
  { value: "4.9⭐", label: "Rating Google" },
  { value: "5.000+", label: "Kendaraan Ditangani" },
  { value: "537+", label: "Ulasan Pelanggan" },
];

const FACILITIES = [
  { icon: "❄️", name: "Ruang Tunggu AC", desc: "Nyaman ber-AC dengan sofa dan TV" },
  { icon: "☕", name: "Kopi & Minuman", desc: "Tersedia kopi dan minuman gratis" },
  { icon: "📶", name: "WiFi Gratis", desc: "Koneksi internet cepat selama menunggu" },
  { icon: "🔍", name: "Estimasi Transparan", desc: "Laporan biaya sebelum pengerjaan dimulai" },
  { icon: "📸", name: "Dokumentasi Servis", desc: "Foto kondisi kendaraan sebelum & sesudah" },
  { icon: "🅿️", name: "Area Parkir Luas", desc: "Parkir nyaman termasuk untuk kendaraan besar" },
];

const MILESTONES = [
  { year: "2014", event: "LQ Garage berdiri di Kedung Asem, Surabaya" },
  { year: "2017", event: "Mulai spesialisasi ECU Remap & Engine Tuning" },
  { year: "2020", event: "Pindah ke lokasi baru yang lebih besar" },
  { year: "2022", event: "Meraih rating 4.9 ⭐ di Google Maps" },
  { year: "2024", event: "Melayani lebih dari 5.000 kendaraan" },
];

export default function AboutPage() {
  return (
    <main className="relative bg-[#080808] min-h-screen" id="about-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Tentang LQ Garage">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="label-gold mb-4">Mengenal Kami Lebih Dekat</p>
              <h1 className="heading-xl text-white mb-6">
                Tentang<br />
                <span style={{ color: "var(--gold)" }}>LQ Garage</span>
              </h1>
              <div className="gold-line mb-6" />
              <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                Sejak 2014, kami hadir untuk menjadi bengkel kepercayaan warga Surabaya. Kami percaya bahwa kejujuran, transparansi, dan keahlian adalah fondasi pelayanan terbaik.
              </p>
            </motion.div>

            {/* Stats Quick */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 border border-[var(--accent-line)] text-center"
                >
                  <p
                    className="text-3xl font-black mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "var(--gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="label-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#0D0D0D]" aria-label="Visi dan Misi">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="label-gold block mb-4">01</span>
              <h2 className="heading-md text-white mb-6">Visi Kami</h2>
              <div className="gold-line mb-6" />
              <p className="text-zinc-400 text-sm leading-relaxed">
                Menjadi bengkel mobil paling terpercaya di Surabaya, yang dikenal bukan hanya karena keahlian teknisnya, tapi juga karena kejujuran dan standar pelayanan yang konsisten tinggi.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="label-gold block mb-4">02</span>
              <h2 className="heading-md text-white mb-6">Misi Kami</h2>
              <div className="gold-line mb-6" />
              <ul className="space-y-4">
                {[
                  "Memberikan estimasi biaya yang jujur dan transparan sebelum pengerjaan dimulai",
                  "Menggunakan suku cadang berkualitas dengan garansi servis 30 hari",
                  "Terus meningkatkan keahlian tim mekanik melalui pelatihan rutin",
                  "Menciptakan pengalaman servis yang nyaman dan bebas kekhawatiran bagi pelanggan",
                ].map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-400">
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span>
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-20 px-4 md:px-6" aria-label="Tim Mekanik">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-3">Orang-orang di Balik Kunci Pas</p>
            <h2 className="heading-lg text-white mb-4">Tim Mekanik Kami</h2>
            <div className="gold-line" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                id={`team-${member.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card-dark group text-center p-6"
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 mx-auto mb-5 flex items-center justify-center border transition-all duration-300 group-hover:border-[var(--gold)]"
                  style={{
                    background: "linear-gradient(135deg, #1a1500, #2a1f00)",
                    borderColor: "var(--accent-line)",
                  }}
                >
                  <span
                    className="font-black text-xl"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "var(--gold)" }}
                  >
                    {member.initial}
                  </span>
                </div>

                <h3
                  className="text-white font-bold text-sm mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="label-gold text-[0.55rem] mb-3">{member.role}</p>
                <div className="h-px bg-[var(--accent-line)] mb-3" />
                <p className="text-zinc-500 text-xs mb-2">{member.expertise}</p>
                <p className="text-zinc-600 text-xs">{member.experience} pengalaman</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#0D0D0D]" aria-label="Perjalanan LQ Garage">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-3">Jejak Langkah Kami</p>
            <h2 className="heading-lg text-white mb-4">Perjalanan LQ Garage</h2>
            <div className="gold-line" />
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div
              className="absolute left-[4.5rem] top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
            />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-8 items-start"
                >
                  <div
                    className="w-16 flex-shrink-0 font-black text-sm text-right"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "var(--gold)" }}
                  >
                    {m.year}
                  </div>
                  {/* Dot */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1 relative z-10"
                    style={{ background: "var(--gold)", border: "2px solid #080808" }}
                  />
                  <p className="text-zinc-400 text-sm leading-relaxed pt-px">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 md:py-20 px-4 md:px-6" aria-label="Fasilitas Bengkel">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-3">Kenyamanan Anda Prioritas Kami</p>
            <h2 className="heading-lg text-white mb-4">Fasilitas Kami</h2>
            <div className="gold-line" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((f, i) => (
              <motion.div
                key={f.name}
                id={`facility-${f.name.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-dark p-6 flex gap-4 items-start"
              >
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3
                    className="text-white font-semibold text-sm mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {f.name}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#0D0D0D] text-center" aria-label="CTA">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-4">Bergabung bersama 537+ pelanggan kami</p>
            <h2 className="heading-lg text-white mb-8">Percayakan Kendaraan<br />Anda pada Kami</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-gold" id="about-booking-cta">
                <span>Booking Servis Sekarang</span>
              </Link>
              <Link href="/contact" className="btn-outline" id="about-contact-cta">
                <span>Lihat Lokasi</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
