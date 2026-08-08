import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achmad Haidar Tamimi — Software Developer Portfolio",
  description:
    "Fresh graduate Informatika Universitas Amikom Yogyakarta (GPA 3.82) yang berpengalaman membangun aplikasi web dan mobile enterprise menggunakan Laravel & Flutter. Tersedia untuk peluang full-time maupun freelance.",
  keywords: [
    "Achmad Haidar Tamimi",
    "Software Developer",
    "Laravel Developer",
    "Flutter Developer",
    "Portfolio",
    "Informatika Amikom",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Achmad Haidar Tamimi" }],
  creator: "Achmad Haidar Tamimi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://achmadhaidar.dev",
    title: "Achmad Haidar Tamimi — Software Developer Portfolio",
    description:
      "Fresh graduate Informatika yang berpengalaman membangun aplikasi enterprise dengan Laravel & Flutter.",
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
      "Fresh graduate Informatika yang berpengalaman membangun aplikasi enterprise dengan Laravel & Flutter.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020817",
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
      lang="id"
      className={`${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
