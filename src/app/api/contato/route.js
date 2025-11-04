import nodemailer from 'nodemailer'

function isValidEmail(email) {
  if (typeof email !== 'string') return false
  return /.+@.+\..+/.test(email)
}

function sanitize(input) {
  if (typeof input !== 'string') return ''
  return input.replace(/[\u0000-\u001F\u007F]/g, '').trim()
}

function escapeHtml(text) {
  if (typeof text !== 'string') return ''
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

export async function POST(request) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr)
      return new Response(
        JSON.stringify({ ok: false, error: 'Dados inválidos' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
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
      return new Response(
        JSON.stringify({ ok: false, error: 'Campos inválidos', fields: errors }),
        { 
          status: 422,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const to = process.env.SMTP_TO || 'contato@cbzb.com.br'
    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT || 465)
    const secureEnv = process.env.SMTP_SECURE
    const secure = typeof secureEnv === 'string' ? secureEnv === 'true' : (port === 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    console.log('Configuração SMTP:', {
      host,
      port,
      secure,
      user: user ? `${user.substring(0, 3)}***` : 'não configurado',
      pass: pass ? '***' : 'não configurado',
      to
    })

    if (!user || !pass) {
      console.error('SMTP_USER/SMTP_PASS não configurados')
      return new Response(
        JSON.stringify({ ok: false, error: 'Serviço de email temporariamente indisponível' }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
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
      console.log('SMTP conexão verificada com sucesso')
    } catch (verifyErr) {
      console.error('SMTP verify failed:', {
        message: verifyErr?.message,
        code: verifyErr?.code,
        command: verifyErr?.command,
        response: verifyErr?.response,
        responseCode: verifyErr?.responseCode,
        host,
        port
      })
      
      const errorMessage = process.env.NODE_ENV === 'development'
        ? `Erro na verificação SMTP: ${verifyErr?.message || 'Erro desconhecido'}`
        : 'Serviço de email temporariamente indisponível. Tente novamente mais tarde.'
      
      return new Response(
        JSON.stringify({ ok: false, error: errorMessage }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const safeNome = escapeHtml(nome)
    const safeEmail = escapeHtml(email)
    const safeTelefone = escapeHtml(telefone || 'Não informado')
    const safeArea = escapeHtml(area)
    const safeMensagem = escapeHtml(mensagem || 'Não informado')
    
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
              <td style="padding:8px 0; font-weight:600;">${safeNome}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Email</td>
              <td style="padding:8px 0;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Telefone</td>
              <td style="padding:8px 0;">${safeTelefone}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#555;">Área de interesse</td>
              <td style="padding:8px 0;">${safeArea}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top:16px; padding-top:12px; border-top:1px solid #e5e7eb;">
          <div style="color:#555; margin-bottom:6px;">Mensagem</div>
          <div style="white-space:pre-wrap; line-height:1.6;">${safeMensagem}</div>
        </div>
        <p style="margin-top:24px; color:#64748b; font-size:12px;">Enviado automaticamente pelo site cbzb.com.br</p>
      </div>
    `

    let mailResult
    try {
      mailResult = await transporter.sendMail({
        from: `CBZB Website <${user}>`,
        to,
        replyTo: isValidEmail(email) ? email : undefined,
        subject,
        text,
        html,
      })
      console.log('Email enviado com sucesso:', {
        messageId: mailResult.messageId,
        accepted: mailResult.accepted,
        rejected: mailResult.rejected,
        to
      })
    } catch (sendErr) {
      console.error('SMTP send failed:', {
        message: sendErr?.message,
        code: sendErr?.code,
        command: sendErr?.command,
        response: sendErr?.response,
        responseCode: sendErr?.responseCode,
        stack: sendErr?.stack
      })
      
      // Retornar mensagem de erro mais específica em desenvolvimento
      const errorMessage = process.env.NODE_ENV === 'development' 
        ? `Erro ao enviar email: ${sendErr?.message || 'Erro desconhecido'}`
        : 'Serviço de email temporariamente indisponível. Tente novamente mais tarde.'
      
      return new Response(
        JSON.stringify({ ok: false, error: errorMessage }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Verificar se o email foi realmente aceito
    if (mailResult.rejected && mailResult.rejected.length > 0) {
      console.error('Email foi rejeitado:', mailResult.rejected)
      return new Response(
        JSON.stringify({ 
          ok: false, 
          error: 'Email foi rejeitado pelo servidor. Verifique o endereço de destino.' 
        }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({ ok: true, messageId: mailResult.messageId }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (e) {
    console.error('API error:', e)
    return new Response(
      JSON.stringify({ ok: false, error: 'Erro interno do servidor. Tente novamente mais tarde.' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}


