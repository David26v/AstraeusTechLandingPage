import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // 👈 Critical for Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // 👈 Critical for Core Web Vitals
});

export const metadata = {

  title: "Make Your Dreams Secure and Innovative — Come Through | Dream-Driven Tech Studio",
  description:
    "Turn your boldest ideas into secure, innovative digital realities. We help dreamers in the Philippines build websites, apps, and digital experiences that last — without the corporate noise.",

  openGraph: {
    type: "website",
    locale: "en_PH", 
    url: "https://astraeus-tech.vercel.app",
    title: "Make Your Dreams Secure and Innovative — Come Through",
    description:
      "Turn your boldest ideas into secure, innovative digital realities. We help dreamers in the Philippines build websites, apps, and digital experiences that last — without the corporate noise.",
    images: [
      {
        url: "/images/astraeus-tech.jpeg", 
        width: 1200,
        height: 630,
        alt: "Make Your Dreams Secure and Innovative — Digital Creation for Dreamers in the Philippines",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Make Your Dreams Secure and Innovative — Come Through",
    description:
      "Turn your boldest ideas into secure, innovative digital realities. We help dreamers in the Philippines build websites, apps, and digital experiences that last — without the corporate noise.",
    creator: "@YourHandle", 
    images: ["/images/astraeus-tech.jpeg"], 
  },

  alternates: {
    canonical: "https://astraeus-tech.vercel.app", 
  },

  // 🧠 Keywords for search engines
  keywords: [
    "make your dreams real",
    "digital creation Philippines",
    "web development for dreamers",
    "innovative app development",
    "secure software Philippines",
    "no corporate tech",
    "build your vision",
    "Philippines tech studio",
    "dream-driven technology",
    "custom web development PH",
  ],

  // 🤖 Robots & Indexing
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

  // 📍 Regional & Language
  authors: [{ name: "Your Name" }],
  generator: "Next.js",
  applicationName: "Come Through — Dream-Driven Tech",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 👇 Schema.org JSON-LD — boosts rich snippets in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Come Through",
              description:
                "We help dreamers in the Philippines turn bold ideas into secure, innovative digital realities — without corporate jargon.",
              url: "https://astraeus-tech.vercel.app/", 
              logo: "https://https://astraeus-tech.vercel.app/images/astraeus-tech.jpeg", 
              address: {
                "@type": "PostalAddress",
                addressLocality: "Philippines",
                addressCountry: "PH",
              },
              telephone: "+639762594374",
              sameAs: [
                "https://facebook.com/yourpage",
                "https://instagram.com/yourhandle",
                "https://linkedin.com/company/yourcompany",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}