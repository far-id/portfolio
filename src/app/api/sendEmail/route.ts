import EmailTemplate from '@/components/app/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { EmailType } from '@/types/email';
import { siteConfig } from '@/constants/siteConfig';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body: EmailType = await req.json()
  const { name, email, subject, message } = body
  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <no-reply@contact.${siteConfig.domain}>`,
      to: siteConfig.links.email,
      subject: `[Portfolio Contact] ${subject}`,
      react: EmailTemplate({ email, name, subject, message }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return Response.json({ error }, { status: 500 });
  }
}
