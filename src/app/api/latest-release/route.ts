import { NextResponse } from "next/server"

const RELEASE_ENDPOINT =
  "https://api.github.com/repos/azurich/Mods_Manager/releases/latest"
const INSTALLER_NAME = "Mods-Manager-Setup.exe"
const FALLBACK_VERSION = "2.0.8"

const fallbackRelease = {
  version: FALLBACK_VERSION,
  tagName: FALLBACK_VERSION,
  downloadUrl: `https://github.com/azurich/Mods_Manager/releases/download/${FALLBACK_VERSION}/${INSTALLER_NAME}`,
  releaseUrl: `https://github.com/azurich/Mods_Manager/releases/tag/${FALLBACK_VERSION}`,
  checksumSha256: null,
  assetSize: null,
  publishedAt: null,
}

type GitHubReleaseAsset = {
  name: string
  browser_download_url: string
  digest?: string
  size?: number
}

type GitHubRelease = {
  tag_name?: string
  html_url?: string
  published_at?: string
  assets?: GitHubReleaseAsset[]
}

export const revalidate = 3600

export async function GET() {
  try {
    const response = await fetch(RELEASE_ENDPOINT, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Mods-Manager-WEB",
      },
      next: { revalidate },
    })

    if (!response.ok) {
      return NextResponse.json(fallbackRelease)
    }

    const release = (await response.json()) as GitHubRelease
    const tagName = release.tag_name || fallbackRelease.tagName
    const version = tagName.replace(/^v/, "")
    const asset = release.assets?.find((item) => item.name === INSTALLER_NAME)
    const digest = asset?.digest?.startsWith("sha256:")
      ? asset.digest.slice("sha256:".length)
      : null

    return NextResponse.json({
      version,
      tagName,
      downloadUrl:
        asset?.browser_download_url ||
        `https://github.com/azurich/Mods_Manager/releases/download/${version}/${INSTALLER_NAME}`,
      releaseUrl:
        release.html_url ||
        `https://github.com/azurich/Mods_Manager/releases/tag/${tagName}`,
      checksumSha256: digest,
      assetSize: asset?.size || null,
      publishedAt: release.published_at || null,
    })
  } catch {
    return NextResponse.json(fallbackRelease)
  }
}
