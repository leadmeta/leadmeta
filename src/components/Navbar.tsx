import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
    const langMenuRef = useRef<HTMLDivElement>(null)
    const location = useLocation()

    const navLinks = [
        { to: '/', label: t('nav.home') },
        { to: '/about', label: t('nav.about') },
        { to: '/services', label: t('nav.services') },
        { to: '/services/marketing-agency', label: t('nav.marketing') },
        { to: '/services/blog-network', label: t('nav.blog') },
        { to: '/contact', label: t('nav.contact') },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setIsLangMenuOpen(false)
    }, [location])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        setIsLangMenuOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/60'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - Updated to only use LeadMeta_logo.webp as per user request */}
                    <Link to="/" className="flex items-center h-full group">
                        <img
                            src="/image/LeadMeta_logo.webp"
                            alt="LeadMeta"
                            className="h-10 transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.to
                                    ? 'text-brand-600 bg-brand-50'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Language + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        {/* Language Switcher Dropdown */}
                        <div className="relative hidden sm:block" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center"
                                aria-label="언어 선택"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${isLangMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                    }`}
                            >
                                <button
                                    onClick={() => changeLanguage('ko')}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${i18n.language === 'ko' ? 'bg-brand-50 text-brand-600 font-medium' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    한국어
                                </button>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors border-t border-slate-100 ${i18n.language.startsWith('en') ? 'bg-brand-50 text-brand-600 font-medium' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                        }`}
                                >
                                    English
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            aria-label="메뉴 열기"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 pt-2 bg-white/95 backdrop-blur-xl border-t border-slate-200 space-y-1 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to
                                ? 'text-brand-600 bg-brand-50'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between pt-4 gap-3">
                        <div className="flex px-1 gap-2 flex-col sm:flex-row w-full sm:w-auto mt-2 sm:mt-0">
                            <button
                                onClick={() => changeLanguage('ko')}
                                className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-colors ${i18n.language === 'ko' ? 'border-brand-300 bg-brand-50 text-brand-600' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                한국어
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`flex-1 py-3 rounded-xl border text-sm font-semibold transition-colors ${i18n.language.startsWith('en') ? 'border-brand-300 bg-brand-50 text-brand-600' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                English
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
