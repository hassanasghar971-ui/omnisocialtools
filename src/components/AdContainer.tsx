"use client";

import { useEffect, useRef, useState } from "react";

type AdFormat =
  | "leaderboard"
  | "rectangle"
  | "banner"
  | "skyscraper"
  | "square"
  | "social-bar";

type AdProvider = "adsense" | "adsterra";

interface AdContainerProps {
  provider: AdProvider;
  format?: AdFormat;
  slot?: string;
  adsterraKey?: string;
  className?: string;
}

/** Fixed dimension table — the CORE of our Zero-CLS strategy.
 *  Space is reserved at render time, BEFORE any ad script executes. */
const DIMENSIONS: Record<AdFormat, { width: number; height: number }> = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  banner: { width: 468, height: 60 },
  skyscraper: { width: 160, height: 600 },
  square: { width: 250, height: 250 },
  "social-bar": { width: 320, height: 50 },
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdContainer({
  provider,
  format = "rectangle",
  slot,
  adsterraKey,
  className = "",
}: AdContainerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const hasPushed = useRef(false);

  const dims = DIMENSIONS[format];

  useEffect(() => {
    if (provider !== "adsense" || hasPushed.current) return;

    const node = containerRef.current;
    if (!node) return;

    // Lazy-push ad only when the slot is near the viewport -> protects INP/TBT
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPushed.current) {
            try {
              window.adsbygoogle = window.adsbygoogle || [];
              window.adsbygoogle.push({});
              hasPushed.current = true;
              setIsLoaded(true);
            } catch {
              /* fail silently, skeleton remains as graceful fallback */
            }
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [provider]);

  useEffect(() => {
    if (provider === "adsterra") {
      const timer = setTimeout(() => setIsLoaded(true), 400);
      return () => clearTimeout(timer);
    }
  }, [provider]);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50/60 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] ${className}`}
      style={{
        minHeight: dims.height,
        maxWidth: dims.width,
      }}
      aria-label="Advertisement"
      data-ad-provider={provider}
    >
      {/* Skeleton shimmer — occupies exact reserved space to guarantee CLS = 0 */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200/40 via-slate-100/60 to-slate-200/40 transition-opacity duration-500 dark:from-slate-800/40 dark:via-slate-700/40 dark:to-slate-800/40 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {provider === "adsense" && (
        <ins
          ref={insRef}
          className="adsbygoogle relative z-10"
          style={{ display: "block", width: "100%", height: dims.height }}
          data-ad-client={
            process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-0000000000000000"
          }
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}

      {provider === "adsterra" && (
        <div
          id={`adsterra-slot-${adsterraKey ?? format}`}
          className="relative z-10 h-full w-full"
          style={{ minHeight: dims.height }}
        />
      )}

      <span className="pointer-events-none absolute bottom-1 right-2 z-20 text-[9px] uppercase tracking-wide text-slate-400/70">
        Advertisement
      </span>
    </div>
  );
}
