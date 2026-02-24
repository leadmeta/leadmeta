import { useTranslation } from 'react-i18next'

export default function Privacy() {
    const { t } = useTranslation()

    return (
        <>
            <section className="pt-32 pb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">{t('privacy.subtitle')}</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-4">{t('privacy.title')}</h1>
                    <p className="text-slate-500 text-sm">{t('privacy.last_modified')}</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a1_title')}</h2>
                            <p className="mb-3 text-slate-400">{t('privacy.a1_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li>{t('privacy.a1_f1')}</li>
                                <li>{t('privacy.a1_f2')}</li>
                                <li>{t('privacy.a1_f3')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a2_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('privacy.a2_1')}</li>
                                <li>{t('privacy.a2_2')}
                                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                        <li>{t('privacy.a2_2a')}</li>
                                        <li>{t('privacy.a2_2b')}</li>
                                        <li>{t('privacy.a2_2c')}</li>
                                        <li>{t('privacy.a2_2d')}</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a3_title')}</h2>
                            <p className="mb-3 text-slate-400">{t('privacy.a3_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li><strong className="text-slate-200">{t('privacy.a3_collect')}</strong> {t('privacy.a3_collect_val')}</li>
                                <li><strong className="text-slate-200">{t('privacy.a3_auto')}</strong> {t('privacy.a3_auto_val')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a4_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('privacy.a4_1')}</li>
                                <li>{t('privacy.a4_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a5_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('privacy.a5_1')}</li>
                                <li>{t('privacy.a5_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a6_title')}</h2>
                            <p className="text-slate-400">{t('privacy.a6_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 mt-2">
                                <li>{t('privacy.a6_f1')}</li>
                                <li>{t('privacy.a6_f2')}</li>
                                <li>{t('privacy.a6_f3')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('privacy.a7_title')}</h2>
                            <div className="glass-card p-6 mt-3">
                                <p className="text-slate-300">
                                    {t('privacy.a7_desc')}
                                </p>
                                <div className="mt-4 space-y-1 text-slate-400">
                                    <p><strong className="text-white">{t('privacy.a7_officer')}</strong> {t('privacy.a7_officer_val')}</p>
                                    <p><strong className="text-white">{t('privacy.a7_email')}</strong> {t('privacy.a7_email_val')}</p>
                                    <p><strong className="text-white">{t('privacy.a7_contact')}</strong> {t('privacy.a7_contact_val')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-slate-500">
                                {t('privacy.effective_date')}<br />
                                {t('privacy.enforce_date')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
