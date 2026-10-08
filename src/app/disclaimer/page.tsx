import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "General disclaimer for OmniSocialTools covering accuracy of information, third-party trademarks, affiliate links, and no professional advice notice.",
  alternates: { canonical: "/disclaimer" },
};

const lastUpdated = "January 15, 2025";

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <header className="mb-12 border-b border-slate-200/70 pb-8 dark:border-white/10">
        <h1 className="text-4xl font-extrabold tracking-tight">Disclaimer</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {lastUpdated} · Published by Hassan Asghar, Sargodha, Pakistan
        </p>
      </header>

      <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-violet-600">
        <h2>1. General Information Disclaimer</h2>
        <p>
          All information, tools, and content provided on OmniSocialTools are
          offered in good faith for general informational and utility
          purposes only. We make no warranty, express or implied, regarding
          the accuracy, adequacy, validity, reliability, or completeness of
          any content on this Service.
        </p>

        <h2>2. No Professional Advice</h2>
        <p>
          Content on OmniSocialTools, including any blog posts or guides,
          does not constitute legal, financial, marketing, or professional
          advice. You should consult a qualified professional before making
          decisions based on information found here.
        </p>

        <h2>3. Trademark & Brand Disclaimer</h2>
        <p>
          This website references third-party social media platforms and
          brand names (Instagram, TikTok, YouTube, Facebook, X/Twitter,
          Pinterest, LinkedIn, Snapchat, Telegram, WhatsApp) strictly for
          identification and interoperability purposes. All such trademarks
          are the sole property of their respective owners. OmniSocialTools
          claims <strong>no ownership</strong> of these trademarks and has{" "}
          <strong>no official affiliation, partnership, or sponsorship</strong>{" "}
          with any of these companies.
        </p>

        <h2>4. Tool Accuracy & Third-Party Dependency</h2>
        <p>
          Some tools listed in our directory rely on third-party APIs or
          platform structures that may change without notice. We strive to
          keep tools functional and updated but cannot guarantee uninterrupted
          availability, accuracy of output, or compatibility with every
          platform update.
        </p>

        <h2>5. External Links Disclaimer</h2>
        <p>
          OmniSocialTools may contain links to external websites not
          operated by us. We have no control over, and assume no
          responsibility for, the content, privacy policies, or practices of
          any third-party websites or services.
        </p>

        <h2>6. Affiliate & Advertising Disclosure</h2>
        <p>
          This Service displays third-party advertisements via Google
          AdSense and Adsterra, and may in the future contain affiliate
          links. We may earn a commission or ad revenue at no additional cost
          to you. This does not influence the objectivity of our tool
          directory listings.
        </p>

        <h2>7. Errors & Omissions</h2>
        <p>
          While we strive for accuracy, the Service may contain typographical
          errors or inaccuracies. We reserve the right to correct errors and
          update content at any time without prior notice.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          Under no circumstance shall Hassan Asghar or OmniSocialTools be
          held liable for any loss or damage incurred as a result of the use
          of this Service or reliance on any information provided herein.
        </p>

        <h2>9. Contact</h2>
        <p>
          For questions regarding this Disclaimer, please reach out via our{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </article>
  );
}
