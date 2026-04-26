"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ زدنا هادي للتحويل
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginPage() {
    const router = useRouter(); // ✅ تفعيل Router
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<any>({});

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

    // 👇👇 هنا فين درنا التعديل باش نربطوه مع Laravel Login 👇👇
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

        try {
            // الاتصال بالباكاند الحقيقي
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
                // ✅ نجح الدخول
                setMessage('🎉 Login successful! Welcome back!');

                // تخزين التوكن والمعلومات الحقيقية
                if (data.token) localStorage.setItem('auth_token', data.token);
                if (data.user) localStorage.setItem('user', JSON.stringify(data.user));

                // التوجيه للصفحة الرئيسية (أو /menu إلا بغيتي)
                setTimeout(() => {
                    router.push('/menu');
                }, 1000);

            } else {
                // ❌ فشل الدخول (المودباس غلط أو الإيميل مكاينش)
                setMessage('❌ ' + (data.message || 'Invalid credentials'));
            }
        } catch (error) {
            console.error(error);
            setMessage('❌ Connection error. Is Backend running?');
        } finally {
            setLoading(false);
        }
    };

    // Demo login (خليناها للتجربة إلا بغيتي)
    const handleDemoLogin = () => {
        setFormData({
            email: 'demo@restaurant.com',
            password: 'password123'
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex flex-col">
            <Header />

            <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-lg">
                    {/* Decorative background elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-200 to-rose-300 rounded-full opacity-20 blur-xl"></div>

                    <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-orange-100">
                        {/* Logo Section */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <i className="fas fa-utensils text-4xl text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                    <i className="fas fa-arrow-right text-white text-xs" />
                                </div>
                            </div>
                        </div>

                        {/* Header */}
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
                                Welcome Back
                            </h1>
                            <p className="text-gray-500 mt-3 font-medium">
                                Sign in to continue your food journey
                            </p>
                        </div>

                        {/* Demo Button */}
                        <button
                            onClick={handleDemoLogin}
                            className="w-full mb-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 border border-gray-200 hover:shadow-md"
                        >
                            Try Demo Account
                        </button>

                        {/* Divider */}
                        <div className="flex items-center mb-6">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-sm">Or sign in with email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                                    <i className="fas fa-envelope inline w-4 h-4 mr-2" />
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        className={`w-full px-5 py-4 pl-12 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border-2 ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all duration-300`}
                                        placeholder="you@example.com"
                                        onChange={handleChange}
                                    />
                                    <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center" />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-2 ml-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div>
                                <div className="flex justify-between items-center mb-2 ml-1">
                                    <label className="text-sm font-semibold text-gray-700">
                                        <i className="fas fa-lock inline w-4 h-4 mr-2" />
                                        Password
                                    </label>
                                    <Link href="/forgot-password" className="text-sm font-medium bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent hover:opacity-80 transition">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        required
                                        value={formData.password}
                                        className={`w-full px-5 py-4 pl-12 pr-12 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border-2 ${errors.password ? 'border-red-400' : 'border-gray-200'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all duration-300`}
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                    />
                                    <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <i className="fas fa-eye-slash w-5 h-5" /> : <i className="fas fa-eye w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-2 ml-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                                    />
                                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            {/* Error/Success Message */}
                            {message && (
                                <div className={`p-4 rounded-xl text-center font-semibold animate-pulse ${message.includes('🎉') ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200' : 'bg-gradient-to-r from-red-100 to-rose-100 text-rose-700 border border-rose-200'}`}>
                                    {message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-amber-500 via-red-500 to-rose-500 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing in...
                                        </>
                                    ) : (
                                        <>
                                            Continue to Menu
                                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-red-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </form>

                        {/* Social Login */}
                        <div className="mt-8">
                            <div className="flex items-center mb-4">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition hover:shadow-sm">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Google
                                </button>
                                <button className="flex items-center justify-center p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition hover:shadow-sm">
                                    <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Facebook
                                </button>
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center mt-8 text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/signup" className="font-bold bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent hover:from-amber-600 hover:to-red-600 transition-all duration-300">
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}