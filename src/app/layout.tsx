import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.bio,
  keywords: [
    "Mohamed Abupakkar Siddiqe S",
    "Mohamed Siddiqe",
    "Full-Stack Developer",
    "SaaS Developer",
    "AI Integration Engineer",
    "Data Integration Specialist",
    "Next.js Developer",
    "React Developer",
    "LLM Developer",
    "AI Agents",
    "Multi-Tenant SaaS",
    "NeuroHire",
    "Research Copilot",
    "RadInfo Tech",
    "Coimbatore Developer"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedsiddiqe.dev",
    title: siteConfig.title,
    description: siteConfig.bio,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.name,
  "jobTitle": "Full-Stack SaaS Developer & AI Integration Engineer",
  "url": "https://mohamedsiddiqe.dev",
  "email": siteConfig.email,
  "telephone": siteConfig.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressCountry": "India"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "SNS College of Technology"
  },
  "sameAs": [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.leetcode
  ],
  "knowsAbout": [
    "Full-Stack Web Development",
    "Multi-Tenant SaaS Architecture",
    "Large Language Models (LLM)",
    "AI Agent Systems",
    "Data Pipelines & ETL",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "MySQL",
    "AWS"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07080a] text-slate-100 font-sans antialiased selection:bg-cyan-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
