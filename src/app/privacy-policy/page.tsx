import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OmniSocialTools Privacy Policy covering GDPR, CCPA, Google AdSense DART cookie usage, data collection, and user rights. Reviewed and maintained by Hassan Asghar.",
  alternates: { canonical: "/privacy-policy" },
};

const lastUpdated = "January 15, 2025";

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <header className="mb-12 border-b border-slate-200/70 pb-8 dark:border-white/10">
        <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {lastUpdated} · Reviewed by Hassan Asghar, Founder of
          OmniSocialTools, Sargodha, Pakistan
        </p>
      </header>

      <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-violet-600">
        <p>
          OmniSocialTools (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates this website (the &quot;Service&quot;) as a free directory
          of social media utility tools. This Privacy Policy explains how we
          collect, use, disclose, and safeguard information when you visit
          our platform, in full compliance with the{" "}
          <strong>General Data Protection Regulation (GDPR)</strong>, the{" "}
          <strong>California Consumer Privacy Act (CCPA)</strong>, and Google
          AdSense advertising policies.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect minimal data necessary to operate and improve the
          Service, including:
        </p>
        <ul>
          <li>
            <strong>Usage Data:</strong> IP address (anonymized), browser
            type, device information, pages visited, and referral source,
            collected via standard server logs and privacy-respecting
            analytics.
          </li>
          <li>
            <strong>Contact Data:</strong> Name and email address, only when
            voluntarily submitted through our Contact form.
          </li>
          <li>
            <strong>Cookies & Similar Technologies:</strong> Used for theme
            preference, session continuity, and advertising personalization
            (see Section 4).
          </li>
        </ul>

        <h2>2. GDPR Compliance — Rights of EU/EEA Users</h2>
        <p>
          If you are located in the European Economic Area, you have the
          right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction or deletion of inaccurate data;</li>
          <li>Object to or restrict certain processing activities;</li>
          <li>Request data portability;</li>
          <li>Lodge a complaint with your local Data Protection Authority.</li>
        </ul>
        <p>
          Our legal basis for processing is legitimate interest (service
          operation, security, and fraud prevention) and, where applicable,
          your explicit consent (advertising cookies).
        </p>

        <h2>3. CCPA Compliance — Rights of California Residents</h2>
        <p>
          Under the CCPA, California residents have the right to know what
          personal information is collected, request deletion of personal
          information, and opt out of the &quot;sale&quot; of personal
          information. OmniSocialTools does not sell personal information to
          third parties. Advertising partners may use cookies for interest-based
          advertising, which you may opt out of via the methods described below.
        </p>

        <h2>4. Advertising, Cookies & the Google AdSense DART Cookie</h2>
        <p>
          We use third-party advertising companies, including{" "}
          <strong>Google AdSense</strong> and <strong>Adsterra</strong>, to
          serve ads when you visit our Service. These vendors may use cookies
          — including Google&apos;s <strong>DART cookie</strong> — to serve
          ads based on your prior visits to this and other websites.
        </p>
        <ul>
          <li>
            Google&apos;s use of advertising cookies enables it and its
            partners to serve ads based on your visit to our site and/or
            other sites on the Internet.
          </li>
          <li>
            You may opt out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>{" "}
            or{" "}
            <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
              www.aboutads.info/choices
            </a>.
          </li>
          <li>
            Third-party vendors, including Google, use cookies to serve ads
            based on a user&apos;s prior visits to our website or other
            websites in accordance with their own privacy policies.
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard technical and organizational
          safeguards — including HTTPS encryption, secure headers, and
          regular dependency audits — to protect your data against
          unauthorized access, alteration, or destruction.
        </p>

        <h2>6. Children&apos;s Privacy (COPPA)</h2>
        <p>
          OmniSocialTools is not directed at children under 13. We do not
          knowingly collect personal information from children. If you
          believe a child has provided us with personal data, contact us
          immediately for removal.
        </p>

        <h2>7. Third-Party Links & Trademark Notice</h2>
        <p>
          Our Service may link to third-party platforms (Instagram, TikTok,
          YouTube, Facebook, etc.). All trademarks, logos, and brand names
          referenced are the property of their respective owners.
          OmniSocialTools is an independent service and is{" "}
          <strong>not affiliated with, endorsed by, or sponsored by</strong>{" "}
          any of these platforms.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Material changes
          will be reflected by updating the &quot;Last updated&quot; date
          above. Continued use of the Service constitutes acceptance of the
          revised policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          For privacy-related inquiries, data access requests, or GDPR/CCPA
          exercise of rights, contact Hassan Asghar directly via our{" "}
          <a href="/contact">Contact page</a>, or by mail at Sargodha, Punjab,
          Pakistan.
        </p>
      </div>
    </article>
  );
}
