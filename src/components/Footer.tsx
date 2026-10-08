import Link from "next/link";
import Logo from "./Logo";

const CATEGORY_LINKS = [
  { name: "Instagram Tools", href: "/category/instagram" },
  { name: "TikTok Tools", href: "/category/tiktok" },
  { name: "YouTube Tools", href: "/category/youtube" },
  { name: "Facebook Tools", href: "/category/facebook" },
  { name: "X / Twitter Tools", href: "/category/twitter-x" },
  { name: "Pinterest Tools", href: "/category/pinterest" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-200/70 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="text-lg font-bold">
                Omni<span className="text-violet-500">Social</span>Tools
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              A free, privacy-first directory of social media tools —
              engineered for speed and trust. Independently built and
              maintained from Sargodha, Pakistan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Legal & Company
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row">
          <p>
            © {year} OmniSocialTools. All rights reserved. All third-party
            trademarks belong to their respective owners.
          </p>
          <p>
            Engineered with ⚡ by{" "}
            <Link href="/about" className="font-semibold text-violet-600 hover:underline dark:text-violet-400">
              Hassan Asghar
            </Link>{" "}
            — Sargodha, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
