import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('animate-fade-in-up')
                    obs.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return ref
}

export default function About() {
    const { t } = useTranslation()
    const heroRef = useReveal()
    const section1Ref = useReveal()
    const section2Ref = useReveal()
    const section3Ref = useReveal()
    const section4Ref = useReveal()
    const valuesRef = useReveal()

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: t('about.v1_title'),
            desc: t('about.v1_desc'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: t('about.v2_title'),
            desc: t('about.v2_desc'),
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t('about.v3_title'),
            desc: t('about.v3_desc'),
        },
    ]

    return (
        <>
            {/* Hero Section - The Mission */}
            <section className="pt-40 pb-32 relative overflow-hidden flex items-center justify-center min-h-[85vh]">
                <div className="absolute inset-0 bg-slate-50">
                    <img
                        src="/image/about_hero_bg.webp"
                        alt="About Hero"
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.25]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[150px]" />

                <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest bg-brand-50 px-4 py-2 rounded-full border border-brand-200 inline-block">{t('about.subtitle')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 mt-6 mb-8 leading-[1.15] tracking-tight">
                        {t('about.title1')}<br /><span className="text-brand-600">{t('about.title2')}</span>
                    </h1>
                    <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                        {t('about.desc')}
                    </p>
                </div>
            </section>

            {/* Section 1 - Data & Technology */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div ref={section1Ref} className="max-w-5xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {t('about.section1_title')}
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        {t('about.section1_desc')}
                    </p>
                    <a
                        href="https://www.aboutkeyword.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors group"
                    >
                        {t('about.section1_cta')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Section 2 - Innovation */}
            <section className="py-32 relative overflow-hidden bg-slate-50">
                <div className="absolute inset-0 opacity-[0.4]">
                    <img src="/image/abstract_blue_bg_1.webp" alt="Innovation Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                </div>
                <div ref={section2Ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {t('about.section2_title')}
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        {t('about.section2_desc')}
                    </p>
                    <Link
                        to="/services/marketing-agency"
                        className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors group"
                    >
                        {t('about.section2_cta')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Section 3 - Fundy */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div ref={section3Ref} className="max-w-5xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {t('about.section3_title')}
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        {t('about.section3_desc')}
                    </p>
                    <a
                        href="https://fundy.ai.kr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors group"
                    >
                        {t('about.section3_cta')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Section 4 - Action & Partnership */}
            <section className="py-32 relative overflow-hidden bg-slate-50">
                <div ref={section4Ref} className="max-w-5xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                        {t('about.section4_title')}
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        {t('about.section4_desc')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors group"
                    >
                        {t('about.section4_cta')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            <div className="section-divider opacity-50" />

            {/* Core Values / Leadership */}
            <section className="py-32 relative z-10 bg-white">
                <div ref={valuesRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{t('about.leadership_title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                        {values.map((v, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-brand-500/5 text-brand-600 flex items-center justify-center mx-auto mb-8 group-hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                                    {v.icon}
                                </div>
                                <h3 className="text-slate-900 text-2xl font-bold mb-4">{v.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
