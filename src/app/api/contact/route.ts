import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "All fields are required." },
				{ status: 400 },
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"${name}" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_USER,
			replyTo: email,
			subject: `Portfolio Contact from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
                <h3>New message from your portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Email send error:", error);
		return NextResponse.json(
			{ error: "Failed to send message." },
			{ status: 500 },
		);
	}
}
