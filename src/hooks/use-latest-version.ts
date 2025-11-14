"use client"

import { useEffect, useState } from "react"

export function useLatestVersion() {
  const [version, setVersion] = useState("2.0.8")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLatestVersion() {
      try {
        const response = await fetch(
          "https://api.github.com/repos/azurich/Mods_Manager/releases/latest"
        )
        const data = await response.json()
        if (data.tag_name) {
          // Enlever le 'v' si présent dans le tag (ex: v2.0.8 -> 2.0.8)
          const version = data.tag_name.replace(/^v/, "")
          setVersion(version)
        }
      } catch (error) {
        console.error("Failed to fetch latest version:", error)
        // Garder la version par défaut en cas d'erreur
      } finally {
        setLoading(false)
      }
    }

    fetchLatestVersion()
  }, [])

  return { version, loading }
}
