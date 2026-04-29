import {
  BookOpen,
  CheckCircle,
  Download,
  Folder,
  Github,
  Package,
  RefreshCw,
  Settings,
  Star,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import { DiscordIcon } from "@/components/discord-icon"
import { DownloadCard } from "@/components/download-card"
import { LazyScreenshotCarousel } from "@/components/lazy-screenshot-carousel"
import { LatestVersionBadge } from "@/components/latest-version-badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: "Installation automatique",
    description:
      "Installez vos mods favoris en un seul clic grâce à notre système de détection intelligent.",
    icon: Download,
  },
  {
    title: "Gestion centralisée",
    description: "Organisez tous vos mods depuis une interface unique et moderne.",
    icon: Package,
  },
  {
    title: "Détection intelligente",
    description:
      "Détecte automatiquement vos instances CurseForge et Modrinth existantes.",
    icon: Folder,
  },
  {
    title: "Nettoyage optimisé",
    description:
      "Supprime automatiquement les anciens mods pour libérer de l'espace.",
    icon: Trash2,
  },
  {
    title: "Mises à jour automatiques",
    description:
      "Restez toujours à jour avec notre système de mise à jour intégré.",
    icon: RefreshCw,
  },
  {
    title: "Configuration avancée",
    description:
      "Personnalisez entièrement votre expérience avec des options détaillées.",
    icon: Settings,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen static-gradient">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md focus:ring-2 focus:ring-ring"
      >
        Aller au contenu principal
      </a>

      <div className="fixed right-4 top-4 z-50">
        <ThemeToggle />
      </div>

      <main id="main-content">
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0 bg-grid-pattern" />
          </div>

          <div className="container relative mx-auto">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <div className="animate-enter-up space-y-6">
                <LatestVersionBadge />

                <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                  Gérez vos mods
                  <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    en toute simplicité
                  </span>
                </h1>

                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  L&apos;outil ultime pour installer, organiser et maintenir vos
                  mods Minecraft. Compatible avec CurseForge et Modrinth.
                </p>
              </div>

              <div className="animate-enter-up animation-delay-150 flex flex-col items-center gap-4">
                <DownloadCard />

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 px-6 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 sm:w-44"
                    asChild
                  >
                    <a
                      href="https://github.com/azurich/Mods_Manager/blob/main/README.md"
                      className="flex items-center justify-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      Documentation
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 px-6 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 sm:w-44"
                    asChild
                  >
                    <a
                      href="https://discord.gg/45XcGgCzcG"
                      className="flex items-center justify-center gap-2"
                    >
                      <DiscordIcon className="h-4 w-4" />
                      Discord
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 px-6 py-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 sm:w-44"
                    asChild
                  >
                    <a
                      href="https://github.com/azurich/Mods_Manager"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in animation-delay-300 flex flex-wrap items-center justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Windows 10/11</span>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="screenshots-title">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2
                id="screenshots-title"
                className="mb-4 text-3xl font-bold md:text-4xl"
              >
                Interface moderne et intuitive
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Découvrez une expérience utilisateur repensée, conçue pour
                simplifier la gestion de vos mods.
              </p>
            </div>

            <LazyScreenshotCarousel />
          </div>
        </section>

        <section className="py-20" aria-labelledby="features-title">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2
                id="features-title"
                className="mb-4 text-3xl font-bold md:text-4xl"
              >
                Fonctionnalités puissantes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Tout ce dont vous avez besoin pour une gestion optimale de vos
                mods Minecraft.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="h-full rounded-2xl border-2 border-border/50 bg-background shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="pt-2 text-xl font-bold">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
