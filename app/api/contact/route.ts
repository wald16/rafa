import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    try {
        // Configure the email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587, // Common port for SMTP
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Set up email options
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: `New Contact Form Submission from ${name}`,
            text: `You have a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send the email." }, { status: 500 });
    }
}
