import { NextResponse } from "next/server"

import { getLatestRelease } from "@/lib/release"

export const revalidate = 3600

export async function GET() {
  return NextResponse.json(await getLatestRelease())
}
