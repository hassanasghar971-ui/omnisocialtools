"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type AdNetwork = "adsense" | "adsterra";
type AdFormat = "horizontal" | "rectangle" | "vertical" | "auto";

interface AdContainerProps {
  slot: AdNetwork;
  adSlotId: string;
  format?: AdFormat;
  className?: string;
  /** Adsterra-specific key, required when slot === "adsterra" */
  adsterraKey?: string;
}

const FORMAT_DIMENSIONS: Record<AdFormat, { width: number; height: number }> = {
  horizontal: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  vertical: { width: 160, height: 600 },
  auto: { width: 320, height: 100 },
};

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
    atOptions?: Record<string, unknown>;
  }
}

/**
 * AdContainer — Zero Cumulative Layout Shift (CLS) Ad Framework
 * Reserves exact pixel space BEFORE network requests fire, eliminating
 * layout jank for both Google AdSense and Adsterra placements.
 *
 * Author: Hassan Asghar — OmniSocialTools
 */
export default function AdContainer({
  slot,
  adSlotId,
  format = "auto",
  className = "",
  adsterraKey,
}: AdContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dimensions = FORMAT_DIMENSIONS[format];

  // Lazy-load ads only when near viewport — protects Core Web Vitals (LCP/INP)
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    try {
      if (slot === "adsense") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        setIsLoaded(true);
      }

      if (slot === "adsterra" && containerRef.current) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          atOptions = {
            key: '${adsterraKey ?? adSlotId}',
            format: 'iframe',
            height: ${dimensions.height},
            width: ${dimensions.width},
            params: {}
          };
        `;
        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src = `//www.highperformanceformat.com/${adsterraKey ?? adSlotId}/invoke.js`;
        invokeScript.async = true;
        invokeScript.onload = () => setIsLoaded(true);

        containerRef.current.appendChild(script);
        containerRef.current.appendChild(invokeScript);
      }
    } catch {
      // Ad blockers or network failures must never break the page
      setIsLoaded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, slot, adSlotId, adsterraKey]);

  const reservedStyle: CSSProperties = {
    minHeight: `${dimensions.height}px`,
    maxWidth: `${dimensions.width}px`,
  };

  return (
    <div
      className={`mx-auto my-6 flex w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-gray-200 dark:border-gray-800 ${className}`}
      style={reservedStyle}
      ref={containerRef}
      data-ad-network={slot}
      aria-label="Advertisement"
      role="complementary"
    >
      {!isLoaded && (
        <div
          className="relative h-full w-full animate-shimmer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/60"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
            backgroundSize: "1000px 100%",
            ...reservedStyle,
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-600">
            Advertisement
          </span>
        </div>
      )}

      {slot === "adsense" && isVisible && (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-0000000000000000"
          data-ad-slot={adSlotId}
          data-ad-format={format === "auto" ? "auto" : "rectangle"}
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
