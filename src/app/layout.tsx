import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = `https://kaziradwanahamed.github.io${basePath}`;
const ogImage = `${basePath}/kazi.jpg`;
const faviconHref = `${basePath}/favicon.svg`;
const description =
  "AI/Software Engineer building agentic-AI systems, ML research, and full-stack products — from runtime safety for autonomous agents to on-device language models.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Kazi Radwan Ahamed",
    "AI Engineer",
    "Software Engineer",
    "Agentic AI",
    "Machine Learning",
    "LLM",
    "MCP",
    "Reinforcement Learning",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.headline}`,
    description,
    siteName: profile.name,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: faviconHref, type: "image/svg+xml" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1E1813",
  width: "device-width",
  initialScale: 1,
};

// Prevent theme flash: run before paint.
const themeInit = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
