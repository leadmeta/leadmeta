import { useState, type FormEvent } from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // In production, integrate with EmailJS / Formspree / etc.
        setSubmitted(true)
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fade-in-up">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Contact Us</span>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
                        문의하기
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        궁금한 점이 있으시거나 서비스에 관심이 있으시다면 언제든 연락해 주세요.
                        빠른 시간 내에 답변 드리겠습니다.
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* Form + Info */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass-card p-6">
                                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-1">이메일</h3>
                                <p className="text-slate-400 text-sm">contact@leadmeta.xyz</p>
                            </div>

                            <div className="glass-card p-6">
                                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-1">웹사이트</h3>
                                <p className="text-slate-400 text-sm">www.leadmeta.xyz</p>
                            </div>

                            <div className="glass-card p-6">
                                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-1">응답 시간</h3>
                                <p className="text-slate-400 text-sm">영업일 기준 24시간 이내</p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <div className="glass-card p-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-white text-2xl font-bold mb-3">문의가 접수되었습니다</h3>
                                    <p className="text-slate-400">빠른 시간 내에 답변 드리겠습니다. 감사합니다!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">이름 *</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/25 transition-all"
                                                placeholder="홍길동"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">이메일 *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/25 transition-all"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-white text-sm font-medium mb-2">회사명</label>
                                        <input
                                            id="company"
                                            type="text"
                                            value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/25 transition-all"
                                            placeholder="(선택사항)"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-white text-sm font-medium mb-2">메시지 *</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-400/50 focus:ring-1 focus:ring-brand-400/25 transition-all resize-none"
                                            placeholder="문의 내용을 입력해 주세요..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        문의 보내기
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
