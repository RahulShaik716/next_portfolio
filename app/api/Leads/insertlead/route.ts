import { NextResponse } from "next/server";
import { insertLead } from "@/db/db";

// Handling the POST request
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body

    const result = await insertLead(body);

    return NextResponse.json(
      {
        success: true,
        message: "Lead inserted successfully",
        result: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting Lead:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error inserting Lead",
      },
      { status: 500 }
    );
  }
}
