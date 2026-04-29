import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL("https://modsmanager.azurich.fr");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Mods Manager",
  title: {
    default: "Mods Manager",
    template: "%s | Mods Manager",
  },
  description:
    "Gérez vos mods Minecraft en toute simplicité. Installation automatique, détection intelligente, compatible CurseForge et Modrinth. Gratuit et Open Source.",
  keywords: [
    "mods manager",
    "minecraft",
    "mods",
    "curseforge",
    "modrinth",
    "gestionnaire de mods",
    "minecraft mods",
  ],
  authors: [{ name: "Azurich" }],
  creator: "Azurich",
  publisher: "Azurich",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Mods Manager - Gestionnaire de Mods Minecraft",
    description:
      "L'outil ultime pour installer, organiser et maintenir vos mods Minecraft. Compatible avec CurseForge et Modrinth.",
    siteName: "Mods Manager",
    images: [
      {
        url: "/screenshots/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mods Manager - Aperçu du site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mods Manager - Gestionnaire de Mods Minecraft",
    description:
      "Gérez vos mods Minecraft en toute simplicité. Gratuit et Open Source.",
    creator: "@azurich",
    images: ["/screenshots/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mods Manager",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows 10, Windows 11",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Gestionnaire de Mods Minecraft - Installation automatique, compatible CurseForge et Modrinth",
    softwareVersion: "2.0.8",
    author: {
      "@type": "Person",
      name: "Azurich",
    },
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="mods-manager-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
