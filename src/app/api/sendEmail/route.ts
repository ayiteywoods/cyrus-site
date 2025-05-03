import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Extracting form data
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    // Setting up the transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'eatwoods@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // Use environment variable for password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'eatwoods@gmail.com', // Use the same email as auth
      to: 'eatwoods@gmail.com', // Recipient address
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Sending the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email. Please try again later.' },
      { status: 500 }
    );
  }
}
