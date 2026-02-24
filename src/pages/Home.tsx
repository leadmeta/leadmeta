import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/* ── Intersection Observer Hook ─────────────────── */
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

export default function Home() {
    const { t } = useTranslation()
    const statsRef = useReveal()
    const servicesRef = useReveal()
    const ctaRef = useReveal()

    const translatedStats = [
        { value: '10+', label: t('home.stats_blogs'), desc: t('home.stats_blogs_desc') },
        { value: '100K+', label: t('home.stats_keywords'), desc: t('home.stats_keywords_desc') },
        { value: '5+', label: t('home.stats_fields'), desc: t('home.stats_fields_desc') },
        { value: '24/7', label: t('home.stats_uptime'), desc: t('home.stats_uptime_desc') },
    ]

    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: t('home.service1_title'),
            subtitle: t('home.service1_subtitle'),
            desc: t('home.service1_desc'),
            link: 'https://www.aboutkeyword.com',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            ),
            title: t('home.service2_title'),
            subtitle: t('home.service2_subtitle'),
            desc: t('home.service2_desc'),
            link: '/services',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: t('home.service3_title'),
            subtitle: t('home.service3_subtitle'),
            desc: t('home.service3_desc'),
            link: '/services',
        },
    ]

    return (
        <>
            {/* ── Hero ───────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-[100px]" />
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium animate-fade-in">
                                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                                {t('home.badge')}
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in-up">
                                <span className="text-white">{t('home.hero_title')}</span>
                            </h1>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                {t('home.hero_desc')}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    {t('home.cta_services')}
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                                >
                                    {t('home.cta_about')}
                                </Link>
                            </div>
                        </div>

                        {/* Right Visual */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-500/20 rounded-3xl blur-3xl animate-pulse" />
                                <div className="relative glass-card p-12 rounded-3xl animate-float border border-white/10">
                                    <div className="w-40 h-40 mx-auto flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-white/5">
                                        <img
                                            src="/image/LeadMeta_logo.webp"
                                            alt="LeadMeta"
                                            className="w-32 drop-shadow-2xl"
                                        />
                                    </div>
                                    <p className="mt-8 text-center text-slate-300 font-display font-semibold text-xl tracking-wide">
                                        Lead<span className="gradient-text">META</span>
                                    </p>
                                    <p className="text-center text-slate-500 text-sm mt-1 uppercase tracking-widest">{t('footer.slogan')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            <div className="section-divider" />

            {/* ── Stats ──────────────────────────────────── */}
            <section className="py-24 bg-slate-950">
                <div ref={statsRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {translatedStats.map((s, i) => (
                            <div
                                key={i}
                                className="glass-card p-8 text-center"
                            >
                                <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                                    {s.value}
                                </div>
                                <div className="text-white font-semibold mb-1">{s.label}</div>
                                <div className="text-slate-500 text-sm italic opacity-80">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* ── Services Preview ───────────────────────── */}
            <section className="py-24 bg-slate-950/50">
                <div ref={servicesRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="text-center mb-16">
                        <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Our Services</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3">
                            {t('home.services_title')}
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            {t('home.services_desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            s.link.startsWith('http') ? (
                                <a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-8 group cursor-pointer block"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors duration-300">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-1">{s.title}</h3>
                                    <p className="text-brand-400/60 text-sm font-medium mb-3">{s.subtitle}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                    <div className="mt-5 text-brand-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {t('home.view_more')}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            ) : (
                                <Link
                                    key={i}
                                    to={s.link}
                                    className="glass-card p-8 group cursor-pointer block"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors duration-300">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-1">{s.title}</h3>
                                    <p className="text-brand-400/60 text-sm font-medium mb-3">{s.subtitle}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                                    <div className="mt-5 text-brand-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {t('home.view_more')}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* ── CTA ────────────────────────────────────── */}
            <section className="py-24">
                <div ref={ctaRef} className="max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                        {t('home.cta_title')}
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        {t('home.cta_desc')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white font-semibold text-lg shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
                        >
                            {t('home.cta_consult')}
                        </Link>
                        <a
                            href="https://www.aboutkeyword.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300"
                        >
                            {t('home.cta_visit')}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
