import { useTranslation } from 'react-i18next'

export default function Terms() {
    const { t } = useTranslation()

    return (
        <>
            <section className="pt-32 pb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <span className="text-brand-400 font-medium text-sm uppercase tracking-widest">{t('terms.subtitle')}</span>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-4">{t('terms.title')}</h1>
                    <p className="text-slate-500 text-sm">{t('terms.last_modified')}</p>
                </div>
            </section>

            <div className="section-divider" />

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-invert prose-slate max-w-none">
                    <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a1_title')}</h2>
                            <p>{t('terms.a1_desc')}</p>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a2_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a2_1')}</li>
                                <li>{t('terms.a2_2')}</li>
                                <li>{t('terms.a2_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a3_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a3_1')}</li>
                                <li>{t('terms.a3_2')}</li>
                                <li>{t('terms.a3_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a4_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
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
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a5_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a5_1')}</li>
                                <li>{t('terms.a5_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a6_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a6_1')}</li>
                                <li>{t('terms.a6_2')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a7_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a7_1')}</li>
                                <li>{t('terms.a7_2')}</li>
                                <li>{t('terms.a7_3')}</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-white text-xl font-bold mb-4">{t('terms.a8_title')}</h2>
                            <ol className="list-decimal list-inside space-y-2 text-slate-400">
                                <li>{t('terms.a8_1')}</li>
                                <li>{t('terms.a8_2')}</li>
                            </ol>
                        </div>

                        <div className="pt-4 border-t border-white/5">
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
