import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, MapPin } from "lucide-react";

const TOOL_LINKS = [
  { label: "Social Media Downloaders", href: "/tools/downloaders" },
  { label: "Image Compressor", href: "/tools/image" },
  { label: "Text Case Converter", href: "/tools/text" },
  { label: "QR Code Generator", href: "/tools/qr-code" },
];

const COMPANY_LINKS = [
  { label: "About Hassan Asghar", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hassan Asghar",
    jobTitle: "Founder & Principal Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "OmniSocialTools",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sargodha",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    url: "https://omnisocialtools.com/about",
  };

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
              OmniSocialTools
            </h3>
            <p className="mt-3 max-w-sm text-sm text-gray-600 dark:text-gray-400">
              A free, secure, and high-performance toolkit for social media
              downloading, image processing, and text productivity — built and
              maintained with precision engineering standards.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 text-brand-600" aria-hidden="true" />
              <span>Sargodha, Punjab, Pakistan</span>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/omnisocialtools"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OmniSocialTools on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-brand-600"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/omnisocialtools"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OmniSocialTools on Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-brand-600"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/omnisocialtools"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OmniSocialTools on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-brand-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/hassanasghar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hassan Asghar on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-colors hover:text-brand-600"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
              Tools
            </h4>
            <ul className="mt-4 space-y-2.5">
              {TOOL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-gray-500 dark:text-gray-500 sm:text-left">
              © {year} OmniSocialTools. All rights reserved. Founded &amp; engineered
              by{" "}
              <Link href="/about" className="font-semibold text-brand-600 dark:text-brand-400">
                Hassan Asghar
              </Link>{" "}
              — Sargodha, Pakistan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-gray-500 dark:text-gray-500 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-400 dark:text-gray-600 sm:text-left">
            This website uses Google AdSense and Adsterra to display ads. Third-party
            vendors, including Google, use cookies (such as the DART cookie) to serve
            ads based on prior visits to this and other websites. Users may opt out of
            personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Google Ads Settings
            </a>
            . We comply fully with GDPR and CCPA data protection standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
