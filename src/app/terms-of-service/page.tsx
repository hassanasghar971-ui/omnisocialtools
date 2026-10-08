import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for OmniSocialTools — acceptable use, intellectual property, trademark disclaimers, liability limitations, and governing law.",
  alternates: { canonical: "/terms-of-service" },
};

const lastUpdated = "January 15, 2025";

export default function TermsOfServicePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <header className="mb-12 border-b border-slate-200/70 pb-8 dark:border-white/10">
        <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {lastUpdated} · Operated by Hassan Asghar, Sargodha, Pakistan
        </p>
      </header>

      <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-violet-600">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using OmniSocialTools (the &quot;Service&quot;),
          you agree to be bound by these Terms of Service. If you do not
          agree to these terms, please discontinue use of the Service
          immediately.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          OmniSocialTools provides a free, curated directory of third-party
          and in-house web-based utility tools for social media platforms.
          Tools are provided &quot;as is&quot; for informational and
          productivity purposes.
        </p>

        <h2>3. License & Acceptable Use</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to access and use the Service for personal, non-commercial
          purposes. You agree not to:
        </p>
        <ul>
          <li>Reverse-engineer, scrape, or republish our content without consent;</li>
          <li>Use the Service for unlawful, fraudulent, or abusive purposes;</li>
          <li>Attempt to bypass rate limits, security measures, or automate abusive traffic;</li>
          <li>Use any tool to violate the terms of service of a third-party platform (e.g., Instagram, TikTok).</li>
        </ul>

        <h2>4. Intellectual Property & Trademark Disclaimer</h2>
        <p>
          All original content, branding, UI design, and source code on
          OmniSocialTools are the intellectual property of Hassan Asghar
          unless otherwise noted.
        </p>
        <p>
          <strong>Trademark Disclaimer:</strong> Names such as Instagram,
          TikTok, YouTube, Facebook, X (Twitter), Pinterest, LinkedIn,
          Snapchat, Telegram, and WhatsApp are registered trademarks of their
          respective owners (Meta Platforms Inc., ByteDance Ltd., Google LLC,
          X Corp., etc.). OmniSocialTools references these names solely for
          descriptive and nominative purposes to identify tool compatibility.
          We are <strong>not affiliated with, endorsed by, sponsored by, or
          officially connected</strong> to any of these companies or their
          subsidiaries.
        </p>

        <h2>5. Third-Party Tools & Advertising</h2>
        <p>
          The Service displays advertisements served by Google AdSense and
          Adsterra. We do not control the content of third-party
          advertisements and are not responsible for products or services
          advertised.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Service is provided on an &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; basis without warranties of any kind, whether
          express or implied, including but not limited to merchantability,
          fitness for a particular purpose, and non-infringement.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Hassan Asghar and
          OmniSocialTools shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use
          of, or inability to use, the Service.
        </p>

        <h2>8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to the Service
          for any user who violates these Terms, without prior notice.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with
          the laws applicable in Pakistan, without regard to conflict-of-law
          principles. Any disputes shall be subject to the exclusive
          jurisdiction of the courts of Punjab, Pakistan.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We may revise these Terms at any time. Continued use of the Service
          after changes constitutes acceptance of the revised Terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions regarding these Terms can be directed via our{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </article>
  );
}
