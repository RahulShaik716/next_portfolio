import { getProfile } from "@/db/db";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"; // Makes this page or route static

export async function GET() {
  try {
    const profile = await getProfile();
    return NextResponse.json({ profile: profile[0] }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
