export async function onRequestPost({ request, env }) {
    try {
        const body = await request.json()
        const { name, email, company, type, message, attachment } = body

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

        const typeLabels = {
            service: '서비스 문의',
            error: '오류 제보',
            complain: '불편 사항',
            partner: '제휴 제안',
            etc: '기타'
        }
        const typeLabel = typeLabels[type] || type || '미지정'

        const htmlContent = `
            <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 20px auto; background: #ffffff; color: #1e293b; padding: 40px; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <div style="border-bottom: 2px solid #f48a72; padding-bottom: 20px; margin-bottom: 24px;">
                    <h1 style="color: #f48a72; font-size: 24px; margin: 0; font-weight: 700;">새로운 문의가 접수되었습니다</h1>
                    <p style="color: #64748b; font-size: 14px; margin: 8px 0 0 0;">LeadMeta 웹사이트 문의 폼</p>
                </div>

                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 100px; vertical-align: top; font-size: 14px;">이름</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top; font-size: 14px;">이메일</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${escapeHtml(email)}" style="color: #f48a72; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top; font-size: 14px;">회사명</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company ? escapeHtml(company) : '<span style="color: #cbd5e1;">-</span>'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top; font-size: 14px;">문의 유형</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${typeLabel}</td>
                    </tr>
                    ${attachment ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top; font-size: 14px;">첨부파일</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${escapeHtml(attachment.name)}</td>
                    </tr>
                    ` : ''}
                </table>

                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                    <h3 style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0; font-weight: 700;">메시지 내용</h3>
                    <p style="color: #334155; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">${escapeHtml(message)}</p>
                </div>

                <div style="text-align: center; padding-top: 16px; border-top: 1px solid #f1f5f9;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">이 이메일은 <a href="https://www.leadmeta.xyz" style="color: #f48a72; text-decoration: none;">LeadMeta</a> 문의 폼에서 자동 발송되었습니다.</p>
                </div>
            </div>
        `

        const resendPayload = {
            from: 'LeadMeta Contact <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `[LeadMeta 문의] ${name}님의 문의 (${typeLabel})`,
            reply_to: email,
            html: htmlContent
        }

        if (attachment) {
            resendPayload.attachments = [
                {
                    content: attachment.content,
                    filename: attachment.name,
                }
            ]
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resendPayload)
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
