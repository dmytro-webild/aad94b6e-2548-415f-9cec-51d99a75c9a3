import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Summit Peak Roofing | Expert Roofing Solutions',
  description: 'Premium roofing services for homes and commercial properties. Specializing in repairs, replacements, and storm damage restoration. Get your free estimate today!',
  keywords: ["roofing, roof repair, roof replacement, commercial roofing, storm damage, roofing contractor, premium roofing, Summit Peak Roofing, certified roofers"],
  openGraph: {
    "title": "Summit Peak Roofing | Expert Roofing Solutions",
    "description": "Premium roofing services for homes and commercial properties. Specializing in repairs, replacements, and storm damage restoration. Get your free estimate today!",
    "url": "https://www.summitpeakroofing.com",
    "siteName": "Summit Peak Roofing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-angle-shot-white-architectural-building-with-balconies_181624-1484.jpg",
        "alt": "Luxury residential roof"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Summit Peak Roofing | Expert Roofing Solutions",
    "description": "Premium roofing services for homes and commercial properties. Specializing in repairs, replacements, and storm damage. Get your free estimate today!",
    "images": [
      "http://img.b2bpic.net/free-photo/low-angle-shot-white-architectural-building-with-balconies_181624-1484.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
