import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { to: '/', label: '홈' },
    { to: '/about', label: '회사 소개' },
    { to: '/services', label: '서비스' },
    { to: '/contact', label: '문의하기' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/LeadMeta_icon.webp"
                            alt="LeadMeta"
                            className="h-10 w-10 rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                        <img
                            src="/LeadMeta_logo.webp"
                            alt="LeadMeta"
                            className="h-8 hidden sm:block transition-opacity duration-300 group-hover:opacity-80"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.to
                                        ? 'text-brand-400 bg-brand-400/10'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
                        >
                            상담 시작하기
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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
                className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 pt-2 bg-slate-950/95 backdrop-blur-xl border-t border-white/5 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to
                                    ? 'text-brand-400 bg-brand-400/10'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="block mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 text-white text-sm font-semibold text-center"
                    >
                        상담 시작하기
                    </Link>
                </div>
            </div>
        </nav>
    )
}
