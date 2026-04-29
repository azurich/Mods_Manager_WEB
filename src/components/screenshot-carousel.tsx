"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

interface Screenshot {
  id: number
  title: string
  imageLight: string
  imageDark: string
}

const mockScreenshots: Screenshot[] = [
  {
    id: 1,
    title: "Interface principale",
    imageLight: "/screenshots/light/main.png",
    imageDark: "/screenshots/dark/main.png"
  },
  {
    id: 2,
    title: "Gestion des mods",
    imageLight: "/screenshots/light/langue.png",
    imageDark: "/screenshots/dark/langue.png"
  },
  {
    id: 3,
    title: "Bibliothèque de mods",
    imageLight: "/screenshots/light/settings.png",
    imageDark: "/screenshots/dark/settings.png"
  }
]

function useMounted() {
  return React.useSyncExternalStore(
    React.useCallback(() => () => {}, []),
    () => true,
    () => false
  )
}

export function ScreenshotCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const { theme, resolvedTheme } = useTheme()
  const mounted = useMounted()

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrentIndex(api.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Render light screenshots until the stored theme is available.
  const currentTheme = mounted ? resolvedTheme || theme : "light"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto"
    >
      {/* Carousel avec indicateurs */}
      <Carousel
        setApi={setApi}
        className="w-full"
        aria-label="Captures d'écran de Mods Manager"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing">
          {mockScreenshots.map((screenshot) => (
            <CarouselItem key={screenshot.id}>
              <div className="p-1">
                <Card className="border-0 bg-gradient-to-br from-background to-background/50 shadow-lg">
                  <CardContent className="p-3">
                    <div className="relative rounded-lg overflow-hidden bg-muted border border-border" style={{ aspectRatio: '1344/696' }}>
                      <Image
                        src={currentTheme === 'dark' ? screenshot.imageDark : screenshot.imageLight}
                        alt={screenshot.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) calc(100vw - 2rem), 1024px"
                        priority={screenshot.id === 1}
                        quality={85}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 sm:-left-12" />
        <CarouselNext className="right-3 sm:-right-12" />
      </Carousel>

      {/* Indicateurs de points */}
      <div className="flex justify-center gap-2 mt-6">
        {mockScreenshots.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-current={index === currentIndex ? "true" : undefined}
            aria-label={`Afficher la capture ${index + 1} : ${mockScreenshots[index].title}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
