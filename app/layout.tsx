import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LQ Garage Surabaya | Bengkel Spesialis Tune Up & ECU Remap",
  description:
    "Bengkel Mobil LQ Garage di Kedung Asem Surabaya. Spesialis ECU Remap, Tune Up, Kaki-kaki, Kelistrikan & AC, Body & Paint. Rating 4.9 ⭐ dari 537 pelanggan. Booking via WhatsApp.",
  keywords: [
    "bengkel surabaya",
    "ECU remap surabaya",
    "tune up mobil surabaya",
    "bengkel kedung asem",
    "LQ garage",
    "lq garage",
    "spooring balancing surabaya",
    "service AC mobil surabaya",
  ],
  openGraph: {
    title: "LQ Garage Surabaya | Bengkel Spesialis Tune Up & ECU Remap",
    description:
      "Spesialis ECU Remap, Tune Up, Kaki-kaki & lebih. Rating 4.9 ⭐. Engine is Our Passion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-[#080808]">{children}</body>
    </html>
  );
}
