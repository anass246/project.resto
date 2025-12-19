'use client';

import { useState, useEffect } from 'react';
import Header from '../components/menu/Header';
import Footer from '../components/menu/Footer';
import Filters from '../components/menu/Filters';
import Shop from '../components/menu/Shop';
import MenuList from '../components/menu/Menu'; // تأكد سميتو Menu ولا MenuList
import Hero from '../components/menu/Hero';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [cart, setCart] = useState<any[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load Cart
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) setCart(JSON.parse(stored));
    }, []);

    // Save Cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add Item
    const addToCart = (product: any) => {
        setCart(prev => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const increaseQuantity = (id: any) => {
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id: any) => {
        setCart(prev => {
            const item = prev.find(i => i.id === id);
            if (item && item.quantity > 1) {
                return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
            }
            return prev.filter(i => i.id !== id);
        });
    };

    const removeFromCart = (id: any) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <main className="bg-[#fffaf0] min-h-screen relative">
            <Header />
            <Hero />

            <div className="container mx-auto px-5 py-20">
                <div className="mb-10 flex justify-center">
                    <Filters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </div>

                <div className="w-full">
                    {/* هادشي اللي كان خاصك: ربطنا Shop مع المتغيرات */}
                    <Shop
                        cart={cart}
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                        increase={increaseQuantity}
                        decrease={decreaseQuantity}
                        remove={removeFromCart}
                    />

                    <MenuList activeCategory={activeCategory} addToCart={addToCart} />
                </div>
            </div>

            <Footer />

            {/* زر السلة العائم */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-8 right-8 z-50 bg-red-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition duration-300"
            >
                <i className="fas fa-shopping-cart text-xl"></i>
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white font-bold">
                        {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                )}
            </button>
        </main>
    );
}