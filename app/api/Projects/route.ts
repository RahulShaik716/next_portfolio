import { getAllProjects } from "@/db/db";
import { NextApiRequest } from "next";

import { NextResponse } from "next/server";
export const dynamic = "force-static"; // Makes this page or route static

export async function GET(request: NextApiRequest) {
  try {
    const projects = await getAllProjects();
    return NextResponse.json({ projects: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
