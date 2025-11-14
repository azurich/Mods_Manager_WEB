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

export const metadata: Metadata = {
  title: "Mods Manager",
  description: "Gérez vos mods Minecraft en toute simplicité. Installation automatique, détection intelligente, compatible CurseForge et Modrinth. Gratuit et Open Source.",
  keywords: ["mods manager", "minecraft", "mods", "curseforge", "modrinth", "gestionnaire de mods", "minecraft mods"],
  authors: [{ name: "Azurich" }],
  creator: "Azurich",
  publisher: "Azurich",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mods-manager.com",
    title: "Mods Manager - Gestionnaire de Mods Minecraft",
    description: "L'outil ultime pour installer, organiser et maintenir vos mods Minecraft. Compatible avec CurseForge et Modrinth.",
    siteName: "Mods Manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mods Manager - Gestionnaire de Mods Minecraft",
    description: "Gérez vos mods Minecraft en toute simplicité. Gratuit et Open Source.",
    creator: "@azurich",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
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

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Mods Manager",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Windows 10, Windows 11",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "Gestionnaire de Mods Minecraft - Installation automatique, compatible CurseForge et Modrinth",
              "softwareVersion": "2.0.8",
              "author": {
                "@type": "Person",
                "name": "Azurich"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
