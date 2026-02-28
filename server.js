import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resend } from 'resend'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

// ── Middleware ──────────────────────────────────
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// ── Resend Setup ───────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY)
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'contact@leadmeta.xyz'

// ── API Routes ─────────────────────────────────
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, company, type, message, attachment } = req.body

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: '이름, 이메일, 메시지는 필수 항목입니다.',
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: '유효한 이메일 주소를 입력해 주세요.',
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

        const payload = {
            from: 'LeadMeta Contact <onboarding@resend.dev>',
            to: [RECIPIENT_EMAIL],
            subject: `[LeadMeta 문의] ${name}님의 문의 (${typeLabel})`,
            replyTo: email,
            html: `
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
                            <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${attachment.name}</td>
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
            `,
        }

        if (attachment) {
            payload.attachments = [
                {
                    content: attachment.content,
                    filename: attachment.name,
                }
            ]
        }

        // Send email via Resend
        const { data, error } = await resend.emails.send(payload)

        if (error) {
            console.error('[Resend Error]', error)
            return res.status(400).json({  // Use 400 instead of 500 for client errors like invalid formats
                success: false,
                error: error.message || '이메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
            })
        }

        console.log(`[Contact] Email sent successfully: ${data?.id} from ${email}`)
        return res.json({ success: true, id: data?.id })
    } catch (err) {
        console.error('[Server Error]', err)
        return res.status(500).json({
            success: false,
            error: '서버 오류가 발생했습니다.',
        })
    }
})

// ── Static files (production) ──────────────────
app.use(express.static(path.join(__dirname, 'dist')))
app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// ── Start ──────────────────────────────────────
app.listen(PORT, () => {
    console.log(`✅ LeadMeta API server running on http://localhost:${PORT}`)
    console.log(`📧 Emails will be sent to: ${RECIPIENT_EMAIL}`)
})

// ── Helpers ────────────────────────────────────
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}
