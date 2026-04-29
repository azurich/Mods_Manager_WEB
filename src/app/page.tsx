"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Download,
  BookOpen,
  Github,
  Star,
  Package,
  Folder,
  Trash2,
  RefreshCw,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ScreenshotCarousel } from "@/components/screenshot-carousel"
import { DiscordIcon } from "@/components/discord-icon"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLatestVersion } from "@/hooks/use-latest-version"

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()
  const {
    version,
    downloadUrl,
    releaseUrl,
    checksumSha256,
    assetSize,
  } = useLatestVersion()
  const formattedAssetSize = assetSize
    ? `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 1,
      }).format(assetSize / 1024 / 1024)} Mo`
    : null
  const fadeUpInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 }
  const fadeInitial = shouldReduceMotion ? false : { opacity: 0 }
  const fadeUpTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" as const }

  return (
    <div className="min-h-screen static-gradient">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md focus:ring-2 focus:ring-ring"
      >
        Aller au contenu principal
      </a>

      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Content */}
      <main id="main-content">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={fadeUpInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm transition-all hover:bg-primary/15">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Nouveau : Version {version} disponible</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Gérez vos mods
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  en toute simplicité
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                L&apos;outil ultime pour installer, organiser et maintenir vos mods Minecraft. 
                Compatible avec CurseForge et Modrinth.
              </p>
            </motion.div>

            <motion.div
              initial={fadeUpInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-4 items-center"
            >
              <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 transition-all duration-200 w-full sm:w-auto" asChild>
                <a
                  href={downloadUrl}
                  className="flex items-center justify-center gap-2"
                  aria-label={`Télécharger Mods Manager ${version} pour Windows`}
                >
                  <Download className="h-5 w-5" />
                  Télécharger maintenant
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              {checksumSha256 && (
                <div className="w-full max-w-2xl rounded-lg border border-border bg-background/75 p-4 text-left shadow-sm backdrop-blur">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">
                          Installateur vérifiable
                        </p>
                        <p className="text-xs text-muted-foreground">
                          SHA256 {formattedAssetSize ? `- ${formattedAssetSize}` : ""}
                        </p>
                      </div>
                    </div>
                    <a
                      href={releaseUrl}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Release GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <code className="mt-3 block break-all rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">
                    {checksumSha256}
                  </code>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button variant="outline" size="lg" className="px-6 py-4 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 w-full sm:w-44" asChild>
                  <a href="https://github.com/azurich/Mods_Manager/blob/main/README.md" className="flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Documentation
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="px-6 py-4 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 w-full sm:w-44" asChild>
                  <a href="https://discord.gg/45XcGgCzcG" className="flex items-center justify-center gap-2">
                    <DiscordIcon className="h-4 w-4" />
                    Discord
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="px-6 py-4 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 w-full sm:w-44" asChild>
                  <a href="https://github.com/azurich/Mods_Manager" className="flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInitial}
              animate={{ opacity: 1 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Windows 10/11</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Open Source</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20" aria-labelledby="screenshots-title">
        <div className="container mx-auto">
          <motion.div
            initial={fadeUpInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fadeUpTransition}
            className="text-center mb-12"
          >
            <h2 id="screenshots-title" className="text-3xl md:text-4xl font-bold mb-4">
              Interface moderne et intuitive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une expérience utilisateur repensée, conçue pour simplifier la gestion de vos mods.
            </p>
          </motion.div>
          
          <ScreenshotCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" aria-labelledby="features-title">
        <div className="container mx-auto">
          <motion.div
            initial={fadeUpInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={fadeUpTransition}
            className="text-center mb-12"
          >
            <h2 id="features-title" className="text-3xl md:text-4xl font-bold mb-4">
              Fonctionnalités puissantes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour une gestion optimale de vos mods Minecraft.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Installation automatique",
                description: "Installez vos mods favoris en un seul clic grâce à notre système de détection intelligent.",
                icon: Download
              },
              {
                title: "Gestion centralisée",
                description: "Organisez tous vos mods depuis une interface unique et moderne.",
                icon: Package
              },
              {
                title: "Détection intelligente",
                description: "Détecte automatiquement vos instances CurseForge et Modrinth existantes.",
                icon: Folder
              },
              {
                title: "Nettoyage optimisé",
                description: "Supprime automatiquement les anciens mods pour libérer de l'espace.",
                icon: Trash2
              },
              {
                title: "Mises à jour automatiques",
                description: "Restez toujours à jour avec notre système de mise à jour intégré.",
                icon: RefreshCw
              },
              {
                title: "Configuration avancée",
                description: "Personnalisez entièrement votre expérience avec des options détaillées.",
                icon: Settings
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={fadeUpInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : {
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Card className="h-full rounded-2xl border-2 border-border/50 bg-background shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold pt-2">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Made by Azurich with 💖
          </p>
        </div>
      </footer>
      </main>
    </div>
  )
}
