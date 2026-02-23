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

const blogTopics = [
    { icon: '🛒', name: '이커머스', desc: '온라인 쇼핑과 커머스 트렌드' },
    { icon: '💰', name: '파이낸스', desc: '금융, 투자, 재테크 정보' },
    { icon: '💻', name: '개발 & 코딩', desc: '프로그래밍과 기술 가이드' },
    { icon: '📈', name: '수익형 블로그', desc: '블로그 수익화 노하우' },
    { icon: '📱', name: '테크 & 가젯', desc: '최신 기술과 디바이스 리뷰' },
    { icon: '🎯', name: '마케팅', desc: '디지털 마케팅 전략과 팁' },
]

export default function Services() {
    const heroRef = useReveal()
    const keywordRef = useReveal()
    const blogRef = useReveal()
    const marketingRef = useReveal()

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />

                <div ref={heroRef} className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center opacity-0">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Our Services</span>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
                        디지털 비즈니스의<br /><span className="gradient-text">모든 영역</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        키워드 분석부터 콘텐츠 운영, 광고 대행까지.
                        리드메타의 통합 서비스로 비즈니스 성장을 경험하세요.
                    </p>
                </div>
            </section>

            <div className="section-divider" />

            {/* About Keyword */}
            <section className="py-24">
                <div ref={keywordRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Service 01</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3 mb-6">
                                어바웃키워드
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                <strong className="text-white">www.aboutkeyword.com</strong> — 정밀한 키워드 분석을 통해
                                검색 트렌드, 경쟁 현황, 검색량 변화를 파악합니다. 데이터 기반의 콘텐츠 전략은
                                검색 엔진 최적화의 핵심입니다.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['실시간 키워드 트렌드 분석', '검색량 & 경쟁도 데이터', '키워드 기회 발견', 'AI 기반 인사이트 제공'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <svg className="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                                어바웃키워드 방문하기
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Visual */}
                        <div className="glass-card p-8 rounded-2xl">
                            <div className="space-y-4">
                                {/* Mock keyword analysis UI */}
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="text-white text-sm">키워드 분석</span>
                                    <span className="ml-auto text-brand-400 text-xs font-bold">검색</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 rounded-xl bg-white/5">
                                        <p className="text-slate-500 text-xs mb-1">월간 검색량</p>
                                        <p className="text-white font-bold text-lg">12,400</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5">
                                        <p className="text-slate-500 text-xs mb-1">경쟁도</p>
                                        <p className="text-brand-400 font-bold text-lg">보통</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5">
                                        <p className="text-slate-500 text-xs mb-1">트렌드</p>
                                        <p className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                            상승
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5">
                                        <p className="text-slate-500 text-xs mb-1">기회 점수</p>
                                        <p className="text-amber-400 font-bold text-lg">87/100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Blog Network */}
            <section className="py-24 bg-slate-950/50">
                <div ref={blogRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="text-center mb-16">
                        <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Service 02</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3 mb-4">
                            블로그 네트워크
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            이커머스, 파이낸스, 개발, 코딩 등 다양한 주제의 10여 개 수익형 블로그를
                            전문적으로 운영하고 있습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {blogTopics.map((topic) => (
                            <div key={topic.name} className="glass-card p-6 text-center group">
                                <div className="text-4xl mb-4">{topic.icon}</div>
                                <h3 className="text-white font-bold mb-1">{topic.name}</h3>
                                <p className="text-slate-500 text-sm">{topic.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 glass-card p-8 text-center">
                        <div className="flex flex-wrap justify-center gap-12">
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">10+</div>
                                <div className="text-slate-400 text-sm mt-1">운영 블로그</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">다양한</div>
                                <div className="text-slate-400 text-sm mt-1">주제 영역</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold gradient-text">수익형</div>
                                <div className="text-slate-400 text-sm mt-1">비즈니스 모델</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Marketing */}
            <section className="py-24">
                <div ref={marketingRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual */}
                        <div className="order-2 lg:order-1">
                            <div className="glass-card p-8 rounded-2xl space-y-6">
                                {[
                                    { label: '브랜드 인지도', progress: 92, color: 'bg-brand-400' },
                                    { label: '검색 유입', progress: 85, color: 'bg-emerald-400' },
                                    { label: '전환율', progress: 78, color: 'bg-amber-400' },
                                    { label: 'ROI', progress: 95, color: 'bg-blue-400' },
                                ].map((bar) => (
                                    <div key={bar.label}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-300">{bar.label}</span>
                                            <span className="text-white font-bold">{bar.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
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
                            <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">Service 03</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-3 mb-6">
                                광고 & 마케팅 대행
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                데이터 기반의 마케팅 전략과 광고 대행을 통해 비즈니스의 성장을 가속화합니다.
                                키워드 분석과 콘텐츠 전문성을 바탕으로 최적의 마케팅 솔루션을 제공합니다.
                            </p>
                            <ul className="space-y-3">
                                {['검색 엔진 최적화 (SEO)', '콘텐츠 마케팅 전략', '퍼포먼스 마케팅', '소셜 미디어 관리'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <svg className="w-5 h-5 text-brand-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
