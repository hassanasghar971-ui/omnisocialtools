import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://omnisocialtools.com";
const SITE_NAME = "OmniSocialTools";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OmniSocialTools | Free Online Social Media & Productivity Tools",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "OmniSocialTools offers 100% free, fast & secure online social media downloaders, image converters, text utilities and productivity generators. Engineered by Hassan Asghar, Sargodha, Pakistan.",
  keywords: [
    "OmniSocialTools",
    "free online tools",
    "social media downloader",
    "instagram video downloader free",
    "tiktok downloader no watermark",
    "image compressor online free",
    "text case converter tool",
    "Hassan Asghar Sargodha",
    "free productivity tools 2025",
  ],
  authors: [{ name: "Hassan Asghar", url: `${SITE_URL}/about` }],
  creator: "Hassan Asghar",
  publisher: "OmniSocialTools",
  formatDetection: { email: false, address: false, telephone: false },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "OmniSocialTools | Free Online Social Media & Productivity Tools",
    description:
      "Free, fast & secure online tools for social media, images, text & productivity — built with care by Hassan Asghar.",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "OmniSocialTools Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniSocialTools | Free Online Tools",
    description: "Free, fast & secure online social media & productivity tools.",
    images: ["/logo.svg"],
    creator: "@omnisocialtools",
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  category: "technology",
  applicationName: SITE_NAME,
  referrer: "strict-origin-when-cross-origin",
  verification: {
    google: "google-site-verification-code-placeholder",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

// Inline script to prevent theme flash (FOUC) — executes before paint
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('ost-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    founder: {
      "@type": "Person",
      name: "Hassan Asghar",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sargodha",
        addressCountry: "PK",
      },
    },
    sameAs: [
      "https://www.facebook.com/omnisocialtools",
      "https://twitter.com/omnisocialtools",
      "https://www.linkedin.com/company/omnisocialtools",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Free online social media, image, text & productivity tools platform.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    author: {
      "@type": "Person",
      name: "Hassan Asghar",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          suppressHydrationWarning
        />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body
        className="font-sans antialiased bg-white text-gray-900 dark:bg-[#0a0a0c] dark:text-gray-100 transition-colors duration-200 selection:bg-brand-500/30"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Adsterra Loader (invoke + config handled inside AdContainer per-slot) */}
        <Script id="adsterra-base-config" strategy="lazyOnload">
          {`window.atOptions = window.atOptions || {};`}
        </Script>
      </body>
    </html>
  );
}
