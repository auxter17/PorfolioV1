import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

export async function POST({ request }) {
	const { name, email, subject, message } = await request.json();

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		service: 'gmail',
		secure: false,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: subject,
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
	}
}
