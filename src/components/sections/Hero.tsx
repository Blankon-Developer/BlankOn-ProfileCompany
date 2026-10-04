"use client";

import { DISPLAY, BODY, MONO } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[160px] md:pt-[200px] md:min-h-[1050px] pb-24 md:pb-2 px-6 md:px-10 max-w-8xl mx-auto">

      {/* =====================================================
          PREMIUM FUTURISTIC BACKGROUND
      ===================================================== */}
      <div className="absolute md:inset-0 pointer-events-none overflow-hidden tech-bg-container">

        {/* Ambient Glows */}
        <div className="tech-glow glow-1" />
        <div className="tech-glow glow-2" />
        <div className="tech-glow glow-3" />

        {/* Animated Perspective Grid */}
        <div className="tech-grid-wrapper">
          <div className="tech-grid" />
        </div>

        {/* Data Streams */}
        <div className="tech-streams">
          <div className="stream s-1" />
          <div className="stream s-2" />
          <div className="stream s-3" />
          <div className="stream s-4" />
        </div>

        {/* Decorative Circles */}
        <div className="tech-circles">
          <div className="circle c-1" />
          <div className="circle c-2" />
        </div>
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 flex flex-col gap-6 max-w-8xl px-6 md:px-0 mx-auto">

        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 md:mb-0 mb-4 w-fit opacity-0 animate-fade-up md:ml-20"
          style={{ animationDelay: "100ms" }}
        >
          <span
            className="md:w-1 w-1 h-9 md:h-6 rounded-none inline-block"
            style={{ backgroundColor: "var(--accent-color)" }}
          />

          <span
            className="text-[12px] md:text-[16px] text-muted-foreground uppercase tracking-widest font-semibold"
            style={MONO}
          >
            BERSEDIA MENJADI PARTNER TEKNOLOGI ANDA
          </span>
        </div>


        {/* Logo */}
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

            {"BlankOn Digital Tech".split("").map((char, index) => (
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
          className="text-foreground text-lg md:text-lg leading-relaxed md:text-center text-justify mt-2 md:max-w-3xl mx-auto opacity-0 animate-fade-up"
          style={{ ...BODY, animationDelay: "300ms" }}
        >
          Kami membantu berbagai skala pengguna mulai dari personal, UMKM,
          korporasi, hingga pemerintahan dalam merancang dan mengembangkan
          ekosistem digital. Dari aplikasi fungsional hingga integrasi AI,
          IoT, dan Cloud, kami membangun solusi teknologi yang berfokus pada
          penyelesaian masalah nyata.
        </p>


        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center md:gap-10 gap-2 mt-2 opacity-0 animate-fade-up justify-center w-full"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="/kontak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm transition-all hover:scale-105 bg-foreground text-background"
            style={DISPLAY}
          >
            Diskusikan Proyek Anda
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/layanan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-sm bg-white dark:bg-black border-2 border-[#989898] hover:border-foreground transition-all group"
            style={DISPLAY}
          >
            Lihat Layanan Kami

            <Sparkles
              size={16}
              className="text-muted-foreground group-hover:text-foreground transition-colors"
            />
          </Link>
        </div>


        {/* Supporting text */}
        <div
          className="mt-8 pt-6 md:pb-0 max-w-lg opacity-0 animate-fade-up md:absolute md:right-1 md:top-10"
          style={{ animationDelay: "500ms" }}
        >
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            style={BODY}
          >
            <span className="font-semibold text-foreground">
              Punya ide atau kebutuhan digital yang belum tahu harus mulai dari
              mana?
            </span>{" "}
            Ceritakan kepada kami. Konsultasi awal tanpa biaya.
          </p>
        </div>

      </div>


      <style jsx>{`

/* =========================================================
   PREMIUM FUTURISTIC BACKGROUND
========================================================= */

.tech-bg-container {
  z-index: 0;

  background:
    radial-gradient(
      circle at 50% 35%,
      color-mix(in srgb, var(--accent-color) 7%, transparent) 0%,
      transparent 45%
    );

  opacity: 1;
}


/* --- Ambient Glows --- */
.tech-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.65;
  animation: float-glow 10s ease-in-out infinite alternate;
}

/* --- Animated Grid --- */
.tech-grid-wrapper {
  position: absolute;
  inset: 0;
  perspective: 1000px;
  overflow: hidden;
  mask-image:
  radial-gradient(
    ellipse 90% 80% at 50% 40%,
    black 0%,
    black 55%,
    transparent 100%
  );

-webkit-mask-image:
  radial-gradient(
    ellipse 90% 80% at 50% 40%,
    black 0%,
    black 55%,
    transparent 100%
  );

  -webkit-mask-image: radial-gradient(circle at 50% 30%, black 10%, transparent 100%);
}

.tech-grid {
  position: absolute;

  width: 200%;
  height: 200%;

  left: -50%;
  top: -10%;

  background-image:
    linear-gradient(
      to right,
      color-mix(
        in srgb,
        var(--accent-color) 75%,
        transparent
      ) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      color-mix(
        in srgb,
        var(--accent-color) 75%,
        transparent
      ) 1px,
      transparent 1px
    );

  background-size: 60px 60px;

  transform:
    rotateX(60deg)
    translateY(0);

  animation:
    grid-move 15s linear infinite;

  opacity: 0.9;
}


@keyframes grid-move {
  0% { transform: rotateX(60deg) translateY(0); }
  100% { transform: rotateX(60deg) translateY(60px); }
}

/* --- Tech Tracking Lines --- */
.tech-tracking-lines {
  position: absolute;
  inset: 0;
}

.track-h,
.track-v {
  position: absolute;

  background:
    color-mix(
      in srgb,
      var(--accent-color) 80%,
      transparent
    );

  opacity: 0.55;

  box-shadow:
    0 0 8px
    color-mix(
      in srgb,
      var(--accent-color) 45%,
      transparent
    );
}

/* --- Data Streams --- */
.tech-streams {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.stream {
  position: absolute;
  background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
  width: 1px;
  height: 150px;
  opacity: 0;
  animation: stream-drop 4s infinite linear;
}

.s-1 { left: 20%; animation-delay: 0s; animation-duration: 3s; }
.s-2 { left: 50%; animation-delay: 2s; animation-duration: 4s; }
.s-3 { left: 80%; animation-delay: 1s; animation-duration: 3.5s; }
.s-4 { left: 35%; animation-delay: 3s; animation-duration: 5s; }

@keyframes stream-drop {
  0% { top: -150px; opacity: 1; }
  10% { opacity: 0.9; }
  90% { opacity: 0.9; }
  100% { top: 100%; opacity: 0; }
}

/* --- Decorative Circles --- */
.tech-circles {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--accent-color) 30%, transparent);
  animation: spin-slow 20s linear infinite;
}

.c-1 {
  width: 900px;
  height: 900px;

  border:
    1px dashed
    color-mix(
      in srgb,
      var(--accent-color) 25%,
      transparent
    );

  opacity: 0.85;

  box-shadow:
    0 0 40px
    color-mix(
      in srgb,
      var(--accent-color) 45%,
      transparent
    );
}

.c-2 {
  width: 875px;
  height: 875px;

  border:
    1px solid
    color-mix(
      in srgb,
      var(--accent-color) 60%,
      transparent
    );

  opacity: 0.75;

  animation-direction: reverse;
  animation-duration: 30s;
}


@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* =========================================================
   HEADLINE ENTRANCE
========================================================= */

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

  animation:
    headline-entrance
    900ms
    cubic-bezier(0.22, 1, 0.36, 1)
    200ms
    forwards;
}


/* =========================================================
   CHARACTER WAVE
========================================================= */

.headline-char {
  display: inline-block;

  transform-origin: center bottom;

  will-change:
    transform,
    color;

  animation:
    headline-wave
    5s
    cubic-bezier(0.45, 0, 0.55, 1)
    infinite;
}

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


/* =========================================================
   UNDERLINE
========================================================= */

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

  72% {
    transform: scaleX(0.96);
    opacity: 0.9;
  }

  78% {
    transform: scaleX(1.04);
    opacity: 1;
  }

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


/* =========================================================
   LOGO
========================================================= */

@keyframes logo-loop {

  0%,
  15% {
    transform:
      perspective(800px)
      translateY(0)
      rotateY(0deg)
      rotateZ(0deg)
      scale(1);
  }

  18% {
    transform:
      perspective(800px)
      translateY(-12px)
      rotateY(0deg)
      rotateZ(0deg)
      scale(1.02);
  }

  21%,
  40% {
    transform:
      perspective(800px)
      translateY(0)
      rotateY(0deg)
      rotateZ(0deg)
      scale(1);
  }

  43% {
    transform:
      perspective(800px)
      translateY(4px)
      rotateY(-15deg)
      rotateZ(-3deg)
      scale(0.95);
  }

  48% {
    transform:
      perspective(800px)
      translateY(-25px)
      rotateY(180deg)
      rotateZ(0deg)
      scale(1.05);
  }

  53% {
    transform:
      perspective(800px)
      translateY(0)
      rotateY(360deg)
      rotateZ(0deg)
      scale(1);
  }

  56% {
    transform:
      perspective(800px)
      translateY(-8px)
      rotateY(360deg)
      rotateZ(0deg)
      scale(1.02);
  }

  59% {
    transform:
      perspective(800px)
      translateY(2px)
      rotateY(360deg)
      rotateZ(0deg)
      scale(0.98);
  }

  62%,
  100% {
    transform:
      perspective(800px)
      translateY(0)
      rotateY(360deg)
      rotateZ(0deg)
      scale(1);
  }

}

.logo-loop {
  animation:
    logo-loop
    6s
    linear
    1.5s
    infinite;

  transform-style: preserve-3d;

  will-change: transform;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 768px) {

  .tech-grid-wrapper {
    mask-image: radial-gradient(circle at 50% 50%, black 10%, transparent 90%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, black 10%, transparent 90%);
  }

  .tech-grid {
    background-size: 40px 40px;
  }

  .glow-1 {
    width: 400px;
    height: 400px;
    top: -100px;
    right: -50px;
  }

  .glow-2 {
    width: 300px;
    height: 300px;
    bottom: -100px;
    left: -100px;
  }

  .c-1 {
    width: 300px;
    height: 300px;
  }

  .c-2 {
    width: 450px;
    height: 450px;
  }

}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .tech-glow,
  .tech-grid,
  .track-h,
  .track-v,
  .stream,
  .circle,
  .headline-char,
  .headline-underline,
  .logo-loop {
    animation: none !important;
  }

}

      `}</style>
    </section>
  );
}
