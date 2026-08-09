import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achmad Haidar Tamimi — Software Developer",
  description:
    "Software Developer who builds digital systems and understands design, data, users, and business workflows. Building systems. Designing experiences.",
  keywords: [
    "Achmad Haidar Tamimi",
    "Software Developer",
    "Data Analyst",
    "Fullstack Developer",
    "Laravel Developer",
    "Flutter Developer",
    "Portfolio",
    "Informatika Amikom",
    "Yogyakarta",
  ],
  authors: [{ name: "Achmad Haidar Tamimi" }],
  creator: "Achmad Haidar Tamimi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://achmadhaidar.dev",
    title: "Achmad Haidar Tamimi — Software Developer Portfolio",
    description:
      "Building systems. Designing experiences. Portfolio of Achmad Haidar Tamimi.",
    siteName: "Achmad Haidar Tamimi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Achmad Haidar Tamimi — Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Haidar Tamimi — Software Developer Portfolio",
    description:
      "Building systems. Designing experiences. Portfolio of Achmad Haidar Tamimi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-[#8B7CFF] selection:text-black">
        {children}
      </body>
    </html>
  );
}
