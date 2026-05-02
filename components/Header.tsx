"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/gallery", label: "Galeri" },
  { href: "/blog", label: "Tips & Artikel" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="site-header z-[90]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        role="banner"
      >
        {/* Logo */}
        <Link href="/" className="site-logo" id="site-logo" aria-label="LQ Garage - Beranda">
          {/* Logo Icon — stylized F+T */}
          <div className="w-8 h-8 border border-[var(--gold)] flex items-center justify-center flex-shrink-0">
            <span
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-[var(--gold)] font-black text-sm leading-none"
            >
              LQ
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="site-logo-text">LQ Garage</span>
            <span className="site-logo-sub">Kedung Asem · Surabaya</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="site-nav" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Booking */}
          <Link
            href="/booking"
            id="nav-booking"
            className="btn-gold"
            style={{ padding: "0.6rem 1.5rem" }}
          >
            <span>Booking Sekarang</span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          className="mobile-menu-btn flex flex-col gap-1.5 p-2 z-[110] relative"
        >
          <span
            className="w-6 h-px block transition-all duration-300"
            style={{
              background: "#fff",
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="w-6 h-px block transition-all duration-300"
            style={{
              background: "#fff",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="w-6 h-px block transition-all duration-300"
            style={{
              background: "#fff",
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[80] bg-[#080808] flex flex-col justify-center px-8 gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tight text-white hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.4 }}
            >
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="btn-gold mt-4 inline-block"
              >
                <span>Booking Sekarang</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
