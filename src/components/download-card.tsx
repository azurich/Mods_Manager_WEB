import { ArrowRight, Download, ExternalLink, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getLatestRelease } from "@/lib/release"

export async function DownloadCard() {
  const { version, downloadUrl, releaseUrl, checksumSha256, assetSize } =
    await getLatestRelease()
  const formattedAssetSize = assetSize
    ? `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 1,
      }).format(assetSize / 1024 / 1024)} Mo`
    : null

  return (
    <>
      <Button
        size="lg"
        className="w-full px-10 py-6 text-lg transition-all duration-200 sm:w-auto"
        asChild
      >
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
    </>
  )
}
