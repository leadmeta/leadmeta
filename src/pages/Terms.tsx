import { useTranslation } from 'react-i18next'

export default function Terms() {
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
                    <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest bg-brand-50 px-4 py-2 rounded-full border border-brand-200 inline-block">{t('terms.subtitle')}</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mt-6 mb-4">{t('terms.title')}</h1>
                    <p className="text-slate-500 text-sm">{t('terms.last_modified')}</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-slate max-w-none">
                    <div className="space-y-10 text-slate-600 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a1_title')}</h2>
                            <p>{t('terms.a1_desc')}</p>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a2_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a2_1')}</li>
                                <li>{t('terms.a2_2')}</li>
                                <li>{t('terms.a2_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a3_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a3_1')}</li>
                                <li>{t('terms.a3_2')}</li>
                                <li>{t('terms.a3_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a4_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a4_1')}
                                    <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                                        <li>{t('terms.a4_1a')}</li>
                                        <li>{t('terms.a4_1b')}</li>
                                        <li>{t('terms.a4_1c')}</li>
                                    </ul>
                                </li>
                                <li>{t('terms.a4_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a5_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a5_1')}</li>
                                <li>{t('terms.a5_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a6_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a6_1')}</li>
                                <li>{t('terms.a6_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a7_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a7_1')}</li>
                                <li>{t('terms.a7_2')}</li>
                                <li>{t('terms.a7_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-slate-900 text-xl font-bold mb-4">{t('terms.a8_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600">
                                <li>{t('terms.a8_1')}</li>
                                <li>{t('terms.a8_2')}</li>
                            </ol>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <p className="text-slate-500">
                                {t('terms.effective_date')}<br />
                                {t('terms.enforce_date')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
