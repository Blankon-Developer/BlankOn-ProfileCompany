"use client";

import { DISPLAY, MONO, LIME, DARK } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5"
            style={{ ...MONO, backgroundColor: LIME, color: DARK }}
          >
            BLK
          </span>
          <span
            className="text-sm font-700 text-[#0F0F0D]"
            style={{ ...DISPLAY, fontWeight: 700 }}
          >
            / BLANKON
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground" style={MONO}>
          © {new Date().getFullYear()} Blankon — Semua hak dilindungi.
        </p>
        <div className="flex items-center gap-6">
          {["Layanan", "Penawaran", "Proses"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              style={MONO}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
