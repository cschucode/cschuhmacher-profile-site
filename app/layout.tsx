import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Chris Schuhmacher | Software Engineer",
  description:
    "Personal portfolio of Chris Schuhmacher, a software engineer building thoughtful software solutions.",
  openGraph: {
    title: "Chris Schuhmacher | Software Engineer",
    description:
      "Personal portfolio of Chris Schuhmacher, a software engineer building thoughtful software solutions.",
    url: "https://chrisschuhmacher.com",
    siteName: "Chris Schuhmacher",
    type: "website",
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
        <script
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
