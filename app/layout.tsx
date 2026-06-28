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
  metadataBase: new URL("https://chrisschuhmacher.com"),
  title: "Chris Schuhmacher | From rock bottom to building second chances",
  description:
    "26 years sober. 17 years served. A decade in tech. AI builder, founder of Fitness Monkey, and Last Mile mentor — using technology and recovery to help others find their way back.",
  openGraph: {
    title: "Chris Schuhmacher — From rock bottom to building second chances",
    description:
      "AI builder, founder of Fitness Monkey, and Last Mile mentor — helping others find their way back.",
    url: "https://chrisschuhmacher.com",
    siteName: "Chris Schuhmacher",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Schuhmacher — From rock bottom to building second chances",
    description:
      "AI builder, founder of Fitness Monkey, and Last Mile mentor — helping others find their way back.",
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
    >
      <body className="bg-(--color-surface-base) text-(--color-text-secondary) overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
