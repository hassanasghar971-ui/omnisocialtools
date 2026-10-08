import type { Metadata } from "next";
import Link from "next/link";
import { Home, Search, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you are looking for does not exist on OmniSocialTools. Browse our free social media, image and text tools instead.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/404" },
};

const POPULAR_LINKS = [
  { label: "Social Media Downloaders", href: "/tools/downloaders" },
  { label: "Image Compressor", href: "/tools/image" },
  { label: "Text Tools", href: "/tools/text" },
  { label: "About Hassan Asghar", href: "/about" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
        <Compass className="h-10 w-10 text-brand-600 dark:text-brand-400" aria-hidden="true" />
      </div>

      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
        404
      </h1>
      <h2 className="mt-3 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl">
        Oops — This Page Took a Wrong Turn
      </h2>
      <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
        The page you requested could not be found. It may have been moved,
        renamed, or never existed. Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Back to Homepage
        </Link>
        <Link
          href="/search"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Search className="h-4 w-4" />
          Search Tools
        </Link>
      </div>

      <div className="mt-12 w-full max-w-md">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600">
          Popular Pages
        </h3>
        <ul className="grid grid-cols-2 gap-3">
          {POPULAR_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-2.5 text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors hover:border-brand-500 hover:text-brand-600"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
