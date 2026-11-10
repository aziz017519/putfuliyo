import type { CSSProperties } from "react";

/** Typed helper for the scroll-reveal stagger delay custom property. */
export const revealDelay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;
