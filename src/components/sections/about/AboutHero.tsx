"use client";

import { cn, DISPLAY, BODY, MONO, LIME } from "@/lib/utils";

export default function AboutHero() {
  return (
    <section className="pt-[140px] md:pt-[180px] pb-12 md:pb-20 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6 max-w-5xl">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mb-4 w-fit opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: "var(--accent-color)" }}
          />
          <span
            className="text-[11px] text-muted-foreground uppercase tracking-widest"
            style={MONO}
          >
            TENTANG BLANKON TECH
          </span>
        </div>

        <h1
          className="text-[clamp(36px,5vw,64px)] font-black leading-[1.1] tracking-[-1.5px] text-foreground opacity-0 animate-fade-up"
          style={{ ...DISPLAY, animationDelay: "200ms" }}
        >
          Kami percaya produk digital yang baik dimulai dari{" "}
          <span className="relative inline-block">
            pemahaman yang baik.
            <span
              className="absolute -bottom-1 left-0 right-0 h-[6px] pointer-events-none"
              style={{ backgroundColor: "var(--accent-color)" }}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}
