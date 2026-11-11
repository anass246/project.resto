"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();

    const handleMenuClick = (e: React.MouseEvent) => {
        try {
            const token = localStorage.getItem('auth_token');
            const user = localStorage.getItem('user');
            if (!token || !user) {
                e.preventDefault();
                router.push('/login?redirect=/menu&reason=auth_required');
            }
        } catch {
            e.preventDefault();
            router.push('/login?redirect=/menu&reason=auth_required');
        }
    };

    return (
        <>
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative pt-16"
            >
                <div className="absolute inset-0 hero-gradient" />
                <div className="relative z-10 text-center max-w-4xl mx-4 fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Welcome to <span className="text-[#d4af37]">Snack Anass</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                        Experience the finest traditional cuisine with a modern twist in the
                        heart of Casablanca
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/menu"
                            onClick={handleMenuClick}
                            className="btn-primary text-lg py-4 px-8 floating-animation inline-flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-utensils" />
                            <span>Explore Menu</span>
                        </Link>
                        <Link href="/login" className="btn-secondary text-lg py-4 px-8 inline-flex items-center justify-center gap-2">
                            <i className="fas fa-user" />
                            <span>Sign In / Account</span>
                        </Link>
                    </div>
                </div>
                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a href="#features" className="text-white text-2xl animate-bounce">
                        <i className="fas fa-chevron-down" />
                    </a>
                </div>
            </section>
        </>
    );
}
