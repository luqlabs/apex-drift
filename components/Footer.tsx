"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FOOTER_SERVICES = [
  "ECU Remap",
  "Tune Up",
  "Kaki-kaki",
  "Kelistrikan & AC",
  "Body & Paint",
];

const FOOTER_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/gallery", label: "Galeri" },
  { href: "/blog", label: "Tips & Artikel" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
  { href: "/booking", label: "Booking Online" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer-section bg-[#080808]"
      role="contentinfo"
      aria-label="Footer situs FT Garage"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-[var(--gold)] flex items-center justify-center">
                <span
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="text-[var(--gold)] font-black text-base leading-none"
                >
                  FT
                </span>
              </div>
              <div>
                <p className="font-montserrat text-white font-black text-sm tracking-wider uppercase">
                  FT Garage
                </p>
                <p className="label-gold text-[0.55rem]">Surabaya</p>
              </div>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Bengkel spesialis tune up & ECU remap di Surabaya. Kami hadir untuk memastikan mesin kendaraan Anda bekerja pada performa terbaiknya.
            </p>

            <p className="label-gold mb-2">Engine is Our Passion</p>
            <p className="text-[var(--text-faint)] text-xs tracking-widest">#itsaroadlife</p>
          </div>

          {/* Services */}
          <div>
            <p className="label-sm mb-5">Layanan Kami</p>
            <div className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((s) => (
                <Link
                  key={s}
                  href="/services"
                  id={`footer-service-${s.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  className="text-[0.65rem] tracking-[0.15em] text-zinc-500 uppercase hover:text-[var(--gold)] transition-colors duration-200"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-sm mb-5">Navigasi</p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`footer-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[0.65rem] tracking-[0.15em] text-zinc-500 uppercase hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="label-sm mb-5">Informasi</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[0.55rem] tracking-wider text-[var(--text-faint)] uppercase mb-1">Alamat</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Jl. Raya Kedung Asem No.99<br />
                  Kedung Baruk, Rungkut<br />
                  Surabaya, Jawa Timur 60298
                </p>
              </div>
              <div>
                <p className="text-[0.55rem] tracking-wider text-[var(--text-faint)] uppercase mb-1">Jam Operasional</p>
                <p className="text-sm text-zinc-400">Senin – Jumat: 08.00 – 17.00</p>
                <p className="text-sm text-zinc-400">Sabtu: 08.00 – 16.00</p>
                <p className="text-sm text-zinc-600">Minggu: Tutup</p>
              </div>
              <div>
                <p className="text-[0.55rem] tracking-wider text-[var(--text-faint)] uppercase mb-1">Kontak</p>
                <a
                  href="https://wa.me/6281216669089"
                  className="text-sm text-zinc-400 hover:text-[var(--gold)] transition-colors block"
                  id="footer-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0812-1666-9089 (WA)
                </a>
                <a
                  href="https://instagram.com/fullthrottle_garagesby"
                  className="text-sm text-zinc-400 hover:text-[var(--gold)] transition-colors block"
                  id="footer-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @fullthrottle_garagesby
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px w-full mb-8" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.55rem] tracking-[0.2em] text-zinc-700 uppercase">
            © 2024 FT Garage Surabaya. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="badge badge-gold">
              <span>⭐ 4.9</span>
              <span>537 Ulasan Google</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
