import type { VercelRequest, VercelResponse } from '@vercel/node'

const RECIPIENT = 'administratie@innovahautomotive.com'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { naam, email, telefoon, onderwerp, bericht } = req.body

  // Validation
  if (!naam || !email || !bericht) {
    return res.status(400).json({ error: 'Naam, email en bericht zijn verplicht.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Ongeldig e-mailadres.' })
  }

  if (bericht.length < 10) {
    return res.status(400).json({ error: 'Bericht moet minimaal 10 tekens bevatten.' })
  }

  // Build email content
  const subject = `[Innovah Website] Nieuw bericht: ${onderwerp || 'Algemeen'}`
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #141414; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: #FFC320; margin: 0; font-size: 20px;">Nieuw Contactbericht</h1>
        <p style="color: #9CA3AF; margin: 4px 0 0; font-size: 14px;">Via innovahautomotive.com</p>
      </div>
      <div style="background: #1A1A1A; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #9CA3AF; padding: 8px 0; font-size: 14px; width: 120px;">Naam:</td>
            <td style="color: #FFFFFF; padding: 8px 0; font-size: 14px; font-weight: bold;">${naam}</td>
          </tr>
          <tr>
            <td style="color: #9CA3AF; padding: 8px 0; font-size: 14px;">E-mail:</td>
            <td style="color: #FFFFFF; padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #FFC320;">${email}</a></td>
          </tr>
          ${telefoon ? `
          <tr>
            <td style="color: #9CA3AF; padding: 8px 0; font-size: 14px;">Telefoon:</td>
            <td style="color: #FFFFFF; padding: 8px 0; font-size: 14px;"><a href="tel:${telefoon}" style="color: #FFC320;">${telefoon}</a></td>
          </tr>` : ''}
          <tr>
            <td style="color: #9CA3AF; padding: 8px 0; font-size: 14px;">Onderwerp:</td>
            <td style="color: #FFFFFF; padding: 8px 0; font-size: 14px;">${onderwerp || 'Algemeen'}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
          <p style="color: #9CA3AF; font-size: 14px; margin: 0 0 8px;">Bericht:</p>
          <p style="color: #FFFFFF; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${bericht}</p>
        </div>
      </div>
    </div>
  `

  // Send via Resend (configure RESEND_API_KEY in Vercel env)
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error('RESEND_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured.' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: 'Innovah Website <noreply@innovahautomotive.com>',
        to: RECIPIENT,
        reply_to: email,
        subject,
        html: htmlBody,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Resend error:', err)
      return res.status(500).json({ error: 'Email versturen mislukt.' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Er ging iets mis.' })
  }
}
