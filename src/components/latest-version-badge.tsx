import { Sparkles } from "lucide-react"

import { getLatestRelease } from "@/lib/release"

export async function LatestVersionBadge() {
  const { version } = await getLatestRelease()

  return (
    <div className="version-badge inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm transition-all hover:bg-primary/15">
      <Sparkles className="h-4 w-4" />
      <span className="text-sm font-medium">
        Nouveau : Version {version} disponible
      </span>
    </div>
  )
}
