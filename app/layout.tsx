import type { Metadata, Viewport } from "next";
import { Caveat, Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const description =
  "Abdul Aziz is a junior full stack web developer from Moulvibazar, Bangladesh, building with React, Next.js, Node.js, Express.js and MongoDB. Open to entry-level roles and internships.";

export const metadata: Metadata = {
  title: {
    default: "Abdul Aziz — Junior Full Stack Web Developer",
    template: "%s — Abdul Aziz",
  },
  description,
  applicationName: "Abdul Aziz — Portfolio",
  authors: [{ name: "Abdul Aziz" }],
  keywords: [
    "Abdul Aziz",
    "web developer",
    "full stack developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Moulvibazar",
    "Bangladesh",
    "portfolio",
  ],
  creator: "Abdul Aziz",
  openGraph: {
    title: "Abdul Aziz — Junior Full Stack Web Developer",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Abdul Aziz — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Aziz — Junior Full Stack Web Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05010f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Abdul Aziz",
      jobTitle: "Junior Full Stack Web Developer",
      email: "mailto:aziz017519@gmail.com",
      telephone: "+8801751939239",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Moulvibazar",
        addressCountry: "Bangladesh",
      },
      sameAs: ["https://github.com/aziz017519"],
    },
    {
      "@type": "WebSite",
      name: "Abdul Aziz — Junior Full Stack Web Developer",
      description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${caveat.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-[#05010f] font-sans text-[#f4f2ff] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
