import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrisschuhmacher.com"),
  title: "Chris Schuhmacher | Software Engineer",
  description:
    "Senior Frontend / Product Engineer with 8+ years building scalable web applications with React and TypeScript.",
  openGraph: {
    title: "Chris Schuhmacher | Software Engineer",
    description:
      "Senior Frontend / Product Engineer with 8+ years building scalable web applications with React and TypeScript.",
    url: "https://chrisschuhmacher.com",
    siteName: "Chris Schuhmacher",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Schuhmacher | Software Engineer",
    description:
      "Senior Frontend / Product Engineer with 8+ years building scalable web applications with React and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        {children}
      </body>
    </html>
  );
}
