"use client";

import { MONO, LIME, DARK } from "@/lib/utils";

export default function MarqueeBand() {
  const items = [
    "Konsultasi 100% Gratis",
    "0% Biaya Awal",
    "Garansi Penuh",
    "Free Maintenance",
    "Semua Platform",
  ];
  const full = [...items, ...items, ...items].join("  ·  ");

  return (
    <div
      className="overflow-hidden border-t border-b border-black/10 py-3"
      style={{ backgroundColor: LIME }}
    >
      <p
        className="whitespace-nowrap text-[11px] font-semibold animate-[marquee_28s_linear_infinite]"
        style={{ ...MONO, color: DARK }}
      >
        {full} · {full}
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
