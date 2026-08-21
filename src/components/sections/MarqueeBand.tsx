"use client";

import { HEADING } from "@/lib/utils";

export default function MarqueeBand() {
  const items = [
    "Konsultasi 100% Gratis",
    "0% Biaya Awal",
    "Garansi Penuh",
    "Free Maintenance",
    "Semua Platform",
  ];
  const full = [...items, ...items, ...items].join("  |  ");

  return (
    <div
      className="overflow-hidden py-3"
      style={{ backgroundColor: "var(--accent-color)" }}
    >
      <p
        className="whitespace-nowrap text-[14px] font-bold uppercase tracking-widest text-white dark:text-black animate-[marquee_28s_linear_infinite]"
        style={HEADING}
      >
        {full} | {full}
      </p>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}