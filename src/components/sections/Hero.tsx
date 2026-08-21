"use client";

import { cn, DISPLAY, BODY, MONO, HEADING } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-[160px] md:pt-[120px] pb-24 md:pb-12 px-6 md:px-10 max-w-7xl mx-auto">

      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-25 blur-[80px]"
        style={{
          background: `radial-gradient(circle, var(--accent-color) 0%, transparent 90%)`
        }}
      />
      <div
        className="absolute bottom-0 left-[-200px] w-[400px] h-[400px] pointer-events-none opacity-25 blur-[100px]"
        style={{
          background: `radial-gradient(circle, var(--accent-color) 0%, transparent 90%)`
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mb-4 w-fit opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="w-2 h-2 rounded-none inline-block"
            style={{ backgroundColor: "var(--accent-color)" }}
          />

          <span
            className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold"
            style={MONO}
          >
            PARTNER TEKNOLOGI ANDA
          </span>
        </div>

        {/* Image Logo Blankon */}
        <div
          className="inline-flex justify-center items-center gap-2 mb-4 w-full opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="logo-loop">
            <Image
              src="/BlankOn Logo.svg"
              alt="Logo Blankon"
              width={150}
              height={150}
              className="dark:hidden"
            />
            <Image
              src="/BlankOn Logo Dark-Mode.svg"
              alt="Logo Blankon"
              width={150}
              height={150}
              className="hidden dark:block"
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="w-full text-center headline-hero text-[clamp(40px,7vw,88px)] font-black leading-[1.05] tracking-[-2px] text-foreground"
          style={DISPLAY}
        >
          <span className="headline-text relative inline-block">
            {"BlankOn Tech".split("").map((char, index) => (
              <span
                key={index}
                className={
                  char === " "
                    ? "headline-char headline-space"
                    : "headline-char"
                }
                style={{
                  animationDelay: `${index * 45}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}

            <span
              className="headline-underline absolute -bottom-3 left-0 right-0 h-[6px] rounded-full pointer-events-none"
              style={{
                backgroundColor: "var(--accent-color)",
              }}
            />
          </span>
        </h1>


        {/* Subtext */}
        <p
          className="text-muted-foreground text-lg md:text-lg leading-relaxed text-justify mt-2 max-w-full opacity-0 animate-fade-up"
          style={{ ...BODY, animationDelay: "300ms" }}
        >
          Kami membantu berbagai skala pengguna mulai dari personal, UMKM, korporasi, hingga pemerintahan dalam merancang dan mengembangkan ekosistem digital. Dari aplikasi fungsional hingga integrasi AI, IoT, dan Cloud, kami membangun solusi teknologi yang berfokus pada penyelesaian masalah nyata.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 mt-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="mailto:hello@blankon.id"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm transition-all hover:scale-105 bg-foreground text-background"
            style={DISPLAY}
          >
            Diskusikan Proyek Anda <ArrowRight size={16} />
          </a>
          <Link
            href="#layanan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm border-2 border-border hover:border-foreground transition-all group"
            style={DISPLAY}
          >
            Lihat Layanan Kami
            <Sparkles size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>

        {/* Supporting text */}
        <div
          className="mt-8 pt-6 md:pb-24 border-t border-border max-w-lg opacity-0 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <p className="text-sm text-muted-foreground leading-relaxed" style={BODY}>
            <span className="font-semibold text-foreground">Punya ide atau kebutuhan digital yang belum tahu harus mulai dari mana?</span> Ceritakan kepada kami. Konsultasi awal tanpa biaya.
          </p>
        </div>
      </div>

      <style jsx>{`
/* =========================================  HEADLINE ENTRANCE  ========================================= */
@keyframes headline-entrance {
  0% {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(8px);
  }

  60% {
    opacity: 1;
    transform: translateY(-4px);
    filter: blur(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.headline-hero {
  opacity: 0;
  animation: headline-entrance 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
}


/* =========================================  CHARACTER  ========================================= */

.headline-char {
  display: inline-block;
  transform-origin: center bottom;
  will-change: transform, color;
}


/* ========================================= WAVE ========================================= */

@keyframes headline-wave {
  0%,
  65%,
  100% {
    transform:
      translateY(0)
      rotateZ(0deg)
      scale(1);
    color: inherit;
  }

  68% {
    transform:
      translateY(-8px)
      rotateZ(-2deg)
      scale(1.04);
    color: var(--accent-color);
  }

  72% {
    transform:
      translateY(2px)
      rotateZ(1deg)
      scale(0.98);
  }

  76% {
    transform:
      translateY(0)
      rotateZ(0deg)
      scale(1);
    color: inherit;
  }
}

.headline-char {
  animation:
    headline-wave 5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

/* ========================================= UNDERLINE DRAW ========================================= */
@keyframes underline-draw-center {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }

  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes underline-bounce-center {
  0%,
  65%,
  100% {
    transform: scaleX(1);
    opacity: 1;
  }

  /* Sedikit mengecil ke tengah */
  72% {
    transform: scaleX(0.96);
    opacity: 0.9;
  }

  /* Mengembang sedikit melewati ukuran normal */
  78% {
    transform: scaleX(1.04);
    opacity: 1;
  }

  /* Kembali ke ukuran normal */
  84% {
    transform: scaleX(0.985);
    opacity: 0.95;
  }

  90% {
    transform: scaleX(1);
    opacity: 1;
  }
}

.headline-underline {
  transform: scaleX(0);
  transform-origin: center;

  animation:
    underline-draw-center
      800ms
      cubic-bezier(0.22, 1, 0.36, 1)
      900ms
      forwards,

    underline-bounce-center
      5s
      cubic-bezier(0.45, 0, 0.55, 1)
      2s
      infinite;
}

/* ========================================= LOGO ANIMATE ========================================= */
@keyframes logo-loop {
  0%, 15% {
    transform: perspective(800px) translateY(0) rotateY(0deg) rotateZ(0deg) scale(1);
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  18% {
    transform: perspective(800px) translateY(-12px) rotateY(0deg) rotateZ(0deg) scale(1.02);
    animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  }
  21%, 40% {
    transform: perspective(800px) translateY(0) rotateY(0deg) rotateZ(0deg) scale(1);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  43% {
    transform: perspective(800px) translateY(4px) rotateY(-15deg) rotateZ(-3deg) scale(0.95);
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  48% {
    transform: perspective(800px) translateY(-25px) rotateY(180deg) rotateZ(0deg) scale(1.05);
    animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  }
  53% {
    transform: perspective(800px) translateY(0) rotateY(360deg) rotateZ(0deg) scale(1);
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  56% {
    transform: perspective(800px) translateY(-8px) rotateY(360deg) rotateZ(0deg) scale(1.02);
    animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  }
  59% {
    transform: perspective(800px) translateY(2px) rotateY(360deg) rotateZ(0deg) scale(0.98);
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  62%, 100% {
    transform: perspective(800px) translateY(0) rotateY(360deg) rotateZ(0deg) scale(1);
  }
}

.logo-loop {
  animation: logo-loop 6s linear 1.5s infinite;
  transform-style: preserve-3d;
  will-change: transform;
}
      `}</style>
    </section>
  );
}
