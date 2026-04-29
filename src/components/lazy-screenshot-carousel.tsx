"use client"

import dynamic from "next/dynamic"
import * as React from "react"

const ScreenshotCarousel = dynamic(
  () =>
    import("@/components/screenshot-carousel").then(
      (mod) => mod.ScreenshotCarousel
    ),
  {
    ssr: false,
    loading: () => <CarouselPlaceholder />,
  }
)

function CarouselPlaceholder() {
  return (
    <div
      className="mx-auto w-full max-w-5xl rounded-lg border border-border bg-muted/40"
      style={{ aspectRatio: "1344/696" }}
      aria-hidden="true"
    />
  )
}

export function LazyScreenshotCarousel() {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" }
    )

    observer.observe(root)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef}>
      {isVisible ? <ScreenshotCarousel /> : <CarouselPlaceholder />}
    </div>
  )
}
