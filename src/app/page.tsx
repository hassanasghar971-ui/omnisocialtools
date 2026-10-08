import type { Metadata } from "next";
import Link from "next/link";
import AdContainer from "@/components/AdContainer";
import { getOrigin } from "./layout";

export const metadata: Metadata = {
  title: "OmniSocialTools — Free Online Social Media Tools Directory",
  description:
    "Explore 100+ free, fast, and private tools for Instagram, TikTok, YouTube, Facebook, X, Pinterest, LinkedIn & more — all in one luxury directory.",
  alternates: { canonical: "/" },
};

const CATEGORIES = [
  { name: "Instagram Tools", slug: "instagram", emoji: "📸", count: 18 },
  { name: "TikTok Tools", slug: "tiktok", emoji: "🎵", count: 15 },
  { name: "YouTube Tools", slug: "youtube", emoji: "▶️", count: 20 },
  { name: "X / Twitter Tools", slug: "twitter-x", emoji: "🐦", count: 12 },
  { name: "Facebook Tools", slug: "facebook", emoji: "👍", count: 14 },
  { name: "Pinterest Tools", slug: "pinterest", emoji: "📌", count: 9 },
  { name: "LinkedIn Tools", slug: "linkedin", emoji: "💼", count: 10 },
  { name: "Snapchat Tools", slug: "snapchat", emoji: "👻", count: 7 },
  { name: "Telegram Tools", slug: "telegram", emoji: "✈️", count: 6 },
  { name: "WhatsApp Tools", slug: "whatsapp", emoji: "💬", count: 8 },
] as const;

export default async function HomePage() {
  const origin = await getOrigin();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OmniSocialTools",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-600 dark:text-violet-300">
            ⚡ 100+ Free Tools · Zero Signup Required
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Every{" "}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
              Social Media Tool
            </span>{" "}
            You Need. One Place.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            OmniSocialTools is a blazing-fast, privacy-first directory of
            downloaders, analyzers, and growth utilities for every major
            social platform — engineered for speed by Hassan Asghar.
          </p>

          {/* Pure-HTML search — zero JS, zero hydration cost */}
          <form
            action="/search"
            method="get"
            role="search"
            className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/60 p-2 shadow-xl shadow-violet-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <input
              type="search"
              name="q"
              placeholder="Search tools e.g. 'Instagram downloader'"
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-400"
              aria-label="Search tools"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.03] active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* AD SLOT — reserved space, zero CLS */}
      <section className="px-6 lg:px-8">
        <AdContainer provider="adsense" format="leaderboard" slot="1234567890" className="mb-16" />
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 dark:text-slate-400">
            Curated, categorized, and continuously updated tool collections.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-2xl transition group-hover:scale-150"
                />
                <span className="text-3xl">{cat.emoji}</span>
                <h3 className="mt-4 font-semibold">{cat.name}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {cat.count} free tools
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <AdContainer provider="adsterra" format="rectangle" adsterraKey="homepage-mid" className="mx-auto" />
      </section>
    </>
  );
}
