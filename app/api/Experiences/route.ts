import { getAllExperiences } from "@/db/db";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"; // Makes this page or route static

export async function GET() {
  try {
    const experiences = await getAllExperiences();
    return NextResponse.json({ experiences: experiences }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
