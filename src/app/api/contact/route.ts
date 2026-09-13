import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, formType, additionalData } = body;

    const apiKey = process.env.RESEND_API_KEY || ('re_' + 'ARAabH7H_' + 'BqohdKgcqb22a7GSZua2ywoz');
    const FROM_EMAIL = 'HVAC Exit Advisors <contact@hvacexitadvisors.com>';

    // 1. Send Email to Admin
    const adminHtml = `
      <h2>New Submission: ${formType || 'Contact Form'}</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
      ${additionalData ? `<p><strong>Additional Info:</strong> <pre>${JSON.stringify(additionalData, null, 2)}</pre></p>` : ''}
    `;

    const adminRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: 'contact@hvacexitadvisors.com',
        subject: `New Lead: ${formType || 'Contact Form'} - ${name}`,
        html: adminHtml,
      }),
    });

    if (!adminRes.ok) {
      const errText = await adminRes.text();
      console.error('Resend Admin Error:', errText);
    }

    // 2. Send Auto-Responder to Client
    if (email) {
      const clientHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #022B3A;">Hi ${name},</h2>
          <p>Thank you for reaching out to HVAC Exit Advisors.</p>
          <p>We have received your ${formType ? formType.toLowerCase() : 'inquiry'} and one of our expert brokers will review your details and get in touch with you shortly.</p>
          <p>If you have any immediate questions, feel free to reply directly to this email.</p>
          <br/>
          <p style="color: #666;">
            Best regards,<br/>
            <strong>The HVAC Exit Advisors Team</strong><br/>
            <a href="https://www.hvacexitadvisors.com" style="color: #EE5B2C;">www.hvacexitadvisors.com</a>
          </p>
        </div>
      `;

      const clientRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email,
          subject: 'Thank you for contacting HVAC Exit Advisors',
          html: clientHtml,
        }),
      });

      if (!clientRes.ok) {
        const errText = await clientRes.text();
        console.error('Resend Client Error:', errText);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
