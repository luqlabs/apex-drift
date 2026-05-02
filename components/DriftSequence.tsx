"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, motion, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── CONFIGURATION ───────────────────────────────────────────────────────────
const FRAME_COUNT = 240;
const FRAME_PATH = (i: number) => {
  const n = String(i).padStart(3, "0");
  return `/frames/ezgif-frame-${n}.jpg`;
};

// Scroll beats — LQ Garage branded
type Beat = {
  id: string;
  startPct: number;
  endPct: number;
  title: string;
  subtitle: string | null;
  cta?: boolean;
};

const BEATS: Beat[] = [
  {
    id: "A",
    startPct: 0,
    endPct: 0.18,
    title: "PRESISI TANPA KOMPROMI.",
    subtitle: "Mesin kendaraan Anda, ditangani oleh tangan yang tepat.",
  },
  {
    id: "B",
    startPct: 0.28,
    endPct: 0.46,
    title: "PERFORMA SEJATI.",
    subtitle: "ECU Remap & Tune Up untuk mengoptimalkan setiap RPM.",
  },
  {
    id: "C",
    startPct: 0.56,
    endPct: 0.72,
    title: "KEPERCAYAAN TERBUKTI.",
    subtitle: "⭐ 4.9 dari 537 pelanggan di Google Maps.",
  },
  {
    id: "D",
    startPct: 0.8,
    endPct: 1.0,
    title: "ENGINE IS OUR PASSION.",
    subtitle: null,
    cta: true,
  },
];

// ─── PRELOADER ────────────────────────────────────────────────────────────────
function Preloader({
  progress,
  done,
}: {
  progress: number;
  done: boolean;
}) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#080808]"
          aria-label="Loading animation"
        >
          {/* Logo */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--gold)] flex items-center justify-center">
              <span
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[var(--gold)] font-black text-sm leading-none"
              >
                LQ
              </span>
            </div>
            <p className="loader-text tracking-[0.3em] text-zinc-500">
              LQ GARAGE · SURABAYA
            </p>
          </div>

          {/* Counter */}
          <div className="relative flex flex-col items-center gap-6 w-full max-w-xs px-8">
            <motion.p
              className="loader-counter tabular-nums"
              key={Math.floor(progress)}
            >
              {String(Math.floor(progress)).padStart(2, "0")}
            </motion.p>

            {/* Status */}
            <p className="loader-text text-zinc-600 tracking-[0.35em]">
              MENYIAPKAN PENGALAMAN
              <TypingDots />
            </p>

            {/* Bar */}
            <div className="loader-bar-container w-full mt-2">
              <div
                className="loader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="loader-text text-zinc-800 tracking-widest mt-2">
              ENGINE IS OUR PASSION
            </p>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="h-px w-16 bg-zinc-800" />
            <p className="loader-text text-[0.55rem] text-zinc-700 tracking-[0.3em]">
              #itsaroadlife
            </p>
            <div className="h-px w-16 bg-zinc-800" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypingDots() {
  const [dots, setDots] = useState("...");
  useEffect(() => {
    const frames = ["   ", ".  ", ".. ", "..."];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % frames.length;
      setDots(frames[i]);
    }, 400);
    return () => clearInterval(id);
  }, []);
  return <span className="inline-block w-6 text-left">{dots}</span>;
}

// ─── SCROLL INDICATOR ─────────────────────────────────────────────────────────
function ScrollIndicator({ scrollPct }: { scrollPct: number }) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 scroll-indicator-desktop">
      <div className="h-32 w-px bg-zinc-800 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full origin-top"
          style={{
            height: `${(1 - scrollPct) * 100}%`,
            background: "var(--gold)",
          }}
        />
      </div>
      <p
        className="text-[0.5rem] tracking-widest text-zinc-700 uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        SCROLL
      </p>
    </div>
  );
}

