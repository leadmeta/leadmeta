import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation()
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            let data;
            try {
                data = await res.json()
            } catch (e) {
                throw new Error('서버와 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.')
            }

            if (!res.ok || !data.success) {
                let errorMessage = data?.error || '전송에 실패했습니다.'
                if (errorMessage.includes('reply_to')) {
                    errorMessage = t('contact.error_invalid_email')
                }
                throw new Error(errorMessage)
            }

            setSubmitted(true)
        } catch (err) {
            setError(err instanceof Error ? err.message : '오류가 발생했습니다. 다시 시도해 주세요.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50">
                    <img
                        src="/image/abstract_blue_bg_1.webp"
                        alt="Contact Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                </div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
                    <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest bg-brand-50 px-4 py-2 rounded-full border border-brand-200 inline-block">{t('contact.subtitle')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-6 mb-8 leading-[1.15] tracking-tight">
                        {t('contact.title')}
                    </h1>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        {t('contact.desc')}
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* Form + Info */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8 relative z-10">
                            <div className="glass-card p-6 border border-slate-200">
                                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-slate-900 font-bold mb-1">{t('contact.email_title')}</h3>
                                <p className="text-slate-600 text-sm">{t('contact.email_value')}</p>
                            </div>

                            <div className="glass-card p-6 border border-slate-200">
                                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-slate-900 font-bold mb-1">{t('contact.web_title')}</h3>
                                <p className="text-slate-600 text-sm">{t('contact.web_value')}</p>
                            </div>

                            <div className="glass-card p-6 border border-slate-200">
                                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-slate-900 font-bold mb-1">{t('contact.response_title')}</h3>
                                <p className="text-slate-600 text-sm">{t('contact.response_value')}</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3 relative z-10">
                            {submitted ? (
                                <div className="glass-card p-12 text-center border border-slate-200">
                                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-slate-900 text-2xl font-bold mb-3">{t('contact.success_title')}</h3>
                                    <p className="text-slate-600">{t('contact.success_desc')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6 border border-slate-200">
                                    {error && (
                                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-slate-700 text-sm font-medium mb-2">{t('contact.label_name')}</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                                placeholder={t('contact.placeholder_name')}
                                                disabled={loading}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-slate-700 text-sm font-medium mb-2">{t('contact.label_email')}</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                                placeholder={t('contact.placeholder_email')}
                                                disabled={loading}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-slate-700 text-sm font-medium mb-2">{t('contact.label_company')}</label>
                                        <input
                                            id="company"
                                            type="text"
                                            value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                            placeholder={t('contact.placeholder_company')}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="type" className="block text-slate-700 text-sm font-medium mb-2">{t('contact.label_type')}</label>
                                        <select
                                            id="type"
                                            required
                                            value={form.type}
                                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                                            disabled={loading}
                                        >
                                            <option value="" disabled>{t('contact.placeholder_type')}</option>
                                            <option value="service">{t('contact.type_service')}</option>
                                            <option value="error">{t('contact.type_error')}</option>
                                            <option value="complain">{t('contact.type_complain')}</option>
                                            <option value="partner">{t('contact.type_partner')}</option>
                                            <option value="etc">{t('contact.type_etc')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-slate-700 text-sm font-medium mb-2">{t('contact.label_message')}</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                                            placeholder={t('contact.placeholder_message')}
                                            disabled={loading}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {loading ? (
                                            <span className="inline-flex items-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                전송 중...
                                            </span>
                                        ) : (
                                            t('contact.submit')
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
