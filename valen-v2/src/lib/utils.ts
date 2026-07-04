import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a Valen score (0–10) as a display string */
export function formatScore(score: number): string {
  return score.toFixed(1);
}

/** Return star string for a score out of 10 */
export function scoreToStars(score: number): string {
  const stars = Math.round(score / 2);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

/** Colour class for score badge */
export function scoreColor(score: number): string {
  if (score >= 9) return "text-accent-bright";
  if (score >= 7) return "text-gold";
  return "text-text-secondary";
}

/** Truncate text to n chars */
export function truncate(text: string, n: number): string {
  return text.length <= n ? text : text.slice(0, n).trimEnd() + "…";
}
