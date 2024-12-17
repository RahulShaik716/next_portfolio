import { getTestimonials } from "@/db/db";
import { NextApiRequest } from "next";

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"; // Makes this page or route static

export async function GET(request: NextApiRequest) {
  try {
    const testimonials = await getTestimonials();
    return NextResponse.json({ testimonials: testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
