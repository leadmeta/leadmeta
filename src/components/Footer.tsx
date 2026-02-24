import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    const footerLinks = {
        services: [
            { label: '어바웃키워드', href: 'https://www.aboutkeyword.com', external: true },
            { label: t('nav.blog'), to: '/services/blog-network' },
            { label: t('nav.marketing'), to: '/services/marketing-agency' },
        ],
        company: [
            { label: t('nav.about'), to: '/about' },
            { label: t('nav.contact'), to: '/contact' },
        ],
        legal: [
            { label: t('footer.terms'), to: '/terms' },
            { label: t('footer.privacy'), to: '/privacy' },
        ],
    }

    return (
        <footer className="bg-slate-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-5">
                            {/* Removed LeadMeta_icon.webp as per user request */}
                            <img src="/image/LeadMeta_logo.webp" alt="LeadMeta" className="h-7" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">{t('footer.services')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) =>
                                'external' in link && link.external ? (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-brand-400 text-sm transition-colors duration-200 flex items-center gap-1"
                                        >
                                            {link.label}
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </a>
                                    </li>
                                ) : (
                                    <li key={link.label}>
                                        <Link to={link.to!} className="text-slate-400 hover:text-brand-400 text-sm transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">{t('footer.company')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-slate-400 hover:text-brand-400 text-sm transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">{t('footer.legal')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-slate-400 hover:text-brand-400 text-sm transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} LeadMeta. {t('footer.rights')}
                    </p>
                    <p className="text-slate-600 text-xs">
                        {t('footer.slogan')}
                    </p>
                </div>
            </div>
        </footer>
    )
}
