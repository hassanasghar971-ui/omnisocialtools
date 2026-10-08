import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Download,
  ImageIcon,
  FileText,
  Hash,
  QrCode,
  Scissors,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
import AdContainer from "@/components/AdContainer";

export const metadata: Metadata = {
  title: "Free Online Social Media Downloader, Image & Text Tools",
  description:
    "Explore OmniSocialTools — the ultimate free toolkit for social media video downloading, image compression, text formatting, QR generation & more. No signup required. 100% secure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OmniSocialTools | Free Online Social Media & Productivity Tools",
    description:
      "100% free online tools: Instagram/TikTok/Facebook downloaders, image compressors, text utilities and QR generators — fast, secure, no login required.",
    url: "https://omnisocialtools.com",
  },
};

interface Category {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  count: number;
}

const CATEGORIES: Category[] = [
  {
    name: "Social Media Downloaders",
    description: "Download videos & reels from Instagram, TikTok, Facebook & YouTube without watermark.",
    href: "/tools/downloaders",
    icon: Download,
    count: 12,
  },
  {
    name: "Image Tools",
    description: "Compress, resize, convert & optimize images online free, instantly in your browser.",
    href: "/tools/image",
    icon: ImageIcon,
    count: 9,
  },
  {
    name: "Text & Writing Tools",
    description: "Word counters, case converters, paraphrasers and grammar helpers for content creators.",
    href: "/tools/text",
    icon: FileText,
    count: 14,
  },
  {
    name: "Hashtag & SEO Generators",
    description: "Generate trending hashtags, meta tags and keyword ideas for maximum social reach.",
    href: "/tools/seo",
    icon: Hash,
    count: 7,
  },
  {
    name: "QR & Barcode Tools",
    description: "Create free custom QR codes and barcodes for business, marketing & personal use.",
    href: "/tools/qr-code",
    icon: QrCode,
    count: 5,
  },
  {
    name: "Media Editors",
    description: "Crop, trim and convert video & audio files directly online — no software required.",
    href: "/tools/editor",
    icon: Scissors,
    count: 8,
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "0ms Interaction Latency",
    text: "Every tool runs on an ultra-optimized client engine for instant, lag-free results.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    text: "We never store your files. All processing respects strict GDPR & CCPA standards.",
  },
  {
    icon: TrendingUp,
    title: "Always Free",
    text: "No subscriptions, no hidden paywalls — OmniSocialTools remains 100% free forever.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white dark:from-brand-950/40 dark:to-[#0a0a0c] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-brand-100 dark:bg-brand-900/40 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-5">
            Trusted by creators worldwide · Built in Pakistan 🇵🇰
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Free Online Tools for{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Social Media &amp; Productivity
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download videos, compress images, generate hashtags, and format text —
            all in one secure, lightning-fast platform. No signup, no watermark,
            no cost.
          </p>

          {/* SEARCH BAR — Progressive enhancement, zero hydration cost */}
          <form
            action="/search"
            method="GET"
            role="search"
            aria-label="Search OmniSocialTools"
            className="mt-10 mx-auto flex max-w-xl items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 backdrop-blur-md p-2 shadow-lg shadow-brand-500/5"
          >
            <Search className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="search"
              name="q"
              placeholder="Search for a tool (e.g. Instagram downloader)…"
              className="w-full bg-transparent px-2 py-2.5 text-sm sm:text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none"
              aria-label="Search tools"
            />
            <button
              type="submit"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* TOP AD SLOT */}
      <div className="mx-auto max-w-5xl px-4">
        <AdContainer slot="adsense" adSlotId="1234567890" format="horizontal" />
      </div>

      {/* CATEGORY GRID */}
      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="categories-heading">
        <div className="mb-10 text-center">
          <h2 id="categories-heading" className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse All Tool Categories
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Hand-picked, ad-light, mobile-friendly utilities updated weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-1">
                  {cat.description}
                </p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {cat.count} tools available →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MID AD SLOT */}
      <div className="mx-auto max-w-5xl px-4">
        <AdContainer slot="adsterra" adSlotId="adsterra-native-001" format="rectangle" />
      </div>

      {/* FEATURES / TRUST SECTION */}
      <section className="bg-gray-50 dark:bg-gray-900/30 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600/10 text-brand-600 dark:text-brand-400">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LONG-TAIL SEO CONTENT BLOCK */}
      <section className="mx-auto max-w-4xl px-4 py-16 prose prose-gray dark:prose-invert prose-headings:font-bold">
        <h2>Why Choose OmniSocialTools for Free Online Social Media Downloads?</h2>
        <p>
          OmniSocialTools is a free online suite of social media downloaders, image
          compressors, text formatting utilities, and productivity generators designed
          for creators, marketers, and everyday internet users. Whether you need an
          Instagram reels downloader without watermark, a TikTok video downloader in
          HD quality, a free image compressor to shrink JPG and PNG files for faster
          websites, or a word counter and text case converter for your next blog post —
          OmniSocialTools delivers all of it without registration, hidden fees, or
          intrusive pop-ups.
        </p>
        <p>
          This platform was founded and is actively maintained by{" "}
          <Link href="/about" className="text-brand-600 dark:text-brand-400 font-semibold">
            Hassan Asghar
          </Link>{" "}
          from Sargodha, Pakistan, a software engineer specializing in full-stack web
          performance, cybersecurity hardening, and search engine optimization. Every
          tool on OmniSocialTools is engineered for sub-second load times, zero
          cumulative layout shift (CLS), and strict adherence to GDPR and CCPA privacy
          regulations — ensuring your data is never stored or shared with third
          parties.
        </p>
        <h3>Our Commitment to E-E-A-T &amp; User Trust</h3>
        <p>
          In line with Google&apos;s Experience, Expertise, Authoritativeness, and
          Trustworthiness (E-E-A-T) guidelines, OmniSocialTools publishes transparent{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/terms-of-service">Terms of Service</Link>, and{" "}
          <Link href="/disclaimer">Disclaimer</Link> documentation, alongside verified
          author credentials on our <Link href="/about">About page</Link>.
        </p>
      </section>
    </>
  );
}
