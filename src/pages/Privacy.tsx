import { useTranslation } from 'react-i18next'

export default function Privacy() {
    const { t } = useTranslation()

    return (
        <>
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50">
                    <img
                        src="/image/abstract_blue_bg_1.webp"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-slate-50/90" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest bg-brand-50 px-4 py-2 rounded-full border border-brand-200 inline-block">{t('privacy.subtitle')}</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-6 mb-4">{t('privacy.title')}</h1>
                    <p className="text-slate-500 text-sm">{t('privacy.last_modified')}</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="space-y-10 text-slate-600 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a1_title')}</h2>
                            <p className="mb-3 text-slate-600">{t('privacy.a1_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li>{t('privacy.a1_f1')}</li>
                                <li>{t('privacy.a1_f2')}</li>
                                <li>{t('privacy.a1_f3')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a2_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
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
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a3_title')}</h2>
                            <p className="mb-3 text-slate-600">{t('privacy.a3_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                <li><strong className="text-slate-900">{t('privacy.a3_collect')}</strong> {t('privacy.a3_collect_val')}</li>
                                <li><strong className="text-slate-900">{t('privacy.a3_auto')}</strong> {t('privacy.a3_auto_val')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a4_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('privacy.a4_1')}</li>
                                <li>{t('privacy.a4_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a5_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('privacy.a5_1')}</li>
                                <li>{t('privacy.a5_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a6_title')}</h2>
                            <p className="text-slate-600">{t('privacy.a6_desc')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 mt-2">
                                <li>{t('privacy.a6_f1')}</li>
                                <li>{t('privacy.a6_f2')}</li>
                                <li>{t('privacy.a6_f3')}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('privacy.a7_title')}</h2>
                            <div className="glass-card p-6 mt-3 border border-slate-200">
                                <p className="text-slate-600">
                                    {t('privacy.a7_desc')}
                                </p>
                                <div className="mt-4 space-y-1 text-slate-500">
                                    <p><strong className="text-slate-900">{t('privacy.a7_officer')}</strong> {t('privacy.a7_officer_val')}</p>
                                    <p><strong className="text-slate-900">{t('privacy.a7_email')}</strong> {t('privacy.a7_email_val')}</p>
                                    <p><strong className="text-slate-900">{t('privacy.a7_contact')}</strong> {t('privacy.a7_contact_val')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
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
