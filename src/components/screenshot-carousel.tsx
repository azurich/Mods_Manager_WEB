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
import { Package } from "lucide-react"

interface Screenshot {
  id: number
  title: string
  image: string
}

const mockScreenshots: Screenshot[] = [
  {
    id: 1,
    title: "Interface principale",
    image: "/screenshots/main.png"
  },
  {
    id: 2,
    title: "Gestion des mods",
    image: "/screenshots/langue.png"
  },
  {
    id: 3,
    title: "Bibliothèque de mods",
    image: "/screenshots/settings.png"
  }
]

export function ScreenshotCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

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
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={screenshot.id === 1}
                        quality={100}
                        unoptimized={true}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Indicateurs de points */}
      <div className="flex justify-center gap-2 mt-6">
        {mockScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}