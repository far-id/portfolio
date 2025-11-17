'use server';
import EmailTemplate from '@/components/app/email-template';
import { Resend } from 'resend';
import { EmailType } from '@/types/email';
import { siteConfig } from '@/constants/siteConfig';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(body: EmailType) {
  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <no-reply@contact.${siteConfig.domain}>`,
      to: siteConfig.links.email,
      subject: `[Portfolio Contact] ${body.subject}`,
      react: EmailTemplate({ email: body.email, name: body.name, subject: body.subject, message: body.message }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
      }
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Unexpected error sending email:', error);
    return {
      success: false,
    };
  }
}
