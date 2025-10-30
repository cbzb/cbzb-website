import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { nome = '', email = '', telefone = '', mensagem = '' } = await request.json()

    const to = process.env.SMTP_TO || 'cbzb.tech@gmail.com'
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT || 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!user || !pass) {
      console.error('SMTP_USER/SMTP_PASS não configurados')
      return new Response(JSON.stringify({ ok: false, error: 'Email não configurado' }), { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `Contato via site — ${nome || 'Sem nome'}`
    const text = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`

    await transporter.sendMail({
      from: user,
      to,
      replyTo: email || undefined,
      subject,
      text,
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ ok: false }), { status: 400 })
  }
}


