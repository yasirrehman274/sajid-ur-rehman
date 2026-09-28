import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { site, siteUrl } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = {
  default: "Sajid Ur Rehman | Materials Science & Computational Research",
  template: "%s | Sajid Ur Rehman",
};

const description =
  "Sajid Ur Rehman is a materials science researcher focused on energy conversion and storage materials, computational materials science, photocatalysis, electrocatalysis, thermoelectric materials and electronic and optical properties. He is a computational codes expert in VASP and CASTEP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Sajid Ur Rehman",
    "Materials Science",
    "Energy Conversion",
    "Energy Storage Materials",
    "Computational Materials Science",
    "Density Functional Theory",
    "VASP",
    "CASTEP",
    "Photocatalysis",
    "Electrocatalysis",
    "Thermoelectric Materials",
    "Metal-Ion Batteries",
    "Minzu University of China",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
    url: siteUrl,
    title: "Sajid Ur Rehman | Materials Science & Computational Research",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajid Ur Rehman | Materials Science & Computational Research",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: { email: true, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/** Person structured data — restricted to information stated in the CV. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: "Sajid Ur Rehman",
  jobTitle: site.role,
  description,
  email: site.emails.map((email) => email.label),
  knowsAbout: [
    "Materials Science",
    "Energy Conversion and Storage Materials",
    "Computational Materials Science",
    "Photocatalysis",
    "Electrocatalysis",
    "Thermoelectric Materials",
    "Metal-Ion Batteries",
    "Electronic and Optical Properties",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Chinese Academy of Sciences (UCAS)",
    },
    { "@type": "CollegeOrUniversity", name: "University of Lahore" },
    { "@type": "CollegeOrUniversity", name: "Government College University Lahore" },
    { "@type": "CollegeOrUniversity", name: "University of the Punjab" },
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Minzu University of China",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // Static, developer-authored JSON-LD containing no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
