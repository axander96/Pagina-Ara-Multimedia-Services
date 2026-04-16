import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json()

    // Validar campos
    if (!email || !message) {
      return Response.json(
        { error: 'Email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email no válido' },
        { status: 400 }
      )
    }

    // Verificar que Resend esté configurado
    if (!resend) {
      return Response.json(
        { error: 'Servicio de email no configurado' },
        { status: 500 }
      )
    }

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'ARA Multimedia <onboarding@resend.dev>',
      to: ['Info@aramultimedias.com'],
      subject: 'Nueva solicitud de propuesta - ARA Multimedia',
      html: `
        <h2>Nueva solicitud de propuesta</h2>
        <p><strong>Email del cliente:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr />
        <p>Enviado desde: aramultimedias.com</p>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return Response.json(
        { error: 'Error al enviar el mensaje' },
        { status: 500 }
      )
    }

    return Response.json(
      { message: 'Mensaje enviado correctamente', data },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API:', error)
    return Response.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
