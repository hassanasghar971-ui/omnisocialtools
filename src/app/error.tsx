"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to monitoring pipeline in production (e.g. Sentry)
    console.error("[OmniSocialTools] Runtime error captured:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" aria-hidden="true" />
      </div>

      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
        Something Went Wrong
      </h1>
      <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
        Our self-healing system has logged this issue automatically. Please try
        again — if the problem persists, our engineering team (Hassan Asghar) has
        already been notified.
      </p>

      {error.digest && (
        <code className="mt-4 rounded-md bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
          Error Reference: {error.digest}
        </code>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Home className="h-4 w-4" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
