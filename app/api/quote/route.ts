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

    await resend.emails.send({
      from: "Epic Sojourns <onboarding@resend.dev>",
      to: ["info.epicsojourns@gmail.com"], // <-- Replace with your email
      subject: `New Quote Request - ${fullName}`,
      html: `
<h2>New Quote Request</h2>

<hr/>

<p><strong>Name:</strong> ${fullName}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Phone:</strong> ${phone}</p>

<p><strong>Service:</strong> ${service}</p>

<p><strong>Destination:</strong> ${destination}</p>

<p><strong>Travel Date:</strong> ${travelDate}</p>

<p><strong>Travellers:</strong> ${travellers}</p>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Message:</strong></p>

<p>${message}</p>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}