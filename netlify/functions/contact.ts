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

// Netlify-specific handler
export const handler = async function(event: any, context: any) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      const error = {
        error: 'Server configuration error',
        details: 'Missing email configuration',
        debug: { 
          platform: 'netlify',
          config: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            user: process.env.EMAIL_USER,
            hasPass: !!process.env.EMAIL_PASS
          }
        }
      };
      return {
        statusCode: 500,
        body: JSON.stringify(error)
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false }
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
          platform: 'netlify',
          config: {
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            user: process.env.EMAIL_USER,
            hasPass: true
          }
        }
      };
      return {
        statusCode: 500,
        body: JSON.stringify(errorResponse)
      };
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

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        debug: { platform: 'netlify' }
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error',
        debug: {
          platform: 'netlify',
          errorName: error instanceof Error ? error.name : 'Unknown',
          errorStack: error instanceof Error ? error.stack : undefined
        }
      })
    };
  }
}; 