"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const ARTICLES = [
  {
    id: "kapan-ganti-oli",
    slug: "kapan-waktu-tepat-ganti-oli",
    category: "Mesin & Performa",
    title: "Kapan Waktu yang Tepat untuk Ganti Oli Mobil?",
    excerpt:
      "Banyak pemilik kendaraan masih bingung kapan harus mengganti oli. Apakah berdasarkan jarak tempuh, waktu, atau kondisi oli? Kami jelaskan panduannya secara lengkap.",
    readTime: "4 menit",
    date: "15 Maret 2025",
    icon: "🔧",
  },
  {
    id: "ciri-rem-tipis",
    slug: "ciri-rem-mobil-mulai-tipis",
    category: "Keselamatan",
    title: "6 Ciri Rem Mobil yang Sudah Mulai Tipis dan Harus Segera Diganti",
    excerpt:
      "Rem yang tidak optimal adalah ancaman keselamatan serius. Kenali tanda-tandanya sejak dini sebelum terlambat — mulai dari bunyi decitan hingga pedal yang terasa dalam.",
    readTime: "5 menit",
    date: "28 Februari 2025",
    icon: "⚠️",
  },
  {
    id: "tips-ac-dingin",
    slug: "tips-merawat-ac-mobil-tetap-dingin",
    category: "Kelistrikan & AC",
    title: "Tips Merawat AC Mobil agar Tetap Dingin Sepanjang Tahun",
    excerpt:
      "Cuaca panas Surabaya membuat AC mobil bekerja ekstra keras. Ikuti tips perawatan berikut agar sistem pendinginan kendaraan Anda selalu optimal dan freon tidak cepat habis.",
    readTime: "4 menit",
    date: "10 Februari 2025",
    icon: "❄️",
  },
  {
    id: "apa-itu-ecu-remap",
    slug: "apa-itu-ecu-remap-dan-manfaatnya",
    category: "Teknologi & Tuning",
    title: "Apa Itu ECU Remap? Manfaat dan Risiko yang Perlu Diketahui",
    excerpt:
      "ECU Remap adalah proses mengoptimasi software otak kendaraan Anda untuk meningkatkan performa dan efisiensi bahan bakar. Tapi apakah aman? Siapa yang harus melakukannya?",
    readTime: "6 menit",
    date: "20 Januari 2025",
    icon: "💻",
  },
  {
    id: "spooring-vs-balancing",
    slug: "spooring-vs-balancing-apa-bedanya",
    category: "Kaki-kaki",
    title: "Spooring vs Balancing — Apa Bedanya dan Kapan Harus Dilakukan?",
    excerpt:
      "Dua prosedur ini sering disebut bersamaan, tapi fungsinya berbeda. Spooring menyeimbangkan sudut roda, sementara balancing menyeimbangkan berat ban. Pelajari lebih lanjut.",
    readTime: "5 menit",
    date: "5 Januari 2025",
    icon: "🛞",
  },
  {
    id: "detailing-mobil",
    slug: "manfaat-detailing-mobil-rutin",
    category: "Body & Paint",
    title: "Mengapa Detailing Rutin Penting untuk Mempertahankan Nilai Jual Mobil Anda",
    excerpt:
      "Cat yang terjaga, kaca yang bening, dan interior yang bersih bukan hanya soal estetika — ini investasi nilai kendaraan Anda. Ini alasan kenapa detailing rutin sangat worth it.",
    readTime: "4 menit",
    date: "18 Desember 2024",
    icon: "✨",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Mesin & Performa": "var(--gold)",
  "Keselamatan": "#ef4444",
  "Kelistrikan & AC": "#60a5fa",
  "Teknologi & Tuning": "#a78bfa",
  "Kaki-kaki": "#34d399",
  "Body & Paint": "#f97316",
};

