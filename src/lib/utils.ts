import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Font style constants ─────────────────────────────────────────────────────
export const DISPLAY = { fontFamily: "var(--font-space-grotesk), sans-serif" } as const;
export const BODY = { fontFamily: "var(--font-plus-jakarta), sans-serif" } as const;
export const HEADING = { fontFamily: "var(--font-ubuntu), sans-serif" } as const;
export const MONO = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

// ─── Color constants ──────────────────────────────────────────────────────────
export const LIME = "#84c803";
export const YELLOW = "#F5C700";
export const BLACK = "#000000";
export const WHITE = "#FFFFFF";
export const DARK = "#0F0F0D";