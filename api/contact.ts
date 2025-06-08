import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  message?: string;
  error?: string;
  details?: string;
  debug?: {
    platform?: string;
    config?: {
      host?: string;
      port?: number;
      secure?: boolean;
      user?: string;
      hasPass?: boolean;
    };
  };
};

// Detect platform
const getPlatform = () => {
  if (process.env.NETLIFY === 'true') return 'netlify';
  if (process.env.LIARA === 'true') return 'liara';
  if (process.env.NODE_ENV === 'development') return 'local';
  return 'production';
};

// Unified SMTP configuration for all platforms
const getSmtpConfig = () => {
  const platform = getPlatform();
  console.log('Detected platform:', platform);

  return {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false }
  };
};

// Helper function to create response based on platform
const createResponse = (isServerless: boolean, statusCode: number, data: ResponseData) => {
  if (isServerless) {
    return {
      statusCode,
      body: JSON.stringify(data)
    };
  }
  return data;
};

// Unified handler that works for all platforms
export default async function handler(
  req: NextApiRequest | any,
  res: NextApiResponse<ResponseData> | any
) {
  const platform = getPlatform();
  const isServerless = platform === 'netlify' || platform === 'liara';

  // Handle serverless format (Netlify/Liara)
  if (isServerless) {
    if (req.httpMethod !== 'POST') {
      return createResponse(isServerless, 405, { error: 'Method Not Allowed' });
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
      return isServerless
        ? createResponse(isServerless, 400, { error: 'Missing required fields' })
        : res.status(400).json({ error: 'Missing required fields' });
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      const error = {
        error: 'Server configuration error',
        details: 'Missing email configuration',
        debug: { 
          platform,
          config: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            user: process.env.EMAIL_USER,
            hasPass: !!process.env.EMAIL_PASS
          }
        }
      };
      return isServerless
        ? createResponse(isServerless, 500, error)
        : res.status(500).json(error);
    }

    // Get SMTP configuration
    const smtpConfig = getSmtpConfig();
    console.log('Using SMTP config for platform:', platform);

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

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
          platform,
          config: {
            ...smtpConfig,
            auth: { ...smtpConfig.auth, pass: '***' } // Hide password in logs
          }
        }
      };
      return isServerless
        ? createResponse(isServerless, 500, errorResponse)
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

    const success = { 
      message: 'Email sent successfully',
      debug: { platform }
    };
    return isServerless
      ? createResponse(isServerless, 200, success)
      : res.status(200).json(success);

  } catch (error) {
    console.error('Error sending email:', error);
    const errorResponse = {
      error: 'Failed to send email. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error',
      debug: {
        platform,
        errorName: error instanceof Error ? error.name : 'Unknown',
        errorStack: error instanceof Error ? error.stack : undefined
      }
    };
    return isServerless
      ? createResponse(isServerless, 500, errorResponse)
      : res.status(500).json(errorResponse);
  }
} 