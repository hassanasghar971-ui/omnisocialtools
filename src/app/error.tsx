"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook point for monitoring (Sentry/LogRocket/etc.)
    console.error("[OmniSocialTools] Runtime error captured:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-pulse rounded-full bg-rose-500/20 blur-3xl"
        />
        <span className="text-6xl">⚠️</span>
      </div>

      <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Something Glitched in the System
      </h1>
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        Our self-healing engine caught an unexpected error before it reached
        you. You can retry instantly or head back to safety.
      </p>

      {error.digest && (
        <p className="mt-2 font-mono text-xs text-slate-400">
          Reference: {error.digest}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-105 active:scale-95"
        >
          🔄 Try Again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-slate-200/70 bg-white/60 px-6 py-3 text-sm font-semibold backdrop-blur-xl transition hover:border-violet-400/50 dark:border-white/10 dark:bg-white/5"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
