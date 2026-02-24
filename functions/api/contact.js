export async function onRequestPost({ request, env }) {
    try {
        const body = await request.json()
        const { name, email, company, message } = body

        // Validation – required fields
        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                error: '이름, 이메일, 메시지는 필수 항목입니다.',
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        // Email format validation (simple regex)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(email)) {
            return new Response(JSON.stringify({
                success: false,
                error: '유효한 이메일 주소를 입력해 주세요.',
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const resendApiKey = env.RESEND_API_KEY
        const recipientEmail = env.RECIPIENT_EMAIL || 'contact@leadmeta.xyz'

        if (!resendApiKey) {
            return new Response(JSON.stringify({
                success: false,
                error: 'Server error: Missing RESEND_API_KEY environment variable in Cloudflare settings.',
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const htmlContent = `
            <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1520; color: #e2e8f0; padding: 32px; border-radius: 16px;">
                <div style="border-bottom: 2px solid rgba(244,138,114,0.3); padding-bottom: 20px; margin-bottom: 24px;">
                    <h1 style="color: #f48a72; font-size: 24px; margin: 0;">새로운 문의가 접수되었습니다</h1>
                    <p style="color: #64748b; font-size: 14px; margin: 8px 0 0 0;">LeadMeta 웹사이트 문의 폼</p>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #94a3b8; width: 100px; vertical-align: top;">이름</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f1f5f9; font-weight: 600;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #94a3b8; vertical-align: top;">이메일</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);"><a href="mailto:${escapeHtml(email)}" style="color: #f48a72; text-decoration: none;">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #94a3b8; vertical-align: top;">회사명</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #f1f5f9;">${company ? escapeHtml(company) : '<span style="color: #475569;">-</span>'}</td>
                    </tr>
                </table>

                <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <h3 style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">메시지</h3>
                    <p style="color: #e2e8f0; line-height: 1.7; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
                </div>

                <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);">
                    <p style="color: #475569; font-size: 12px; margin: 0;">이 이메일은 자동 발송되었습니다.</p>
                </div>
            </div>
        `

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'LeadMeta Contact <onboarding@resend.dev>',
                to: [recipientEmail],
                subject: `[LeadMeta 문의] ${name}님의 문의`,
                reply_to: email, // Resend API uses reply_to, not replyTo
                html: htmlContent
            })
        })

        const resendData = await resendResponse.json()

        if (!resendResponse.ok) {
            console.error('Resend API Error:', resendData)
            return new Response(JSON.stringify({
                success: false,
                error: '이메일 전송에 실패했습니다. (Resend API 오류)',
                details: resendData
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        return new Response(JSON.stringify({ success: true, id: resendData.id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (err) {
        console.error('Server Internal Error:', err)
        return new Response(JSON.stringify({
            success: false,
            error: '서버 오류가 발생했습니다.',
            details: err.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

function escapeHtml(str) {
    if (typeof str !== 'string') return ''
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
