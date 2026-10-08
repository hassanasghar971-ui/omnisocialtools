import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for doesn't exist or may have moved. Explore OmniSocialTools' full directory of free social media tools instead.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Instagram Tools", href: "/category/instagram" },
  { label: "TikTok Tools", href: "/category/tiktok" },
  { label: "YouTube Tools", href: "/category/youtube" },
  { label: "Contact Support", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-pulse rounded-full bg-violet-500/20 blur-3xl"
        />
        <p className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-8xl font-black text-transparent">
          404
        </p>
      </div>

      <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
        This Tool Took a Wrong Turn
      </h1>
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The page you requested isn&apos;t available. It may have been moved,
        renamed, or never existed. Let&apos;s get you back on track.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-105 active:scale-95"
      >
        🏠 Back to Homepage
      </Link>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-slate-200/70 bg-white/60 px-4 py-2 text-xs font-medium backdrop-blur-xl transition hover:border-violet-400/50 dark:border-white/10 dark:bg-white/5"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
