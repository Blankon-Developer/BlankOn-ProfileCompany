"use client";

import { DISPLAY, MONO, LIME } from "@/lib/utils";

const stats = [
  { value: "40+", label: "Project Diselesaikan" },
  { value: "Rp 0", label: "Biaya Konsultasi" },
  { value: "100%", label: "Garansi Perbaikan" },
  { value: "<24j", label: "Waktu Respon" },
];

export default function StatsBand() {
  return (
    <div className="border-t border-black/8" style={{ backgroundColor: LIME }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10">
          {stats.map((s) => (
            <div key={s.label} className="py-12 px-8 text-center">
              <p
                className="text-4xl md:text-5xl font-900 text-[#0F0F0D] mb-1.5 leading-none"
                style={{ ...DISPLAY, fontWeight: 900 }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] text-[#3a4a00] uppercase tracking-widest"
                style={MONO}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