// ─── BEAT TEXT ────────────────────────────────────────────────────────────────
function BeatText({
  beat,
  scrollPct,
}: {
  beat: Beat;
  scrollPct: number;
}) {
  // For the final CTA beat: stay visible once triggered, never fade out
  const isPast = scrollPct >= beat.startPct;
  const isVisible = scrollPct >= beat.startPct && scrollPct <= beat.endPct;

  const fadeRange = 0.04;
  let opacity = 0;

  if (beat.cta) {
    // Fade in once, then stay at full opacity permanently
    if (isPast) {
      opacity = Math.min(1, (scrollPct - beat.startPct) / fadeRange);
    }
  } else {
    if (isVisible) {
      const fadeIn = Math.min(1, (scrollPct - beat.startPct) / fadeRange);
      const fadeOut = Math.min(1, (beat.endPct - scrollPct) / fadeRange);
      opacity = Math.min(fadeIn, fadeOut);
    }
  }

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-end pb-16 px-5 sm:px-12 md:px-20 pointer-events-none"
      animate={{ opacity, y: isVisible ? 0 : 40 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden={!isVisible}
    >
      <div className="max-w-2xl">
        {/* Series label */}
        <p className="beat-subtitle mb-4 text-zinc-500">
          — 00{beat.id} / 004
        </p>

        {/* Main title */}
        <h2 className="beat-title text-white mb-5 leading-none">
          {beat.title}
        </h2>

        {/* Subtitle or CTA */}
        {beat.subtitle && (
          <p className="beat-subtitle text-zinc-400 max-w-sm">
            {beat.subtitle}
          </p>
        )}

        {beat.cta && (
          <div className="mt-8 pointer-events-auto flex flex-wrap gap-4">
            <Link href="/booking" className="btn-gold" id="hero-booking-btn" aria-label="Booking servis sekarang">
              <span>Booking Servis Sekarang</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline" id="hero-services-btn" aria-label="Lihat layanan kami">
              <span>Lihat Layanan</span>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── CANVAS ENGINE ────────────────────────────────────────────────────────────
export default function DriftSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [loadDone, setLoadDone] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  // ── useScroll ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Lerp-based smooth progress (replaces spring) ──
  // Initializes at current scroll to prevent frame jump on refresh
  const lerpProgress = useMotionValue(0);

  // Frame index: animation completes at 91% of scroll (~1000vh)
  // The remaining 9% (~100vh) holds the final frame with CTA visible
  const frameIndex = useTransform(
    lerpProgress,
    [0, 0.91],
    [0, FRAME_COUNT - 1],
    { clamp: true }
  );

  // ── Preload frames ──
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        const pct = Math.round((loaded / FRAME_COUNT) * 100);
        setLoadProgress(pct);
        if (loaded === FRAME_COUNT) {
          setTimeout(() => setLoadDone(true), 600);
        }
      };
      img.onerror = () => {
        loaded++;
        const pct = Math.round((loaded / FRAME_COUNT) * 100);
        setLoadProgress(pct);
        if (loaded === FRAME_COUNT) {
          setTimeout(() => setLoadDone(true), 600);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // ── Draw frame on canvas ──
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[Math.round(index)];
    if (!canvas || !ctx || !img || !img.complete) return;

    const { width: cw, height: ch } = canvas;
    const { naturalWidth: iw, naturalHeight: ih } = img;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = cw / scale;
    const sh = ch / scale;
    const sx = (iw - sw) / 2;
    const sy = (ih - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // ── Lerp RAF loop — smooth frame interpolation ──
  useEffect(() => {
    // Snap to current scroll position immediately on mount
    // This prevents frame jumping after browser restores scroll on refresh
    const initialScroll = scrollYProgress.get();
    lerpProgress.set(initialScroll);
    currentFrameRef.current = Math.round(
      Math.min(initialScroll / 0.91, 1) * (FRAME_COUNT - 1)
    );

    let current = initialScroll;
    let lerpRafId: number;

    const tick = () => {
      const target = scrollYProgress.get();
      // Lerp factor: 0.07 = very smooth, higher = more responsive
      current += (target - current) * 0.07;

      // Only update if difference is meaningful
      if (Math.abs(target - current) > 0.0001) {
        lerpProgress.set(current);
      }

      // Update beat text scroll indicator directly from raw scroll
      setScrollPct(target);

      // Draw frame
      const rawIdx = Math.min(current / 0.91, 1) * (FRAME_COUNT - 1);
      const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(rawIdx)));
      if (idx !== currentFrameRef.current) {
        currentFrameRef.current = idx;
        drawFrame(idx);
      }

      lerpRafId = requestAnimationFrame(tick);
    };

    lerpRafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(lerpRafId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, lerpProgress, drawFrame]);

  // ── Resize canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // Draw first frame after load
  useEffect(() => {
    if (loadDone) {
      drawFrame(0);
    }
  }, [loadDone, drawFrame]);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Preloader */}
      <Preloader progress={loadProgress} done={loadDone} />

      {/* Scroll indicator */}
      {loadDone && <ScrollIndicator scrollPct={scrollPct} />}

      {/* Sticky canvas section */}
      <section
        ref={containerRef}
        className="relative"
        style={{ height: "1100vh" }}
        id="drift-sequence"
        aria-label="LQ Garage Scroll Experience"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="drift-canvas absolute inset-0 w-full h-full object-cover"
            aria-label="LQ Garage cinematic animation"
          />

          {/* Vignette layers */}
          <div className="canvas-fade-top" aria-hidden="true" />
          <div className="canvas-vignette" aria-hidden="true" />
          <div className="canvas-fade-bottom" aria-hidden="true" />

          {/* Vertical series label */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <p className="series-number text-zinc-800">
              LQ GARAGE // KEDUNG ASEM · SBY
            </p>
          </div>

          {/* Beat text overlays */}
          {BEATS.map((beat) => (
            <BeatText key={beat.id} beat={beat} scrollPct={scrollPct} />
          ))}

          {/* Scroll cue — visible only at start */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
            animate={{ opacity: scrollPct > 0.05 ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-px h-10 origin-top"
              style={{ background: "var(--gold)" }}
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-[0.55rem] tracking-[0.35em] text-zinc-600 uppercase">
              Scroll
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
