import { useTranslation } from 'react-i18next'

export default function MarketingAgency() {
    const { t } = useTranslation()

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
                    <span className="text-purple-400 font-medium text-sm uppercase tracking-widest bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">{t('marketing.badge')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">
                        {t('marketing.title')}
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('marketing.desc')}
                    </p>
                </div>

                {/* About & Market Info */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card p-8 lg:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-6">{t('marketing.about_title')}</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {t('marketing.about_desc1')}
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            {t('marketing.about_desc2')}
                        </p>
                    </div>

                    <div className="glass-card p-8 lg:p-10 bg-slate-900/50">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {t('marketing.trend_title')}
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">{t('marketing.trend1_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.trend1_desc')}</p>
                            </div>
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">{t('marketing.trend2_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.trend2_desc')}</p>
                            </div>
                            <div className="border-l-2 border-purple-500/50 pl-4">
                                <h4 className="text-slate-200 font-medium mb-1">{t('marketing.trend3_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.trend3_desc')}</p>
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
                        <h3 className="text-xl font-bold text-white mb-4">{t('marketing.revenue_title')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">{t('marketing.rev1_title')}</strong>
                                    <span className="text-slate-400 text-sm">{t('marketing.rev1_desc')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">{t('marketing.rev2_title')}</strong>
                                    <span className="text-slate-400 text-sm">{t('marketing.rev2_desc')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-500 mt-0.5">✦</span>
                                <div>
                                    <strong className="text-slate-200 block text-sm">{t('marketing.rev3_title')}</strong>
                                    <span className="text-slate-400 text-sm">{t('marketing.rev3_desc')}</span>
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
                        <h3 className="text-xl font-bold text-white mb-4">{t('marketing.strength_title')}</h3>
                        <div className="space-y-5">
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">{t('marketing.str1_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.str1_desc')}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">{t('marketing.str2_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.str2_desc')}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <h4 className="text-brand-300 font-medium mb-1 text-sm">{t('marketing.str3_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('marketing.str3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
