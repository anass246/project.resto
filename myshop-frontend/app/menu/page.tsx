'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/menu/Header';
import Footer from '../components/menu/Footer';
import Filters from '../components/menu/Filters';
import Shop from '../components/menu/Shop';
import MenuList from '../components/menu/Menu';
import Hero from '../components/menu/Hero';

export default function MenuPage() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState<any[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // 🔒 Protect Route: Check Authentication
    useEffect(() => {
        try {
            const token = localStorage.getItem('auth_token');
            const user = localStorage.getItem('user');

            if (!token || !user) {
                setIsAuthorized(false);
                router.replace('/login?redirect=/menu&reason=auth_required');
            } else {
                setIsAuthorized(true);
            }
        } catch (e) {
            setIsAuthorized(false);
            router.replace('/login?redirect=/menu&reason=auth_required');
        }
    }, [router]);

    // Load Cart from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem('cart');
            if (stored) setCart(JSON.parse(stored));
        } catch (e) {
            console.error('Error loading cart', e);
        }
    }, []);

    // Save Cart to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Error saving cart', e);
        }
    }, [cart]);

    // Add Item to cart
    const addToCart = (product: any) => {
        setCart(prev => {
            const exists = prev.find((item) => item.name === product.name);
            if (exists) {
                return prev.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (id: any) => {
        setCart(prev => prev.map(item => (item.id === id || item.name === id) ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id: any) => {
        setCart(prev => {
            const item = prev.find(i => i.id === id || i.name === id);
            if (item && item.quantity > 1) {
                return prev.map(i => (i.id === id || i.name === id) ? { ...i, quantity: i.quantity - 1 } : i);
            }
            return prev.filter(i => i.id !== id && i.name !== id);
        });
    };

    const removeFromCart = (id: any) => {
        setCart(prev => prev.filter(item => item.id !== id && item.name !== id));
    };

    const clearCart = () => {
        setCart([]);
        try {
            localStorage.removeItem('cart');
        } catch (e) {}
    };

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    // If not authenticated, display protection screen
    if (isAuthorized !== true) {
        return (
            <div className="min-h-screen bg-[#fffdfa] flex flex-col items-center justify-center p-6 text-center font-sans">
                <div className="w-16 h-16 rounded-2xl bg-[#800000] text-amber-300 flex items-center justify-center text-2xl shadow-xl animate-pulse mb-5">
                    <i className="fas fa-lock"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-2">
                    Sign In Required
                </h2>
                <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
                    You must be registered and signed in to access our menu and order online.
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[#800000] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-bold text-[#800000] uppercase tracking-wider">Redirecting to login...</span>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-[#fffdfa] min-h-screen relative font-sans text-stone-900 selection:bg-amber-100 selection:text-[#800000]">
            {/* Header */}
            <Header />

            {/* Hero with Search Bar */}
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Category Filter Pills */}
            <Filters
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* Shopping Cart Drawer */}
            <Shop
                cart={cart}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                increase={increaseQuantity}
                decrease={decreaseQuantity}
                remove={removeFromCart}
                clearCart={clearCart}
            />

            {/* Menu Dishes Grid */}
            <MenuList
                activeCategory={activeCategory}
                addToCart={addToCart}
                searchQuery={searchQuery}
            />

            {/* Footer */}
            <Footer />

            {/* Modern Floating Cart Pill Button */}
            <button
                onClick={() => setIsCartOpen(true)}
                className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform select-none ${
                    totalCount > 0
                        ? 'bg-gradient-to-r from-[#800000] via-[#940000] to-[#b30000] text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 border-2 border-amber-300/40 flex items-center gap-3.5'
                        : 'bg-[#800000] text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 flex items-center justify-center border border-white/20'
                }`}
                aria-label="Shopping Cart"
            >
                <div className="relative flex items-center justify-center">
                    <i className="fas fa-shopping-bag text-xl"></i>
                    {totalCount > 0 && (
                        <span className="absolute -top-2.5 -right-3 bg-amber-400 text-stone-950 font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                            {totalCount}
                        </span>
                    )}
                </div>

                {totalCount > 0 && (
                    <div className="hidden sm:flex items-center gap-3 pl-1 font-bold text-sm">
                        <span>{totalCount} {totalCount === 1 ? 'item' : 'items'}</span>
                        <span className="w-1 h-1 rounded-full bg-amber-300"></span>
                        <span className="text-amber-300">${totalPrice.toFixed(2)}</span>
                        <i className="fas fa-arrow-right text-xs ml-1"></i>
                    </div>
                )}
            </button>
        </main>
    );
}
