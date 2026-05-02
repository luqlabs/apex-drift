"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_OPTIONS = [
  "ECU Remap",
  "Tune Up",
  "Ganti Oli & Filter",
  "Turun Mesin (Overhaul)",
  "Injeksi & Karburator",
  "Spooring",
  "Balancing",
  "Shockbreaker",
  "Rotasi Ban",
  "Tie Rod & Ball Joint",
  "Scan ECU / OBD2",
  "Service AC",
  "Ganti Aki",
  "Kelistrikan Bodi",
  "Alarm & Audio",
  "Poles / Detailing",
  "Perbaikan Penyok",
  "Pengecatan Partial",
  "Pengecatan Full",
  "Anti Karat",
  "Lainnya (jelaskan di catatan)",
];

const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00",
];

function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    carBrand: "",
    carType: "",
    plateNumber: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselected) {
      const mapping: Record<string, string> = {
        mekanikal: "Tune Up",
        "kaki-kaki": "Spooring",
        kelistrikan: "Scan ECU / OBD2",
        "body-paint": "Poles / Detailing",
      };
      setForm((prev) => ({
        ...prev,
        service: mapping[preselected] || "",
      }));
    }
  }, [preselected]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.phone.trim()) newErrors.phone = "Nomor HP wajib diisi";
    if (!form.carBrand.trim()) newErrors.carBrand = "Merk mobil wajib diisi";
    if (!form.service) newErrors.service = "Pilih jenis layanan";
    if (!form.date) newErrors.date = "Pilih tanggal";
    if (!form.time) newErrors.time = "Pilih jam";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = [
      `*BOOKING SERVIS — LQ GARAGE*`,
      ``,
      `*Nama:* ${form.name}`,
      `*No. HP:* ${form.phone}`,
      `*Kendaraan:* ${form.carBrand} ${form.carType}`,
      `*No. Plat:* ${form.plateNumber || "-"}`,
      `*Layanan:* ${form.service}`,
      `*Tanggal:* ${form.date}`,
      `*Jam:* ${form.time} WIB`,
      `*Catatan:* ${form.notes || "-"}`,
    ].join("\n");

    const waUrl = `https://wa.me/6289998887776?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#111] border border-[var(--gold)] p-10 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--gold-glow)", border: "2px solid var(--gold)" }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: "var(--gold)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3
                className="text-white text-2xl font-black uppercase mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Booking Terkirim!
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                Detail booking Anda telah dikirim ke WhatsApp admin LQ Garage.
              </p>
              <p className="text-zinc-500 text-xs mb-8">
                Tim kami akan segera mengonfirmasi jadwal Anda.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold w-full"
                id="success-close-btn"
              >
                <span>Tutup</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate id="booking-form">
        {/* Row 1: Nama & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nama Lengkap *</label>
            <input
              id="name" name="name" type="text"
              className="form-input"
              placeholder="Budi Santoso"
              value={form.name} onChange={handleChange}
              aria-required="true"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Nomor HP / WhatsApp *</label>
            <input
              id="phone" name="phone" type="tel"
              className="form-input"
              placeholder="08xxxxxxxxxx"
              value={form.phone} onChange={handleChange}
              aria-required="true"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Row 2: Car Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="form-group">
            <label htmlFor="carBrand" className="form-label">Merk & Model Mobil *</label>
            <input
              id="carBrand" name="carBrand" type="text"
              className="form-input"
              placeholder="Toyota Avanza"
              value={form.carBrand} onChange={handleChange}
              aria-required="true"
            />
            {errors.carBrand && <p className="text-red-500 text-xs mt-1">{errors.carBrand}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="carType" className="form-label">Tahun Kendaraan</label>
            <input
              id="carType" name="carType" type="text"
              className="form-input"
              placeholder="2020"
              value={form.carType} onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="plateNumber" className="form-label">Nomor Plat</label>
            <input
              id="plateNumber" name="plateNumber" type="text"
              className="form-input"
              placeholder="L 1234 AB"
              value={form.plateNumber} onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 3: Service */}
        <div className="form-group">
          <label htmlFor="service" className="form-label">Jenis Layanan *</label>
          <select
            id="service" name="service"
            className="form-input"
            value={form.service} onChange={handleChange}
            aria-required="true"
          >
            <option value="">Pilih layanan yang dibutuhkan...</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Row 4: Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="date" className="form-label">Tanggal Kunjungan *</label>
            <input
              id="date" name="date" type="date"
              className="form-input"
              min={today}
              value={form.date} onChange={handleChange}
              aria-required="true"
              style={{ colorScheme: "dark" }}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="time" className="form-label">Jam Kunjungan *</label>
            <select
              id="time" name="time"
              className="form-input"
              value={form.time} onChange={handleChange}
              aria-required="true"
            >
              <option value="">Pilih jam...</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>{t} WIB</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
          </div>
        </div>

        {/* Row 5: Notes */}
        <div className="form-group">
          <label htmlFor="notes" className="form-label">Keluhan / Catatan Tambahan</label>
          <textarea
            id="notes" name="notes"
            className="form-input"
            rows={4}
            placeholder="Ceritakan keluhan kendaraan Anda atau hal-hal yang perlu diperhatikan mekanik..."
            value={form.notes}
            onChange={handleChange}
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Info box */}
        <div
          className="flex gap-3 p-4 border"
          style={{ borderColor: "rgba(201,168,76,0.2)", background: "var(--gold-glow)" }}
        >
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Booking ini akan langsung terkirim ke WhatsApp admin LQ Garage. Tim kami akan mengonfirmasi jadwal Anda dalam 1×24 jam. Disarankan membuat janji terlebih dahulu sebelum datang.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-wa w-full justify-center"
          id="booking-submit-btn"
          style={{ padding: "1rem 2rem", fontSize: "0.8rem" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Kirim Booking via WhatsApp</span>
        </button>
      </form>
    </>
  );
}

export default function BookingPage() {
  return (
    <main className="relative bg-[#080808] min-h-screen" id="booking-page">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      {/* Page Hero */}
      <section className="page-hero" aria-label="Halaman Booking">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="label-gold mb-4">Reservasi Online</p>
            <h1 className="heading-xl text-white mb-6">
              Booking<br />
              <span style={{ color: "var(--gold)" }}>Servis</span>
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Isi formulir di bawah dan detail booking Anda akan langsung dikirim ke WhatsApp admin kami. Cepat, mudah, tanpa perlu telepon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 pb-16 md:pb-24" aria-label="Formulir Booking">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Suspense fallback={<div className="text-zinc-500 text-sm">Loading form...</div>}>
                <BookingForm />
              </Suspense>
            </motion.div>

            {/* Sidebar Info */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Jam Operasional */}
              <div className="card-dark p-6">
                <p className="label-gold mb-4">Jam Operasional</p>
                <div className="space-y-3">
                  {[
                    { day: "Senin – Jumat", time: "08.00 – 17.00" },
                    { day: "Sabtu", time: "08.00 – 16.00" },
                    { day: "Minggu", time: "Tutup" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-zinc-400 text-xs">{day}</span>
                      <span
                        className="text-xs font-semibold"
                        style={{
                          color: time === "Tutup" ? "#71717a" : "var(--gold)",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alamat */}
              <div className="card-dark p-6">
                <p className="label-gold mb-4">Lokasi Bengkel</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Jl. Raya Kedung Asem No.99<br />
                  Kedung Baruk, Rungkut<br />
                  Surabaya, Jawa Timur 60298
                </p>
                <a
                  href="https://maps.app.goo.gl/PPwvccxK6iUJuZcp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="booking-maps-link"
                  className="text-[var(--gold)] text-xs hover:underline"
                >
                  Buka di Google Maps →
                </a>
              </div>

              {/* Rating */}
              <div className="card-dark p-6 text-center">
                <p className="text-4xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>4.9</p>
                <p className="text-yellow-400 text-lg mb-2">★★★★★</p>
                <p className="text-zinc-500 text-xs">dari 537 ulasan Google</p>
              </div>

              {/* Garansi */}
              <div className="p-6 border" style={{ borderColor: "rgba(201,168,76,0.3)", background: "var(--gold-glow)" }}>
                <p className="label-gold mb-2">✓ Garansi Servis 30 Hari</p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Setiap pekerjaan servis dijamin selama 30 hari. Ada masalah? Kami tangani tanpa biaya tambahan.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
