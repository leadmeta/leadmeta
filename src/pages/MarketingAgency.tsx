export default function MarketingAgency() {

    return (
        <div className="pt-32 pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 -right-60 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-purple-400 font-medium text-sm uppercase tracking-widest bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">Performance</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">
                        퍼포먼스 마케팅 대행
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        데이터와 크리에이티브의 결합으로 브랜드를 성장시키는<br className="hidden sm:block" /> 전방위적 디지털 마케팅 솔루션을 제공합니다.
                    </p>
                </div>

                {/* About & Market Info */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-8 lg:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-6">ROI를 극대화하는 마케팅 사업</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            LeadMeta의 마케팅 대행(Agency) 서비스는 철저한 데이터 기반의 퍼포먼스 마케팅을 지향합니다. 고객사의 매출 증대, 앱 설치, 방문자 유입 등 구체적인 KPI를 달성하기 위해 매체 믹스, 타겟팅, A/B 테스트를 쉼 없이 반복합니다.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            우리의 목적은 단순한 광고 노출이 아니라, 실제 비즈니스 성장을 증명하는 숫자를 만들어내는 것입니다. 구글 애즈(Google Ads), 메타(Meta), 네이버, 카카오 등 빅 미디어는 물론 네이티브 광고 인프라까지 폭넓게 활용합니다.
                        </p>
                    </div>

                    <div className="glass-card p-8 lg:p-10 bg-slate-900/50">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            디지털 광고 시장 트렌드
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">초개인화 타겟팅과 퍼포먼스 중심</h4>
                                <p className="text-slate-400 text-sm">불특정 다수를 향한 광고에서, 고객의 데이터를 바탕으로 구매 확률이 높은 유저를 핀셋 타겟팅하는 퍼포먼스 마케팅이 시장의 핵심으로 자리잡았습니다.</p>
                            </div>
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">검색 의도(Search Intent)의 가치</h4>
                                <p className="text-slate-400 text-sm">고객이 능동적으로 검색하는 행위에는 매우 명확한 '구매 의도(Intent)'가 있습니다. 검색 광고(SA) 및 SEO 최적화는 여전히 가장 전환율이 높은 매체입니다.</p>
                            </div>
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">서드파티 쿠키리스(Cookie-less) 대응</h4>
                                <p className="text-slate-400 text-sm">프라이버시 강화 흐름에 따라 자체 데이터(1st party data)와 강력한 콘텐츠 마케팅 연계의 중요성이 증대되고 있습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Revenue & Strengths Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Revenue Model */}
                    <div className="glass-card p-8 group">
                        <div className="w-14 h-14 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">수익 모델 (Revenue Model)</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">에이전시 수수료 (Agency Fee)</strong>
                                    <span className="text-slate-400 text-sm">광고 집행 예산에 비례하여 발생하는 매체 공식 대행 수수료 모델입니다. 가장 기본적인 수익 구조를 형성합니다.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">퍼포먼스 인센티브 (Performance Share)</strong>
                                    <span className="text-slate-400 text-sm">목표 ROAS(광고비 대비 매출액) 초과 달성 시, 상호 합의된 비율에 따라 추가 인센티브를 배분받는 구조로 상생 시너지를 냅니다.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">리테이너 기반 컨설팅 (Retainer Fee)</strong>
                                    <span className="text-slate-400 text-sm">연간 또는 월간 계약을 바탕으로 브랜드의 포지셔닝 및 핵심 마케팅 전략을 도출하는 컨설팅 비용입니다.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Core Strengths */}
                    <div className="glass-card p-8 group">
                        <div className="w-14 h-14 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">LeadMeta만의 강점</h3>
                        <div className="space-y-5">
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">어바웃키워드 분석 시너지</h4>
                                <p className="text-slate-400 text-sm">자사 보유 키워드 전문 플랫폼의 백데이터를 활용하여 경쟁사가 찾지 못한 검색어 타겟을 독점적으로 선점합니다.</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">자체 블로그 네트워크 연계</h4>
                                <p className="text-slate-400 text-sm">우리가 직접 관리하는 10여개의 고품질 전문 블로그를 통한 네이티브 콘텐츠 발행 및 백링크 강화 작업이 가능합니다.</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">철저한 성과 중심 리포팅</h4>
                                <p className="text-slate-400 text-sm">가설 검증(A/B Testing), 코호트 분석, LTV 측정 등을 통해 단순 조회수가 아닌 '전환 성과' 위주의 디테일한 리포트를 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
