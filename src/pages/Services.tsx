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

export default function Services() {
    const { t } = useTranslation()
    const heroRef = useReveal()
    const keywordRef = useReveal()
    const blogRef = useReveal()
    const marketingRef = useReveal()

    const blogTopics = [
        { icon: '/image/ecommerce_icon.webp', name: t('services.blog_ecommerce'), desc: t('services.blog_ecommerce_desc') },
        { icon: '/image/finance_icon.webp', name: t('services.blog_finance'), desc: t('services.blog_finance_desc') },
        { icon: '/image/tech_icon.webp', name: t('services.blog_dev'), desc: t('services.blog_dev_desc') },
        { icon: '/image/rocket_icon.webp', name: t('services.blog_profit'), desc: t('services.blog_profit_desc') },
        { icon: '/image/star_icon.webp', name: t('services.blog_tech'), desc: t('services.blog_tech_desc') },
        { icon: '/image/marketing_icon.webp', name: t('services.blog_marketing'), desc: t('services.blog_marketing_desc') },
    ]

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50">
                    <img
                        src="/image/services_hero_bg.webp"
                        alt="Services Hero"
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                </div>
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div ref={heroRef} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <span className="text-brand-500 font-medium text-sm uppercase tracking-widest">{t('services.subtitle')}</span>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-4 mb-6">
                        {t('services.title1')}<br /><span className="gradient-text">{t('services.title2')}</span>
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {t('services.desc')}
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* About Keyword */}
            <section className="py-24 relative z-10">
                <div ref={keywordRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-500 font-medium text-sm uppercase tracking-widest">{t('services.s1_label')}</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-6">
                                {t('services.s1_title')}
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('services.s1_desc') }} />
                            <ul className="space-y-3 mb-8">
                                {[t('services.s1_f1'), t('services.s1_f2'), t('services.s1_f3'), t('services.s1_f4')].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://www.aboutkeyword.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
                            >
                                {t('services.s1_cta')}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Visual */}
                        <div className="glass-card p-8 rounded-2xl border border-slate-200">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="text-slate-900 text-sm font-medium">{t('services.s1_mock_search')}</span>
                                    <span className="ml-auto text-brand-600 text-xs font-bold">{t('services.s1_mock_btn')}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 border-opacity-50">
                                        <p className="text-slate-500 text-xs mb-1">{t('services.s1_mock_volume')}</p>
                                        <p className="text-slate-900 font-bold text-lg">12,400</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 border-opacity-50">
                                        <p className="text-slate-500 text-xs mb-1">{t('services.s1_mock_comp')}</p>
                                        <p className="text-brand-600 font-bold text-lg">{t('services.s1_mock_comp_val')}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 border-opacity-50">
                                        <p className="text-slate-500 text-xs mb-1">{t('services.s1_mock_trend')}</p>
                                        <p className="text-emerald-500 font-bold text-lg flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            {t('services.s1_mock_trend_val')}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 border-opacity-50">
                                        <p className="text-slate-500 text-xs mb-1">{t('services.s1_mock_opp')}</p>
                                        <p className="text-amber-500 font-bold text-lg">87/100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Blog Network */}
            <section className="py-24 bg-slate-50/50 relative z-10">
                <div ref={blogRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="text-center mb-16">
                        <span className="text-brand-500 font-medium text-sm uppercase tracking-widest">{t('services.s2_label')}</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-4">
                            {t('services.s2_title')}
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            {t('services.s2_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {blogTopics.map((topic) => (
                            <div key={topic.name} className="glass-card p-6 text-center group border border-slate-200">
                                <div className="text-4xl mb-4 flex justify-center h-16 items-center">
                                    {topic.icon.startsWith('/') ? (
                                        <img src={topic.icon} alt={topic.name} className="h-14 object-contain" />
                                    ) : (
                                        topic.icon
                                    )}
                                </div>
                                <h3 className="text-slate-900 font-bold mb-1">{topic.name}</h3>
                                <p className="text-slate-600 text-sm">{topic.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 glass-card p-8 text-center border border-slate-200">
                        <div className="flex flex-wrap justify-center gap-12">
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">{t('services.s2_stat1')}</div>
                                <div className="text-slate-600 text-sm mt-1">{t('services.s2_stat1_label')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">{t('services.s2_stat2')}</div>
                                <div className="text-slate-600 text-sm mt-1">{t('services.s2_stat2_label')}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">{t('services.s2_stat3')}</div>
                                <div className="text-slate-600 text-sm mt-1">{t('services.s2_stat3_label')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Marketing */}
            <section className="py-24 relative z-10">
                <div ref={marketingRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual */}
                        <div className="order-2 lg:order-1">
                            <div className="glass-card p-8 rounded-2xl space-y-6 border border-slate-200">
                                {[
                                    { label: t('services.s3_bar1'), progress: 92, color: 'bg-brand-500' },
                                    { label: t('services.s3_bar2'), progress: 85, color: 'bg-emerald-500' },
                                    { label: t('services.s3_bar3'), progress: 78, color: 'bg-amber-500' },
                                    { label: t('services.s3_bar4'), progress: 95, color: 'bg-blue-500' },
                                ].map((bar) => (
                                    <div key={bar.label}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-600 font-medium">{bar.label}</span>
                                            <span className="text-slate-900 font-bold">{bar.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${bar.color} rounded-full transition-all duration-1000`}
                                                style={{ width: `${bar.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-brand-500 font-medium text-sm uppercase tracking-widest">{t('services.s3_label')}</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-3 mb-6">
                                {t('services.s3_title')}
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {t('services.s3_desc')}
                            </p>
                            <ul className="space-y-3">
                                {[t('services.s3_f1'), t('services.s3_f2'), t('services.s3_f3'), t('services.s3_f4')].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                                        <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
