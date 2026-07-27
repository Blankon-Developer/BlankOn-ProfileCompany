import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Font style constants ─────────────────────────────────────────────────────
export const DISPLAY = { fontFamily: "var(--font-space-grotesk), sans-serif" } as const;
export const BODY = { fontFamily: "var(--font-plus-jakarta), sans-serif" } as const;
export const MONO = { fontFamily: "var(--font-jetbrains-mono), monospace" } as const;

// ─── Color constants ──────────────────────────────────────────────────────────
export const LIME = "#C8FF00";
export const DARK = "#0F0F0D";
