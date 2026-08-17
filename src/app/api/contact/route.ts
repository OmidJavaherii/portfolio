import { NextResponse } from "next/server";
import { EmailConfigError, sendContactEmail } from "@/lib/send-contact-email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, message });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    const message =
      error instanceof EmailConfigError
        ? error.message
        : "Failed to send email. Please try again later.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
