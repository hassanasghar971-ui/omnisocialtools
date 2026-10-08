interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="OmniSocialTools Logo"
    >
      <defs>
        <linearGradient id="ost-grad-a" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="ost-grad-b" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="18" fill="url(#ost-grad-a)" />

      {/* Orbit ring */}
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="url(#ost-grad-b)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />

      {/* Three connected nodes representing "omni" network of social platforms */}
      <circle cx="32" cy="14" r="4.5" fill="#ffffff" />
      <circle cx="18" cy="42" r="4.5" fill="#ffffff" />
      <circle cx="46" cy="42" r="4.5" fill="#ffffff" />

      <path
        d="M32 18.5L19.5 38.5M32 18.5L44.5 38.5M19.5 41.5H44.5"
        stroke="#ffffff"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}
