import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

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
    const timelineRef = useReveal()
    const valuesRef = useReveal()

    const timeline = [
        { year: t('about.t1_year'), title: t('about.t1_title'), desc: t('about.t1_desc') },
        { year: t('about.t2_year'), title: t('about.t2_title'), desc: t('about.t2_desc') },
        { year: t('about.t3_year'), title: t('about.t3_title'), desc: t('about.t3_desc') },
        { year: t('about.t4_year'), title: t('about.t4_title'), desc: t('about.t4_desc') },
    ]

    const values = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: t('about.v1_title'),
            desc: t('about.v1_desc'),
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: t('about.v2_title'),
            desc: t('about.v2_desc'),
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: t('about.v3_title'),
            desc: t('about.v3_desc'),
        },
    ]

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div ref={heroRef} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">{t('about.subtitle')}</span>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
                        {t('about.title1')}<br /><span className="gradient-text">{t('about.title2')}</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        {t('about.desc')}
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* Timeline */}
            <section className="py-24">
                <div ref={timelineRef} className="max-w-4xl mx-auto px-6 lg:px-8 opacity-0">
                    <h2 className="text-3xl font-display font-bold text-white text-center mb-16">{t('about.timeline_title')}</h2>
                    <div className="space-y-0">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                {/* Line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-brand-500/30 border-2 border-brand-400 group-hover:bg-brand-400 transition-colors flex-shrink-0" />
                                    {i < timeline.length - 1 && <div className="w-px h-full bg-white/10" />}
                                </div>
                                {/* Content */}
                                <div className="pb-12">
                                    <span className="text-brand-400 font-bold text-sm uppercase tracking-wider">{item.year}</span>
                                    <h3 className="text-white text-xl font-bold mt-1">{item.title}</h3>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Values */}
            <section className="py-24">
                <div ref={valuesRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="text-center mb-16">
                        <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">{t('about.values_subtitle')}</span>
                        <h2 className="text-3xl font-display font-bold text-white mt-3">{t('about.values_title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="glass-card p-8 text-center">
                                <div className="w-14 h-14 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mx-auto mb-6">
                                    {v.icon}
                                </div>
                                <h3 className="text-white text-lg font-bold mb-3">{v.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
