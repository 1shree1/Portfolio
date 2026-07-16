import type { Metadata } from "next";
import { ReactNode } from "react";
import { site } from "@/lib/site-data";
import "../app/globals.css";  

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Shree Subedi | Web Developer in Nepal",
    template: "%s | Shree Subedi",
  },
  description:
    "Shree Subedi builds fast, responsive, and modern websites using React, Next.js, TypeScript, and Tailwind CSS.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Shree Subedi",
    "Web Developer Nepal",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Tailwind CSS",
    "Freelance web developer",
  ],
  authors: [{ name: "Shree Subedi", url: site.url }],
  creator: "Shree Subedi",
  publisher: "Shree Subedi",
  openGraph: {
    type: "website",
    url: site.url,
    title: "Shree Subedi | Web Developer in Nepal",
    description:
      "Fast, responsive, and modern websites for businesses, startups, and personal brands.",
    siteName: "Shree Subedi",
    images: [
      {
        url: "/shree.jpg",
        width: 1200,
        height: 1600,
        alt: "Portrait of Shree Subedi.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Subedi | Web Developer in Nepal",
    description:
      "Shree Subedi builds fast, responsive, and modern websites using React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/shree.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Web Developer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Web Design"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shree Subedi",
  url: site.url,
  description:
    "Shree Subedi builds fast, responsive, and modern websites using React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
      </body>
    </html>
  );
}
