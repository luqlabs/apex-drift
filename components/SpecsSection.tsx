"use client";

import { motion } from "framer-motion";

const specs = [
  { label: "Engine", value: "4.0L Twin-Turbo V8" },
  { label: "Output", value: "720 BHP" },
  { label: "0–100", value: "2.8s" },
  { label: "Top Speed", value: "340 KM/H" },
  { label: "Torque", value: "900 Nm" },
  { label: "Transmission", value: "8-Speed DCT" },
  { label: "Drivetrain", value: "AWD / RWD" },
  { label: "Kerb Weight", value: "1,420 KG" },
];

export default function SpecsSection() {
  return (
    <section
      id="specs"
      className="relative bg-[#080808] py-32 px-12 md:px-24"
      aria-labelledby="specs-heading"
    >
      {/* Section header */}
      <div className="mb-20 flex items-end justify-between border-b border-zinc-900 pb-8">
        <div>
          <p className="beat-subtitle text-zinc-600 mb-3">Technical Data</p>
          <h2
            id="specs-heading"
            className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-none"
          >
            PERFORMANCE
            <br />
            <span className="text-zinc-700">SPECIFICATIONS.</span>
          </h2>
        </div>
        <p className="beat-subtitle text-zinc-700 hidden md:block">
          AX-2024 // APEX DRIFT
        </p>
      </div>

      {/* Specs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            id={`spec-${spec.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            className="bg-[#080808] p-8 flex flex-col gap-3 hover:bg-[#0f0f0f] transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.06,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <p className="text-[0.55rem] tracking-[0.3em] uppercase text-zinc-600">
              {spec.label}
            </p>
            <p className="text-2xl md:text-3xl font-black tracking-tight text-white">
              {spec.value}
            </p>
            {/* Decorative line */}
            <div className="h-px w-8 bg-zinc-800 mt-auto" />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
            Every specification is engineered to exceed. The Apex Drift is not 
            merely a vehicle — it is the physical manifestation of absolute control.
          </p>
        </div>
        <button
          className="apex-btn"
          id="download-specs-btn"
          aria-label="Download full specifications"
        >
          <span>Download Full Specs</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1V10M7 10L3 6M7 10L11 6M1 13H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
