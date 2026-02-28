import { useTranslation } from 'react-i18next'

export default function MarketingAgency() {
    const { t } = useTranslation()

    return (
        <div className="pt-32 pb-24 relative overflow-hidden bg-slate-50">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/image/abstract_blue_bg_1.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                <div className="absolute top-1/3 -right-60 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-purple-600 font-medium text-sm uppercase tracking-widest bg-purple-50 px-4 py-2 rounded-full border border-purple-200">{t('marketing.badge')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-8 mb-6">
                        {t('marketing.title')}
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {t('marketing.desc')}
                    </p>
                </div>

                {/* About & Market Info */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-8 lg:p-10 flex flex-col justify-center border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('marketing.about_title')}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t('marketing.about_desc1')}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            {t('marketing.about_desc2')}
                        </p>
                    </div>

                    <div className="glass-card p-8 lg:p-10 bg-white/60 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {t('marketing.trend_title')}
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-200 pl-4">
                                <h4 className="text-slate-800 font-medium mb-1">{t('marketing.trend1_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.trend1_desc')}</p>
                            </div>
                            <div className="border-l-2 border-purple-200 pl-4">
                                <h4 className="text-slate-800 font-medium mb-1">{t('marketing.trend2_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.trend2_desc')}</p>
                            </div>
                            <div className="border-l-2 border-purple-200 pl-4">
                                <h4 className="text-slate-800 font-medium mb-1">{t('marketing.trend3_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.trend3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Revenue & Strengths Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Revenue Model */}
                    <div className="glass-card p-8 group border border-slate-200">
                        <div className="w-14 h-14 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{t('marketing.revenue_title')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <img src="/image/star_icon.webp" alt="Point" className="w-5 h-5 mt-0.5 object-contain" />
                                <div>
                                    <strong className="text-slate-800 block text-sm">{t('marketing.rev1_title')}</strong>
                                    <span className="text-slate-600 text-sm">{t('marketing.rev1_desc')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <img src="/image/star_icon.webp" alt="Point" className="w-5 h-5 mt-0.5 object-contain" />
                                <div>
                                    <strong className="text-slate-800 block text-sm">{t('marketing.rev2_title')}</strong>
                                    <span className="text-slate-600 text-sm">{t('marketing.rev2_desc')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <img src="/image/star_icon.webp" alt="Point" className="w-5 h-5 mt-0.5 object-contain" />
                                <div>
                                    <strong className="text-slate-800 block text-sm">{t('marketing.rev3_title')}</strong>
                                    <span className="text-slate-600 text-sm">{t('marketing.rev3_desc')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Core Strengths */}
                    <div className="glass-card p-8 group border border-slate-200">
                        <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{t('marketing.strength_title')}</h3>
                        <div className="space-y-5">
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <h4 className="text-brand-600 font-medium mb-1 text-sm">{t('marketing.str1_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.str1_desc')}</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <h4 className="text-brand-600 font-medium mb-1 text-sm">{t('marketing.str2_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.str2_desc')}</p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                <h4 className="text-brand-600 font-medium mb-1 text-sm">{t('marketing.str3_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('marketing.str3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
