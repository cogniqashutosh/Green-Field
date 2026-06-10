import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, phone, email, service, date, message } = await request.json()

    await resend.emails.send({
      from: 'Greenfield Dental Website <onboarding@resend.dev>',
      to: 'greenfielddds@gmail.com',
      reply_to: email || undefined,
      subject: `New Appointment Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f7fbfd; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #082840 0%, #1a6b8a 100%); border-radius: 10px; padding: 24px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Appointment Request</h1>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Greenfield Dental — greenfieldiowadentistry.com</p>
          </div>

          <div style="background: white; border-radius: 10px; padding: 24px; margin-bottom: 16px; border: 1px solid #e2ecf0;">
            <h2 style="color: #082840; font-size: 16px; margin: 0 0 16px;">Patient Information</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f4f8;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; color: #0f172a;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f4f8;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #1a6b8a;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f4f8;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; color: #0f172a;">${email ? `<a href="mailto:${email}" style="color: #1a6b8a;">${email}</a>` : '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f4f8;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Service</td>
                <td style="padding: 10px 0; color: #0f172a;">${service || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f4f8;">
                <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Preferred Date</td>
                <td style="padding: 10px 0; color: #0f172a;">${date || '—'}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #0f172a;">${message}</td>
              </tr>` : ''}
            </table>
          </div>

          <div style="background: #e8f5f2; border-radius: 10px; padding: 16px; text-align: center; font-size: 13px; color: #1a6b8a;">
            <strong>Reply directly to this email</strong> to contact ${firstName}, or call <a href="tel:${phone}" style="color: #082840; font-weight: 700;">${phone}</a>
          </div>

          <p style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 20px;">
            Sent from Greenfield Dental website · 246 Public Square, Greenfield, IA 50849
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
