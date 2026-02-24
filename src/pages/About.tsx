import { useEffect, useRef } from 'react'

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

const timeline = [
    { year: '설립', title: '리드메타 창립', desc: '디지털 마케팅과 데이터 분석의 융합을 목표로 설립' },
    { year: '성장', title: '블로그 네트워크 확장', desc: '다양한 주제의 수익형 블로그를 10여 개로 확장' },
    { year: '혁신', title: '어바웃키워드 출시', desc: '키워드 분석 플랫폼 www.aboutkeyword.com 서비스 시작' },
    { year: '현재', title: '종합 디지털 에이전시', desc: '키워드 분석, 블로그 네트워크, 마케팅 대행 통합 운영' },
]

const values = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: '데이터 기반 의사결정',
        desc: '감에 의존하지 않고, 데이터로 입증된 전략을 수립합니다.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: '끊임없는 혁신',
        desc: '변화하는 디지털 환경에 맞춰 서비스를 지속적으로 진화시킵니다.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: '파트너십 중심',
        desc: '고객과 함께 성장하는 진정한 비즈니스 파트너가 되고자 합니다.',
    },
]

export default function About() {
    const heroRef = useReveal()
    const timelineRef = useReveal()
    const valuesRef = useReveal()

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div ref={heroRef} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">About Us</span>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
                        마케팅과 데이터의<br /><span className="gradient-text">융합을 선도합니다</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        리드메타는 키워드 분석 서비스, 다수의 수익형 블로그 네트워크,
                        그리고 광고 & 마케팅 대행을 통해 디지털 비즈니스의 성장을 이끄는 종합 디지털 에이전시입니다.
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* Timeline */}
            <section className="py-24">
                <div ref={timelineRef} className="max-w-4xl mx-auto px-6 lg:px-8 opacity-0">
                    <h2 className="text-3xl font-display font-bold text-white text-center mb-16">성장의 발자취</h2>
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
                        <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Our Values</span>
                        <h2 className="text-3xl font-display font-bold text-white mt-3">핵심 가치</h2>
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
