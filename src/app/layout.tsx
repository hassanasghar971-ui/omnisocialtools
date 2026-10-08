import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const SITE_NAME = "OmniSocialTools";
const FALLBACK_ORIGIN = "https://omnisocialtools.com";

/**
 * Environment-Agnostic Origin Resolver.
 * Uses Next.js 15 async `headers()` API to dynamically resolve the correct
 * canonical origin (localhost, staging, Vercel preview, or production)
 * so metadataBase + canonicals NEVER mismatch in Google Search Console.
 */
export async function getOrigin(): Promise<string> {
  try {
    const headersList = await headers();
    const host =
      headersList.get("x-forwarded-host") ??
      headersList.get("host") ??
      null;
    const protocol = headersList.get("x-forwarded-proto") ?? "https";
    if (!host) return process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_ORIGIN;
    return `${protocol}://${host}`;
  } catch {
    return process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_ORIGIN;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getOrigin();

  return {
    metadataBase: new URL(origin),
    title: {
      default: `${SITE_NAME} — Free Online Social Media Tools Directory`,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "OmniSocialTools is the ultimate free directory of social media tools — downloaders, analyzers, generators, and growth utilities for Instagram, TikTok, YouTube, Facebook, X, Pinterest & more. Built by Hassan Asghar.",
    applicationName: SITE_NAME,
    authors: [{ name: "Hassan Asghar", url: `${origin}/about` }],
    creator: "Hassan Asghar",
    publisher: SITE_NAME,
    generator: "Next.js 15",
    keywords: [
      "social media tools",
      "free online tools",
      "instagram downloader",
      "tiktok tools",
      "youtube tools",
      "social media toolkit",
      "Hassan Asghar",
    ],
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: origin,
      siteName: SITE_NAME,
      title: `${SITE_NAME} — Free Online Social Media Tools Directory`,
      description:
        "Discover 100+ free tools for every social platform — fast, private, and ad-light.",
      images: [
        {
          url: `${origin}/og-image.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — Free Online Social Media Tools Directory`,
      description:
        "Discover 100+ free tools for every social platform — fast, private, and ad-light.",
      images: [`${origin}/og-image.png`],
      creator: "@omnisocialtools",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
    },
    category: "technology",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07070b" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const origin = await getOrigin();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmniSocialTools",
    url: origin,
    logo: `${origin}/logo.png`,
    description:
      "Free directory of 100+ social media tools built for speed, privacy, and reliability.",
    founder: {
      "@type": "Person",
      name: "Hassan Asghar",
      jobTitle: "Founder & Principal Software Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sargodha",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    sameAs: [
      "https://twitter.com/omnisocialtools",
      "https://github.com/hassanasghar",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme init — runs before paint to prevent FOUC / theme flash (0 CLS) */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900 dark:bg-[#07070b] dark:text-slate-100 transition-colors duration-300 selection:bg-violet-500/30`}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {/* Ambient glow background — pure CSS, zero JS, zero CLS */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.25),transparent)]"
          />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
            process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-0000000000000000"
          }`}
          crossOrigin="anonymous"
        />

        {/* Adsterra Social Bar — lazy-loaded post-interaction to protect TBT/INP */}
        <Script id="adsterra-social-bar" strategy="lazyOnload">
          {`
            (function(){
              try {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = '${
                  process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SRC ??
                  "//omnisocialtools.com/placeholder/socialbar-invoke.js"
                }';
                s.async = true;
                document.body.appendChild(s);
              } catch(e) {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
