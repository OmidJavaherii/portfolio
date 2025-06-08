import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message?: string;
  error?: string;
  details?: string;
  debug?: {
    hasEmailUser?: boolean;
    hasEmailPass?: boolean;
    errorName?: string;
    errorStack?: string;
    platform?: string;
  };
};

// Unified handler that works for both Next.js and Netlify
export default async function handler(
  req: NextApiRequest | any,
  res: NextApiResponse<ResponseData> | any
) {
  // Detect platform
  const isNetlify = process.env.NETLIFY === 'true';
  const isNextJs = !isNetlify;
  
  // Handle Netlify's event-based format
  if (isNetlify) {
    if (req.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }
    req.body = JSON.parse(req.body);
  } else {
    // Handle Next.js format
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      const error = { error: 'Missing required fields' };
      return isNetlify 
        ? { statusCode: 400, body: JSON.stringify(error) }
        : res.status(400).json(error);
    }

    // Verify environment variables
    console.log('Checking environment variables...');
    console.log('Platform:', isNetlify ? 'Netlify' : 'Next.js');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      const error = {
        error: 'Server configuration error',
        details: 'Missing email configuration',
        debug: {
          hasEmailUser: !!process.env.EMAIL_USER,
          hasEmailPass: !!process.env.EMAIL_PASS,
          platform: isNetlify ? 'Netlify' : 'Next.js'
        }
      };
      return isNetlify
        ? { statusCode: 500, body: JSON.stringify(error) }
        : res.status(500).json(error);
    }

    // Create a transporter using Gmail SMTP
    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify SMTP connection
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP verification failed:', error);
      const errorResponse = {
        error: 'Email service configuration error',
        details: error instanceof Error ? error.message : 'Unknown error',
        debug: {
          errorName: error instanceof Error ? error.name : 'Unknown',
          errorStack: error instanceof Error ? error.stack : undefined,
          platform: isNetlify ? 'Netlify' : 'Next.js'
        }
      };
      return isNetlify
        ? { statusCode: 500, body: JSON.stringify(errorResponse) }
        : res.status(500).json(errorResponse);
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    const success = { message: 'Email sent successfully' };
    return isNetlify
      ? { statusCode: 200, body: JSON.stringify(success) }
      : res.status(200).json(success);

  } catch (error) {
    console.error('Error sending email:', error);
    const errorResponse = {
      error: 'Failed to send email. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error',
      debug: {
        errorName: error instanceof Error ? error.name : 'Unknown',
        errorStack: error instanceof Error ? error.stack : undefined,
        platform: isNetlify ? 'Netlify' : 'Next.js'
      }
    };
    return isNetlify
      ? { statusCode: 500, body: JSON.stringify(errorResponse) }
      : res.status(500).json(errorResponse);
  }
}