import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required." },
				{ status: 400 },
			);
		}

		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: "Portfolio Contact <onboarding@resend.dev>",
				to: "georgevincent35@gmail.com",
				reply_to: email,
				subject: `Portfolio Contact from ${name}`,
				html: `
					<h3>New message from your portfolio</h3>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, "<br>")}</p>
				`,
			}),
		});

		if (!res.ok) {
			const err = await res.json();
			console.error("Resend error:", err);
			return NextResponse.json(
				{ error: "Failed to send message." },
				{ status: 500 },
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Email send error:", error);
		return NextResponse.json(
			{ error: "Failed to send message." },
			{ status: 500 },
		);
	}
}
