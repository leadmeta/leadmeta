export default function BlogNetwork() {

    return (
        <div className="pt-32 pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-40 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20">Our Service</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">
                        블로그 네트워크
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        구글 애드센스 기반의 데이터 드리븐 블로그 네트워크를 운영하여<br className="hidden sm:block" /> 안정적이고 확장 가능한 수익 모델을 구축합니다.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Revenue Model */}
                    <div className="glass-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">안정적인 수익 모델</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            구글 애드센스(Google AdSense)를 주 수익원으로 활용하여, 트래픽에 비례하는 달러($) 패시브 인컴을 창출합니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                10여 개 이상의 전문 분야(이커머스, IT, 금융, 비즈니스 등) 다각화
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                검색 엔진 최적화(SEO)를 통한 오가닉 트래픽 획득 기반
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                고단가 키워드 집중 공략으로 트래픽 대비 높은 수익성 유지
                            </li>
                        </ul>
                    </div>

                    {/* Data & Algorithm */}
                    <div className="glass-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">데이터 분석 및 알고리즘 개척</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            단순한 콘텐츠 생산을 넘어, 철저한 데이터 기반의 콘텐츠 기획 및 자체 알고리즘을 이용한 체계적인 운영을 지향합니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                '어바웃키워드' 솔루션을 활용한 롱테일/저경쟁 고단가 키워드 발굴
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                사용자 체류 시간(Dwell Time) 및 이탈률 개선 A/B 테스트 정례화
                            </li>
                            <li className="flex items-start gap-3 text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                AI 및 자동화 툴을 결합한 리서치-작성 파이프라인 최소화 로직 적용
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Benefits */}
                    <div className="glass-card p-8 lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blend-overlay bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">비즈니스 이점 (Benefits)</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">낮은 초기 비용, 높은 이익률</h4>
                                <p className="text-slate-400 sm:text-sm">물리적 재고나 대규모 인프라 투자 없이 호스팅 및 최적화 리소스만으로 높은 영업 이익률을 달성합니다.</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">무형의 디지털 자산화</h4>
                                <p className="text-slate-400 sm:text-sm">구축된 각 전문 블로그는 그 자체로 월간 수익을 창출하는 디지털 부동산 역할을 하며 자산 가치를 지닙니다.</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">광고 및 백링크 인프라</h4>
                                <p className="text-slate-400 sm:text-sm">운영 중인 고품질 블로그 네트워크는 향후 마케팅 대행 시 초기 백링크 파워업 및 네이티브 광고 채널로 활용 가능합니다.</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">위치/시간 제약 없는 노마드 구조</h4>
                                <p className="text-slate-400 sm:text-sm">인터넷만 연결되어 있다면 24시간 365일 비즈니스가 돌아가는 패시브 인컴 파이프라인입니다.</p>
                            </div>
                        </div>
                    </div>

                    {/* Risks */}
                    <div className="glass-card p-8 bg-gradient-to-br from-red-500/5 to-transparent">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blend-overlay bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">리스크 관리 (Risks)</h3>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="text-slate-200 font-medium mb-1 text-sm">검색엔진 로직 업데이트</h4>
                                <p className="text-slate-400 text-sm">가장 큰 변수인 구글 검색엔진 로직 변경에 대비하여 하나의 '대형 블로그' 대신 10여개의 '중소형 전문 블로그'로 위험을 분산합니다.</p>
                            </li>
                            <div className="w-full h-px bg-white/5" />
                            <li>
                                <h4 className="text-slate-200 font-medium mb-1 text-sm">정책 위반(Policy Violation) 방지</h4>
                                <p className="text-slate-400 text-sm">어뷰징 및 무단 복제 콘텐츠를 철저히 배제하고 사용자에게 실제로 필요한 클린 정보만을 생산하여 계정 정지 리스크를 차단합니다.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
