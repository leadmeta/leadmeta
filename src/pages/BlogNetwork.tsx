import { useTranslation } from 'react-i18next'

export default function BlogNetwork() {
    const { t } = useTranslation()

    return (
        <div className="pt-32 pb-24 relative overflow-hidden bg-slate-50">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/image/abstract_blue_bg_2.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                <div className="absolute top-1/4 -right-40 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-brand-600 font-medium text-sm uppercase tracking-widest bg-brand-50 px-4 py-2 rounded-full border border-brand-200">{t('blognet.badge')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mt-8 mb-6">
                        {t('blognet.title')}
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {t('blognet.desc')}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Revenue Model */}
                    <div className="glass-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300 border border-slate-200">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-50 flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
                            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('blognet.revenue_title')}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t('blognet.revenue_desc')}
                        </p>
                        <ul className="space-y-3">
                            {[t('blognet.rev_f1'), t('blognet.rev_f2'), t('blognet.rev_f3')].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Data & Algorithm */}
                    <div className="glass-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300 border border-slate-200">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-50 flex items-center justify-center mb-6 shadow-sm border border-blue-200">
                            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('blognet.data_title')}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {t('blognet.data_desc')}
                        </p>
                        <ul className="space-y-3">
                            {[t('blognet.data_f1'), t('blognet.data_f2'), t('blognet.data_f3')].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Benefits */}
                    <div className="glass-card p-8 lg:col-span-2 border border-slate-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2.5 overflow-hidden">
                                <img src="/image/rocket_icon.webp" alt="Benefits" className="w-full h-full object-contain drop-shadow" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('blognet.benefits_title')}</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-brand-600 font-medium mb-2">{t('blognet.ben1_title')}</h4>
                                <p className="text-slate-600 sm:text-sm">{t('blognet.ben1_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-600 font-medium mb-2">{t('blognet.ben2_title')}</h4>
                                <p className="text-slate-600 sm:text-sm">{t('blognet.ben2_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-600 font-medium mb-2">{t('blognet.ben3_title')}</h4>
                                <p className="text-slate-600 sm:text-sm">{t('blognet.ben3_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-600 font-medium mb-2">{t('blognet.ben4_title')}</h4>
                                <p className="text-slate-600 sm:text-sm">{t('blognet.ben4_desc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Risks */}
                    <div className="glass-card p-8 bg-gradient-to-br from-red-50 to-transparent border border-red-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t('blognet.risks_title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="text-slate-800 font-medium mb-1 text-sm">{t('blognet.risk1_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('blognet.risk1_desc')}</p>
                            </li>
                            <div className="w-full h-px bg-slate-200" />
                            <li>
                                <h4 className="text-slate-800 font-medium mb-1 text-sm">{t('blognet.risk2_title')}</h4>
                                <p className="text-slate-600 text-sm">{t('blognet.risk2_desc')}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
