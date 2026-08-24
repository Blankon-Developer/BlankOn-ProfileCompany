import { DISPLAY, BODY, MONO, HEADING } from "@/lib/utils";
import Image from "next/image";

interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

/* ─────────────────────────────────────────────
   FUTURISTIC HEADER VISUAL
   ───────────────────────────────────────────── */

function HeaderVisual({
  side,
}: {
  side: "left" | "right";
}) {
  const reverse = side === "right";

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        top-1/2
        -translate-y-1/2
        ${reverse ? "right-[-120px] xl:right-[-0px]" : "left-[-120px] xl:left-[-0px]"}
        hidden lg:block
        w-[360px]
        h-[360px]
        xl:w-[430px]
        xl:h-[430px]
        opacity-[0.9]
        select-none
      `}
    >
      <svg
        viewBox="0 0 430 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-full w-full ${reverse ? "-scale-x-100" : ""}`}
      >
        <defs>
          {/* Fine grid */}
          <pattern
            id={`grid-${side}`}
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0H0V10"
              className="stroke-foreground"
              strokeWidth="0.7"
            />
          </pattern>

          {/* Fade mask */}
          <radialGradient id={`fade-${side}`}>
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id={`mask-${side}`}>
            <rect
              width="430"
              height="430"
              fill={`url(#fade-${side})`}
            />
          </mask>
        </defs>

        <g mask={`url(#mask-${side})`}>
          {/* Technical grid */}
          <rect width="430" height="430" fill={`url(#grid-${side})`} />

          {/* Outer orbital system */}
          <circle
            cx="215"
            cy="215"
            r="156"
            className="stroke-foreground"
            strokeWidth="0.5"
          />

          <circle
            cx="215"
            cy="215"
            r="118"
            className="stroke-foreground"
            strokeWidth="1"
            strokeDasharray="4 10"
          />

          <circle
            cx="215"
            cy="215"
            r="94"
            className="stroke-foreground"
            strokeWidth="1"
          />

          {/* Large rotating orbit */}
          <g
            className="origin-center animate-[spin_32s_linear_infinite]"
            style={{ transformOrigin: "215px 215px" }}
          >
            <ellipse
              cx="215"
              cy="215"
              rx="158"
              ry="52"
              transform="rotate(-28 215 215)"
              className="stroke-foreground"
              strokeWidth="1"
            />

            <circle
              cx="371"
              cy="215"
              r="3"
              style={{
                fill: "var(--accent-color)",
              }}
            />

            <circle
              cx="59"
              cy="215"
              r="1.5"
              className="fill-foreground"
            />
          </g>

          {/* Secondary orbit */}
          <g
            className="origin-center animate-[spin_20s_linear_infinite_reverse]"
            style={{ transformOrigin: "215px 215px" }}
          >
            <ellipse
              cx="215"
              cy="215"
              rx="118"
              ry="35"
              transform="rotate(58 215 215)"
              className="stroke-foreground"
              strokeWidth="1"
            />

            <circle
              cx="333"
              cy="215"
              r="2"
              className="fill-foreground"
            />
          </g>

          {/* Coordinate cross */}
          <g className="stroke-foreground" strokeWidth="1">
            <path d="M215 38V78" />
            <path d="M215 352V392" />
            <path d="M38 215H78" />
            <path d="M352 215H392" />
          </g>

          {/* Corner brackets */}
          <g
            className="stroke-foreground"
            strokeWidth="1"
          >
            <path d="M104 78H78V104" />
            <path d="M326 78H352V104" />
            <path d="M78 326V352H104" />
            <path d="M352 326V352H326" />
          </g>

          {/* Center architecture */}
          <g>
            <circle
              cx="215"
              cy="215"
              r="32"
              className="stroke-foreground"
              strokeWidth="1"
            />

            <circle
              cx="215"
              cy="215"
              r="19"
              className="stroke-foreground"
              strokeWidth="1"
              strokeDasharray="3 5"
            />

            <circle
              cx="215"
              cy="215"
              r="4"
              style={{
                fill: "var(--accent-color)",
              }}
              className="animate-pulse"
            />
          </g>

          {/* Signal points */}
          <g>
            <circle
              cx="116"
              cy="125"
              r="2"
              style={{
                fill: "var(--accent-color)",
              }}
              className="animate-[pulse_3s_ease-in-out_infinite]"
            />

            <circle
              cx="315"
              cy="118"
              r="1.5"
              className="fill-foreground animate-[pulse_4s_ease-in-out_infinite]"
            />

            <circle
              cx="300"
              cy="315"
              r="2"
              className="fill-foreground animate-[pulse_2.5s_ease-in-out_infinite]"
            />

            <circle
              cx="120"
              cy="300"
              r="1"
              style={{
                fill: "var(--accent-color)",
              }}
              className="animate-[pulse_3.5s_ease-in-out_infinite]"
            />
          </g>

          {/* Fine radial lines */}
          <g className="stroke-foreground/[0.4]" strokeWidth="0.5">
            <path d="M215 215L116 125" />
            <path d="M215 215L315 118" />
            <path d="M215 215L300 315" />
            <path d="M215 215L120 300" />
          </g>

          {/* Moving scan line */}
          <rect
            x="60"
            y="60"
            width="0.5"
            height="310"
            style={{
              fill: "var(--accent-color)",
              opacity: 1,
            }}
            className="animate-[scan_7s_ease-in-out_infinite]"
          />
        </g>
      </svg>
    </div>
  );
}