// ─── Article Detail (inline) ──────────────────────────────────────────────────
const ARTICLE_CONTENT: Record<string, string> = {
  "kapan-ganti-oli": `
Oli mesin adalah darah kendaraan Anda. Fungsinya melumasi komponen mesin yang bergerak, mengurangi gesekan, mendinginkan mesin, dan membersihkan kotoran. Ketika oli sudah tidak optimal, kerusakan komponen mesin bisa terjadi tanpa peringatan.

**Panduan Ganti Oli Berdasarkan Tipe Oli:**

- **Oli Mineral:** Setiap 3.000 – 5.000 km atau 3 bulan (mana yang lebih dulu)
- **Oli Semi-Sintetis:** Setiap 5.000 – 7.500 km atau 6 bulan
- **Oli Full Sintetis:** Setiap 8.000 – 12.000 km atau 1 tahun

**Tanda Oli Harus Segera Diganti:**
1. Warna oli hitam pekat saat dipantau via dipstick
2. Mesin berbunyi lebih kasar dari biasanya
3. Konsumsi BBM terasa lebih boros
4. Bau terbakar dari ruang mesin
5. Lampu indikator oli menyala

**Tips FT Garage:** Selalu gunakan oli yang sesuai spesifikasi pabrikan kendaraan Anda. Jangan asal murah — kualitas oli langsung berdampak pada umur mesin.
  `,
};

export default function BlogPage() {
  return (
    <main className="relative bg-[#080808] min-h-screen" id="blog-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Blog & Tips">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="label-gold mb-4">Pengetahuan Gratis dari Mekanik Kami</p>
            <h1 className="heading-xl text-white mb-6">
              Tips &<br />
              <span style={{ color: "var(--gold)" }}>Artikel</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Pelajari cara merawat kendaraan Anda dengan benar. Artikel edukasi dari mekanik berpengalaman FT Garage — gratis untuk semua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-8" aria-label="Artikel utama">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-[var(--accent-line)] hover:border-[var(--gold-dark)] transition-all duration-300 group cursor-pointer"
            id="blog-featured"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Visual */}
              <div
                className="min-h-[280px] lg:min-h-full flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1500 0%, #2a1f00 50%, #0a0800 100%)" }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,168,76,0.2) 20px, rgba(201,168,76,0.2) 21px)",
                  }}
                />
                <span className="text-8xl relative z-10">🔧</span>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge badge-gold">Artikel Pilihan</span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="label-sm">{ARTICLES[0].readTime} baca</span>
                </div>
                <h2
                  className="text-white text-2xl lg:text-3xl font-black uppercase leading-tight mb-4 group-hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {ARTICLES[0].title}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{ARTICLES[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="label-sm">{ARTICLES[0].date}</span>
                  <span
                    className="text-[var(--gold)] text-xs font-semibold tracking-wider uppercase group-hover:gap-2 transition-all"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 pb-20" aria-label="Daftar artikel">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(1).map((article, i) => (
              <motion.article
                key={article.id}
                id={`article-${article.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="card-dark group cursor-pointer flex flex-col"
              >
                {/* Thumb */}
                <div
                  className="flex items-center justify-center py-10 border-b border-[var(--accent-line)] relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)" }}
                >
                  <span className="text-5xl relative z-10">{article.icon}</span>
                  <div
                    className="absolute top-2 right-2 text-[0.55rem] tracking-wider uppercase px-2 py-0.5 font-semibold"
                    style={{
                      color: CATEGORY_COLORS[article.category] || "var(--gold)",
                      border: `1px solid ${CATEGORY_COLORS[article.category] || "var(--gold)"}20`,
                      background: `${CATEGORY_COLORS[article.category] || "var(--gold)"}10`,
                    }}
                  >
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--accent-line)]">
                    <span className="label-sm">{article.readTime} baca</span>
                    <span className="text-[var(--gold)] text-xs font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Baca →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / WA CTA */}
      <section className="py-16 px-6 bg-[#0D0D0D]" aria-label="Notifikasi artikel baru">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-gold mb-4">Punya pertanyaan seputar kendaraan?</p>
            <h2 className="heading-lg text-white mb-4">Tanya Langsung<br />ke Mekanik Kami</h2>
            <p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto">
              Tim mekanik FT Garage siap menjawab pertanyaan seputar kendaraan Anda — gratis, tanpa syarat.
            </p>
            <a
              href="https://wa.me/6281216669089?text=Halo%20FT%20Garage%2C%20saya%20ingin%20bertanya%20seputar%20kendaraan%20saya."
              className="btn-wa inline-flex"
              id="blog-wa-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Tanya via WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
