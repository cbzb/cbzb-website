import nodemailer from 'nodemailer'

function isValidEmail(email) {
  if (typeof email !== 'string') return false
  return /.+@.+\..+/.test(email)
}

function sanitize(input) {
  if (typeof input !== 'string') return ''
  return input.replace(/[\u0000-\u001F\u007F]/g, '').trim()
}

export async function POST(request) {
  try {
    const body = await request.json()
    const nome = sanitize(body?.nome)
    const email = sanitize(body?.email)
    const telefone = sanitize(body?.telefone)
    const area = sanitize(body?.area)
    const mensagem = sanitize(body?.mensagem)

    // Validação básica
    const errors = []
    if (!nome) errors.push('nome')
    if (!isValidEmail(email)) errors.push('email')
    if (!area) errors.push('area')
    if (errors.length) {
      return new Response(JSON.stringify({ ok: false, error: 'Campos inválidos', fields: errors }), { status: 422 })
    }

    const to = process.env.SMTP_TO || 'cbzb.tech@gmail.com'
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT || 465)
    const secureEnv = process.env.SMTP_SECURE
    const secure = typeof secureEnv === 'string' ? secureEnv === 'true' : (port === 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!user || !pass) {
      console.error('SMTP_USER/SMTP_PASS não configurados')
      return new Response(JSON.stringify({ ok: false, error: 'Email não configurado' }), { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    })

    try {
      await transporter.verify()
    } catch (verifyErr) {
      console.error('SMTP verify failed:', verifyErr?.message)
      return new Response(
        JSON.stringify({ ok: false, error: 'Falha ao conectar ao servidor SMTP. Verifique host/porta/credenciais.' }),
        { status: 502 }
      )
    }

    const subject = `Contato via site — ${area ? `[${area}] ` : ''}${nome}`
    const text = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone || 'Não informado'}\nÁrea de Interesse: ${area}\n\nMensagem:\n${mensagem || 'Não informado'}`
    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; color:#0a192f;">
        <h2 style="margin:0 0 12px 0;">Novo contato pelo site</h2>
        <p style="margin:0 0 16px 0;">Você recebeu uma nova mensagem através do formulário.</p>
        <table style="width:100%; max-width:640px; border-collapse: collapse;">
          <tbody>
            <tr>
              <td style="padding:8px 0; width:160px; color:#555;">Nome</td>
              <td style="padding:8px 0; font-weight:600;">${nome}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Email</td>
              <td style="padding:8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Telefone</td>
              <td style="padding:8px 0;">${telefone || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Área de interesse</td>
              <td style="padding:8px 0;">${area}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top:16px; padding-top:12px; border-top:1px solid #e5e7eb;">
          <div style="color:#555; margin-bottom:6px;">Mensagem</div>
          <div style="white-space:pre-wrap; line-height:1.6;">${mensagem || 'Não informado'}</div>
        </div>
        <p style="margin-top:24px; color:#64748b; font-size:12px;">Enviado automaticamente pelo site cbzb.com.br</p>
      </div>
    `

    try {
      await transporter.sendMail({
        from: `CBZB Website <${user}>`,
        to,
        replyTo: isValidEmail(email) ? email : undefined,
        subject,
        text,
        html,
      })
    } catch (sendErr) {
      console.error('SMTP send failed:', sendErr?.message)
      return new Response(
        JSON.stringify({ ok: false, error: 'Falha ao enviar email. Verifique remetente/destinatário e permissões SMTP.' }),
        { status: 502 }
      )
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ ok: false, error: 'Falha ao enviar' }), { status: 400 })
  }
}


