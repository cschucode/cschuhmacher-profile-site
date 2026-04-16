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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
