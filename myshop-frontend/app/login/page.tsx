"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<any>({});
    const [authRequiredNotice, setAuthRequiredNotice] = useState<string | null>(null);
    const [redirectUrl, setRedirectUrl] = useState<string>('/menu');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const redirect = params.get('redirect');
            const reason = params.get('reason');

            if (redirect) {
                setRedirectUrl(redirect);
            }
            if (reason === 'auth_required' || redirect === '/menu') {
                setAuthRequiredNotice('Please sign in or create an account to view our menu and order online.');
            }
        }
    }, []);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        // Check if Admin email entered on customer portal
        if (formData.email.toLowerCase().includes('admin')) {
            setMessage('🛡️ Administrator detected. Redirecting to secure Admin Portal...');
            setTimeout(() => {
                window.location.href = 'http://127.0.0.1:8000/admin/login';
            }, 800);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('🎉 Login successful! Welcome back!');

                if (data.token) localStorage.setItem('auth_token', data.token);
                if (data.user) localStorage.setItem('user', JSON.stringify(data.user));

                setTimeout(() => {
                    router.push(redirectUrl || '/menu');
                }, 1000);
            } else {
                setMessage('❌ ' + (data.message || 'Invalid credentials'));
            }
        } catch (error) {
            console.error(error);
            setMessage('❌ Connection error. Is Backend running?');
        } finally {
            setLoading(false);
        }
    };

    const handleDemoLogin = () => {
        setFormData({
            email: 'customer@snackanass.com',
            password: 'password123'
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex flex-col font-sans">
            <Header />

            <div className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-lg">
                    {/* Decorative glow elements */}
                    <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-300 to-rose-400 rounded-full opacity-20 blur-xl"></div>

                    <div className="relative bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-orange-100">
                        
                        {/* Tab Switcher: Customer vs Admin Link */}
                        <div className="flex p-1.5 bg-gray-100 rounded-2xl mb-8 border border-gray-200/80">
                            <div className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-white text-stone-900 shadow-md flex items-center justify-center gap-2">
                                <i className="fas fa-user text-xs"></i>
                                <span>Customer Sign In</span>
                            </div>

                            <a
                                href="http://127.0.0.1:8000/admin/login"
                                className="flex-1 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 text-gray-500 hover:text-[#800000] hover:bg-white/60"
                            >
                                <i className="fas fa-shield-halved text-xs"></i>
                                <span>Admin Portal →</span>
                            </a>
                        </div>

                        {/* Logo & Header */}
                        <div className="flex justify-center mb-5">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#800000] to-[#b30000] rounded-2xl flex items-center justify-center shadow-lg text-amber-300 text-2xl">
                                <i className="fas fa-utensils"></i>
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-extrabold text-stone-900">
                                Welcome Back
                            </h1>
                            <p className="text-gray-500 text-sm mt-2">
                                Sign in to place food orders and manage your table reservations
                            </p>
                        </div>

                        {/* Auth Required Notice Banner */}
                        {authRequiredNotice && loginRole === 'customer' && (
                            <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-400 text-stone-900 flex items-start gap-3 shadow-sm">
                                <div className="w-8 h-8 rounded-xl bg-[#800000] text-amber-300 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-bold uppercase tracking-wider text-[#800000]">
                                        Authentication Required
                                    </div>
                                    <p className="text-xs text-stone-700 mt-0.5 leading-relaxed font-medium">
                                        {authRequiredNotice}
                                    </p>
                                    <div className="mt-2 text-[11px] text-stone-600">
                                        First time here?{' '}
                                        <Link href={`/signup${redirectUrl ? `?redirect=${encodeURIComponent(redirectUrl)}` : ''}`} className="font-bold text-[#800000] hover:underline">
                                            Create a free account →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Demo Customer Account */}
                        <div className="flex gap-2 mb-6">
                            <button
                                type="button"
                                onClick={handleDemoLogin}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-3 rounded-xl transition text-xs border border-gray-200 flex items-center justify-center gap-1.5"
                            >
                                <i className="fas fa-wand-magic-sparkles text-amber-600"></i>
                                <span>Fill Demo Customer</span>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email Input */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 ml-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-gray-50 border-2 ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-[#800000] focus:bg-white outline-none transition text-sm text-stone-900`}
                                        placeholder="you@example.com"
                                        onChange={handleChange}
                                    />
                                    <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div>
                                <div className="flex justify-between items-center mb-1.5 ml-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                                        Password
                                    </label>
                                    <Link href="/forgot-password" className="text-xs font-semibold text-[#800000] hover:underline">
                                        Forgot?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        value={formData.password}
                                        className={`w-full px-4 py-3.5 pl-11 pr-11 rounded-xl bg-gray-50 border-2 ${errors.password ? 'border-red-400' : 'border-gray-200'} focus:border-[#800000] focus:bg-white outline-none transition text-sm text-stone-900`}
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                    />
                                    <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                                    >
                                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Feedback Message */}
                            {message && (
                                <div className={`p-3.5 rounded-xl text-center text-xs font-bold ${
                                    message.includes('🎉') || message.includes('🛡️')
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                }`}>
                                    {message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-red-500 to-rose-600 hover:scale-[1.01]"
                            >
                                {loading ? (
                                    <span>Processing...</span>
                                ) : (
                                    <>
                                        <span>Sign In & Continue</span>
                                        <i className="fas fa-arrow-right"></i>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Bottom Admin Gateway */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-3.5 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#800000] text-amber-300 flex items-center justify-center text-xs font-bold shadow-sm">
                                        <i className="fas fa-shield-halved"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-stone-900">Are you Restaurant Staff?</div>
                                        <div className="text-[11px] text-stone-500">Access orders & reservations</div>
                                    </div>
                                </div>
                                <a
                                    href="http://127.0.0.1:8000/admin/login"
                                    className="text-xs font-bold text-[#800000] hover:underline"
                                >
                                    Admin Area →
                                </a>
                            </div>

                            <p className="text-center mt-5 text-gray-500 text-xs">
                                Don't have a customer account?{' '}
                                <Link href="/signup" className="font-bold text-[#800000] hover:underline">
                                    Create one here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
