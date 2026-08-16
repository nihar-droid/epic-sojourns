import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      service,
      destination,
      travelDate,
      travellers,
      budget,
      message,
    } = body;

    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide all required information.",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Epic Sojourns <noreply@epicsojourns.com>",
      to: ["info.epicsojourns@gmail.com"],
      replyTo: email,
      subject: `New Quote Request — ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">

          <h2 style="color: #0F2747;">
            New Quote Request
          </h2>

          <hr />

          <h3>Personal Details</h3>

          <p>
            <strong>Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <h3>Trip Details</h3>

          <p>
            <strong>Service:</strong> ${service}
          </p>

          <p>
            <strong>Destination:</strong> ${destination || "Not specified"}
          </p>

          <p>
            <strong>Travel Date:</strong> ${travelDate || "Not specified"}
          </p>

          <p>
            <strong>Travellers:</strong> ${travellers || "Not specified"}
          </p>

          <p>
            <strong>Budget:</strong> ${budget || "Not specified"}
          </p>

          <h3>Message</h3>

          <p>
            ${message || "No additional message provided."}
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Quote submission error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send quote request.",
      },
      { status: 500 }
    );
  }
}