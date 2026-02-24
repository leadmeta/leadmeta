import { useTranslation } from 'react-i18next'

export default function BlogNetwork() {
    const { t } = useTranslation()

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
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20">{t('blognet.badge')}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-8 mb-6">
                        {t('blognet.title')}
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('blognet.desc')}
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
                        <h3 className="text-2xl font-bold text-white mb-4">{t('blognet.revenue_title')}</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {t('blognet.revenue_desc')}
                        </p>
                        <ul className="space-y-3">
                            {[t('blognet.rev_f1'), t('blognet.rev_f2'), t('blognet.rev_f3')].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Data & Algorithm */}
                    <div className="glass-card p-8 lg:p-10 group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{t('blognet.data_title')}</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {t('blognet.data_desc')}
                        </p>
                        <ul className="space-y-3">
                            {[t('blognet.data_f1'), t('blognet.data_f2'), t('blognet.data_f3')].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
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
                            <h3 className="text-xl font-bold text-white">{t('blognet.benefits_title')}</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">{t('blognet.ben1_title')}</h4>
                                <p className="text-slate-400 sm:text-sm">{t('blognet.ben1_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">{t('blognet.ben2_title')}</h4>
                                <p className="text-slate-400 sm:text-sm">{t('blognet.ben2_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">{t('blognet.ben3_title')}</h4>
                                <p className="text-slate-400 sm:text-sm">{t('blognet.ben3_desc')}</p>
                            </div>
                            <div>
                                <h4 className="text-brand-300 font-medium mb-2">{t('blognet.ben4_title')}</h4>
                                <p className="text-slate-400 sm:text-sm">{t('blognet.ben4_desc')}</p>
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
                            <h3 className="text-xl font-bold text-white">{t('blognet.risks_title')}</h3>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="text-slate-200 font-medium mb-1 text-sm">{t('blognet.risk1_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('blognet.risk1_desc')}</p>
                            </li>
                            <div className="w-full h-px bg-white/5" />
                            <li>
                                <h4 className="text-slate-200 font-medium mb-1 text-sm">{t('blognet.risk2_title')}</h4>
                                <p className="text-slate-400 text-sm">{t('blognet.risk2_desc')}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
