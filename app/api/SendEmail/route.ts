import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

// Handling the POST request
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body

    const result = await sendEmail({ from: body.email, text: body.message });

    return NextResponse.json(
      {
        success: true,
        message: "Email Sent successfully",
        result: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(JSON.stringify(error));
    return NextResponse.json(
      {
        success: false,
        message: "Error sending Email" + error,
      },
      { status: 500 }
    );
  }
}
