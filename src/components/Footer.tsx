import { Link } from 'react-router-dom'

const footerLinks = {
    services: [
        { label: '어바웃키워드', href: 'https://www.aboutkeyword.com', external: true },
        { label: '블로그 네트워크', to: '/services' },
        { label: '마케팅 대행', to: '/services' },
    ],
    company: [
        { label: '회사 소개', to: '/about' },
        { label: '문의하기', to: '/contact' },
    ],
    legal: [
        { label: '이용약관', to: '/terms' },
        { label: '개인정보처리방침', to: '/privacy' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-5">
                            <img src="/LeadMeta_icon.webp" alt="LeadMeta" className="h-10 w-10 rounded-lg" />
                            <img src="/LeadMeta_logo.webp" alt="LeadMeta" className="h-7" />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            마케팅과 데이터의 융합.<br />
                            디지털 세상에서 비즈니스의 성장을 이끕니다.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">서비스</h4>
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
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">회사</h4>
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
                        <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">법적 고지</h4>
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
                        © {new Date().getFullYear()} LeadMeta. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs">
                        마케팅과 데이터의 융합
                    </p>
                </div>
            </div>
        </footer>
    )
}
