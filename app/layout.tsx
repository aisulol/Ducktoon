import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";

import { DEFAULT_DESCRIPTION, DEFAULT_LOCALE, SITE_NAME, SITE_URL } from "@/lib/seo-config";

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | เว็บอ่านการ์ตูนฟรี`,
    template: `$s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: DEFAULT_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${sarabun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