export function PageHeader({
  tag,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        pt-[130px]
        md:pt-[130px]
        pb-16
        md:pb-12
        px-6
      "
    >
      {/* Decorative systems */}
      <HeaderVisual side="left" />
      <HeaderVisual side="right" />

      {/* Very subtle atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[200px]
          rounded-full
          blur-3xl
          opacity-[0.15]
          -z-10
        "
        style={{
          backgroundColor: "var(--accent-color)",
        }}
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          text-center
        "
      >
        {/* Images */}
        <div className="flex justify-center mb-4">
          <Image
            src="/BlankOn Logo.svg"
            alt="BlankOn Logo"
            width={48}
            height={48}
            className="object-contain block dark:hidden"
          />
          <Image
            src="/BlankOn Logo Dark-Mode.svg"
            alt="BlankOn Logo"
            width={48}
            height={48}
            className="object-contain hidden dark:block"
          />
        </div>

        {/* TAG */}
        <div
          className="
            inline-flex
            items-center
            gap-3
            mb-8
            opacity-0
            animate-fade-up
          "
          style={{
            animationDelay: "100ms",
          }}
        >
          <span
            className="h-px w-8"
            style={{
              backgroundColor: "var(--accent-color)",
            }}
          />

          <span
            className="
              text-[10px]
              md:text-[11px]
              uppercase
              tracking-[0.28em]
              font-semibold
              text-muted-foreground
            "
            style={HEADING}
          >
            {tag}
          </span>

          <span
            className="h-px w-8"
            style={{
              backgroundColor: "var(--accent-color)",
            }}
          />
        </div>

        {/* TITLE */}
        <h1
          className="
            mx-auto
            max-w-4xl
            text-[2.8rem]
            sm:text-5xl
            md:text-6xl
            lg:text-[4rem]
            font-black
            leading-[0.94]
            tracking-[-0.06em]
            text-foreground
            opacity-0
            animate-fade-up
          "
          style={{
            ...DISPLAY,
            animationDelay: "180ms",
          }}
        >
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-8
            pb-20
            max-w-3xl
            text-base
            md:text-lg
            leading-[1.75]
            text-muted-foreground
            opacity-0
            animate-fade-up
          "
          style={{
            ...BODY,
            animationDelay: "280ms",
          }}
        >
          {description}
        </p>

        {/* Brand Signature */}
        <div
          className="
    flex flex-col
    items-center
    justify-center
    mt-10
    opacity-0
    animate-fade-up
  "
          style={{
            animationDelay: "360ms",
          }}
        >
          {/* Brand */}
          <span
            className="
      text-[14px]
      font-semibold
      leading-none
      tracking-[-0.02em]
      text-[var(--accent-color)]
    "
            style={MONO}
          >
            BlankOn Tech
          </span>

          {/* Tagline */}
          <div
            className="
      flex items-center
      justify-center
      mt-1
    "
          >
            <span
              className="
        text-[10px]
        font-medium
        uppercase
        tracking-[0.24em]
        text-[#8f8f8f]
        whitespace-nowrap
      "
              style={MONO}
            >
              &ldquo;We Together, Deploy The Future&rdquo;
            </span>


          </div>
        </div>
      </div>

      {/* Bottom system line */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-16
          md:mt-24
          max-w-8xl
          opacity-0
          animate-fade-up
        "
        style={{
          animationDelay: "440ms",
        }}
      >
        <div className="relative flex items-center">
          <div className="h-px flex-1 bg-foreground/[0.08]" />

          {/* Left marker */}
          <div
            className="
              absolute
              left-0
              top-0.5
              w-2
              h-2
              rotate-45
            "
            style={{
              backgroundColor: "var(--accent-color)",
            }}
          />

          {/* Center marker */}
          <div
            className="
              mx-5
              w-3
              h-3
              rotate-45
            "
            style={{
              backgroundColor: "var(--accent-color)",
            }}
          />

          <div className="h-px flex-1 bg-foreground/[0.08]" />

          {/* Right marker */}
          <div
            className="
              absolute
              right-0
              top-0.5
              w-2
              h-2
              rotate-45
            "
            style={{
              backgroundColor: "var(--accent-color)",
            }}
          />
        </div>
      </div>
    </section>
  );
}