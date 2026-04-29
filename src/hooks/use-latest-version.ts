"use client"

import { useEffect, useState } from "react"

type ReleaseInfo = {
  version: string
  tagName: string
  downloadUrl: string
  releaseUrl: string
  checksumSha256: string | null
  assetSize: number | null
  publishedAt: string | null
}

const fallbackRelease: ReleaseInfo = {
  version: "2.0.8",
  tagName: "2.0.8",
  downloadUrl:
    "https://github.com/azurich/Mods_Manager/releases/download/2.0.8/Mods-Manager-Setup.exe",
  releaseUrl: "https://github.com/azurich/Mods_Manager/releases/tag/2.0.8",
  checksumSha256: null,
  assetSize: null,
  publishedAt: null,
}

export function useLatestVersion() {
  const [release, setRelease] = useState<ReleaseInfo>(fallbackRelease)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLatestVersion() {
      try {
        const response = await fetch("/api/latest-release")
        const data = (await response.json()) as Partial<ReleaseInfo>

        if (response.ok && data.version && data.downloadUrl && data.releaseUrl) {
          setRelease({
            ...fallbackRelease,
            ...data,
            checksumSha256: data.checksumSha256 || null,
            assetSize: data.assetSize || null,
            publishedAt: data.publishedAt || null,
          })
        }
      } catch (error) {
        console.error("Failed to fetch latest version:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestVersion()
  }, [])

  return { ...release, loading }
}
