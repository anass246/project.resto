'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkAuth = () => {
            try {
                const token = localStorage.getItem('auth_token');
                const user = localStorage.getItem('user');
                if (token && user) {
                    setCurrentUser(JSON.parse(user));
                } else {
                    setCurrentUser(null);
                }
            } catch {
                setCurrentUser(null);
            }
        };

        checkAuth();
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const handleLogout = () => {
        try {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
        } catch (e) {
            console.error(e);
        }
        setCurrentUser(null);
        setMobileOpen(false);
        router.push('/login');
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#6b0000]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-900 text-xl font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                        <i className="fas fa-fire-flame-curved"></i>
                    </div>
                    <div>
                        <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                            Snack <span className="text-amber-400">Anass</span>
                        </div>
                        <div className="text-[11px] font-semibold uppercase tracking-widest text-amber-200/80">
                            Restaurant & Grill
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-amber-100">
                    <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                        <i className="fas fa-home text-xs"></i>
                        Home
                    </Link>
                    <Link href="/menu" className="text-amber-400 font-bold flex items-center gap-2">
                        <i className="fas fa-utensils text-xs"></i>
                        Our Menu
                    </Link>
                    <a href="#moroccan" className="hover:text-amber-400 transition-colors">
                        Moroccan
                    </a>
                    <a href="#burgers" className="hover:text-amber-400 transition-colors">
                        Burgers
                    </a>
                    <a href="#pizza" className="hover:text-amber-400 transition-colors">
                        Pizza
                    </a>
                    <a href="#fresh-juices" className="hover:text-amber-400 transition-colors">
                        Juices
                    </a>
                </nav>

                {/* Right Action Buttons */}
                <div className="hidden sm:flex items-center gap-3">
                    {mounted && currentUser ? (
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-black/25 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-200">
                                <i className="fas fa-user-circle text-amber-300 text-sm"></i>
                                <span className="max-w-[120px] truncate">{currentUser.name || 'Member'}</span>
                            </div>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="bg-red-900/80 hover:bg-red-800 text-amber-200 border border-red-700/60 px-3.5 py-1.5 rounded-full text-xs font-bold transition duration-300 shadow flex items-center gap-1.5"
                                title="Sign Out"
                            >
                                <i className="fas fa-sign-out-alt text-xs"></i>
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:text-amber-300 transition flex items-center gap-2"
                        >
                            <i className="far fa-user"></i>
                            <span>Sign In</span>
                        </Link>
                    )}

                    <a
                        href="http://127.0.0.1:8000/admin"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-300/30 transition flex items-center gap-1.5"
                        title="Open Admin Dashboard"
                    >
                        <i className="fas fa-shield-halved"></i>
                        <span>Admin</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition"
                    aria-label="Toggle navigation"
                >
                    <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#5a0000] border-t border-white/10 px-6 py-6 space-y-4 text-white text-base font-semibold">
                    <Link href="/" className="block py-2 hover:text-amber-400" onClick={() => setMobileOpen(false)}>
                        <i className="fas fa-home mr-3 text-amber-400"></i> Home
                    </Link>
                    <Link href="/menu" className="block py-2 text-amber-400 font-bold" onClick={() => setMobileOpen(false)}>
                        <i className="fas fa-utensils mr-3"></i> Full Menu
                    </Link>
                    <a href="#moroccan" className="block py-2 hover:text-amber-400" onClick={() => setMobileOpen(false)}>
                        🇲🇦 Moroccan Heritage
                    </a>
                    <a href="#burgers" className="block py-2 hover:text-amber-400" onClick={() => setMobileOpen(false)}>
                        🍔 Gourmet Burgers
                    </a>
                    <a href="#pizza" className="block py-2 hover:text-amber-400" onClick={() => setMobileOpen(false)}>
                        🍕 Stone-Baked Pizza
                    </a>
                    <a href="#fresh-juices" className="block py-2 hover:text-amber-400" onClick={() => setMobileOpen(false)}>
                        🥤 Fresh Juices
                    </a>
                    <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                        {mounted && currentUser ? (
                            <>
                                <div className="text-center py-2 text-sm text-amber-200">
                                    Signed in as <strong className="text-white">{currentUser.name}</strong>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="w-full text-center py-3 bg-red-900/80 hover:bg-red-800 text-amber-200 font-bold rounded-xl border border-red-700 flex items-center justify-center gap-2"
                                >
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Sign Out</span>
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="w-full text-center py-3 bg-amber-400 text-stone-900 font-bold rounded-xl"
                                onClick={() => setMobileOpen(false)}
                            >
                                Sign In / Account
                            </Link>
                        )}
                        <a
                            href="http://127.0.0.1:8000/admin"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full text-center py-2.5 bg-white/10 text-amber-300 font-semibold rounded-xl border border-white/10 flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-shield-halved"></i>
                            <span>Admin Portal</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
