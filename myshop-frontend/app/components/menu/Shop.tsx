'use client';

import { useEffect, useState } from 'react'; // Zidna useState
// NEW: Import dyal PayPal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface CartItem {
    id: number | string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface ShopProps {
    cart: CartItem[];
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    increase: (id: number | string) => void;
    decrease: (id: number | string) => void;
    remove: (id: number | string) => void;
    clearCart?: () => void; // Zidna hadi bach nkhwiw panier mn b3d payment (optionnelle)
}

export default function Shop({ cart, isCartOpen, setIsCartOpen, increase, decrease, remove, clearCart }: ShopProps) {
    // NEW: State bach n3rfo wach user wrrak 3la Checkout wla la
    const [showPayPal, setShowPayPal] = useState(false);

    // Calculate total safely
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 15.00;
    const total = subtotal + delivery;

    // Control body overflow
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setShowPayPal(false); // Reset paypal state ila tsad cart
        }
        return () => { document.body.style.overflow = ''; };
    }, [isCartOpen]);

    // If cart is closed, do not render
    if (!isCartOpen) return null;

    return (
        <section className="relative z-[60]">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Box */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white transform transition-transform duration-300 shadow-2xl flex flex-col z-[70]">

                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-[#800000] to-[#a00000] text-white flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <i className="fas fa-shopping-cart text-xl" />
                        <h2 className="text-xl font-bold">Shopping Cart</h2>
                        {cart.length > 0 && (
                            <span className="bg-white text-[#800000] text-sm px-2 py-1 rounded-full font-bold">
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    >
                        <i className="fas fa-times text-xl" />
                    </button>
                </div>

                {/* Cart Contents */}
                <div className="flex-1 overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 py-12">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-shopping-cart text-5xl opacity-20" />
                            </div>
                            <p className="text-lg mb-2">Your cart is empty</p>
                            <p className="text-sm text-gray-500 text-center max-w-xs">
                                Add some items from our delicious menu
                            </p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-6 px-6 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#a00000] transition-colors"
                            >
                                Browse Menu
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg"
                                            onError={(e) => {
                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80';
                                            }}
                                        />
                                        {item.quantity > 1 && (
                                            <span className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-white font-bold">
                                                {item.quantity}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-[#800000]">{item.name}</h3>
                                                <p className="text-gray-600 text-sm mt-1">Price: {item.price.toFixed(2)} DH</p>
                                            </div>
                                            <button
                                                onClick={() => remove(item.id)}
                                                className="text-gray-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                                            >
                                                <i className="fas fa-trash text-sm"></i>
                                            </button>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-gray-800 font-bold mb-2">
                                                Total: <span className="text-[#800000]">{(item.price * item.quantity).toFixed(2)} DH</span>
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-600 text-sm">Qty:</span>
                                                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                                                    <button
                                                        onClick={() => decrease(item.id)}
                                                        className="px-3 py-1 hover:bg-gray-100 text-lg font-bold text-[#800000] transition-colors"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="px-4 py-1 text-sm font-bold border-x border-gray-300">{item.quantity}</span>
                                                    <button
                                                        onClick={() => increase(item.id)}
                                                        className="px-3 py-1 hover:bg-gray-100 text-lg font-bold text-[#800000] transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with Summary & PayPal */}
                {cart.length > 0 && (
                    <div className="p-6 bg-gradient-to-t from-gray-50 to-white border-t space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal:</span>
                                <span className="font-bold">{subtotal.toFixed(2)} DH</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Delivery Fee:</span>
                                <span className="font-bold">{delivery.toFixed(2)} DH</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t pt-3 mt-2 text-[#800000]">
                                <span>Total Amount:</span>
                                <span>{total.toFixed(2)} DH</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {/* NEW: Logic dyal PayPal */}
                            {!showPayPal ? (
                                // 1. Hada Howa Bouton Checkout L3adi
                                <button
                                    onClick={() => setShowPayPal(true)}
                                    className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] text-white py-3 rounded-lg hover:from-[#a00000] hover:to-[#800000] font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <i className="fas fa-check-circle mr-2"></i>
                                    Checkout
                                </button>
                            ) : (
                                // 2. Hna kayban PayPal mli tclicker 3la Checkout
                                <div className="mt-2 relative z-0">
                                    <PayPalScriptProvider options={{
                                        "client-id": "AQsYPH7QkqPL_nzyIdGqFuSToT_Jgq7a1nPJ5L7VKXmWUgwk2Fl0WbDozUmQl3ju6Z8hqOGdQeiQbl12", // تأكد بلي الكود ديالك صحيح
                                        currency: "USD"
                                    } as any}>
                                        <PayPalButtons
                                            style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
                                            createOrder={(data: any, actions: any) => {
                                                return actions.order.create({
                                                    purchase_units: [{
                                                        amount: {
                                                            currency_code: "USD",
                                                            value: (total / 10).toFixed(2),
                                                        }
                                                    }]
                                                });
                                            }}
                                            onApprove={async (data, actions) => {
                                                if (actions.order) {
                                                    // 👇 هنا التغيير المهم: زدنا : any باش نسكتو TypeScript
                                                    const details: any = await actions.order.capture();

                                                    alert("Transaction completed by " + details.payer.name.given_name);

                                                    try {
                                                       
                                                        const response = await fetch('http://127.0.0.1:8000/api/orders', {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                            },
                                                            body: JSON.stringify({
                                                                // دابا هادشي كامل غايولي صحيح ومافيهش الأحمر
                                                                client_name: details.payer.name.given_name + " " + details.payer.name.surname,
                                                                email: details.payer.email_address,
                                                                total_price: total,
                                                                items: cart,
                                                                transaction_id: details.id
                                                            }),
                                                        });

                                                        if (response.ok) {
                                                            console.log("Order saved!");
                                                        }

                                                    } catch (error) {
                                                        console.error("Error:", error);
                                                    }

                                                    if (clearCart) clearCart();
                                                    setIsCartOpen(false);
                                                }
                                            }}
                                        />
                                    </PayPalScriptProvider>

                                    {/* Bouton bach tarja3 lor */}
                                    <button
                                        onClick={() => setShowPayPal(false)}
                                        className="w-full text-sm text-gray-500 underline mt-2 hover:text-[#800000]"
                                    >
                                        Cancel Payment
                                    </button>
                                </div>
                            )}

                            {!showPayPal && (
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full bg-transparent border border-[#800000] text-[#800000] py-3 rounded-lg hover:bg-[#800000]/5 font-bold transition-colors"
                                >
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Continue Shopping
                                </button>
                            )}
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            <i className="fas fa-info-circle mr-1"></i>
                            Delivery in 30-45 mins • Order can be modified until confirmed
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}