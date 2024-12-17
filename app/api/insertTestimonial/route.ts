import { NextResponse } from "next/server";
import { insertTestimonial } from "@/db/db";

// Handling the POST request
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body

    const result = await insertTestimonial(body);

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial inserted successfully",
        result: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting testimonial:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error inserting testimonial",
      },
      { status: 500 }
    );
  }
}
