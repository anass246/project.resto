'use client';

interface HeroProps {
    searchQuery?: string;
    setSearchQuery?: (q: string) => void;
}

export default function Hero({ searchQuery = '', setSearchQuery }: HeroProps) {
    return (
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#400000] via-[#700000] to-[#800000] text-[#fff5e6] overflow-hidden">
            {/* Background Ambient Glows & Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.18),transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_50%)] pointer-events-none"></div>
            
            {/* Subtle decorative floating food icons */}
            <div className="absolute top-20 left-10 text-white/5 text-7xl select-none pointer-events-none hidden lg:block">
                <i className="fas fa-utensils"></i>
            </div>
            <div className="absolute bottom-10 right-12 text-white/5 text-8xl select-none pointer-events-none hidden lg:block">
                <i className="fas fa-pizza-slice"></i>
            </div>

            <div className="container mx-auto px-5 relative z-10 text-center max-w-4xl">
                {/* Highlight Tag */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold text-amber-300 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>100% Fresh Daily Ingredients • Handcrafted with Love</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                    Explore Our <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 bg-clip-text text-transparent">Signature Menu</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-amber-100/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    From authentic Moroccan tagines and couscous to gourmet flame-grilled burgers and artisan stone-baked pizzas.
                </p>

                {/* Quick Search Bar */}
                {setSearchQuery && (
                    <div className="max-w-xl mx-auto relative mb-10">
                        <div className="relative flex items-center">
                            <i className="fas fa-search absolute left-5 text-gray-400 text-lg"></i>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search dishes (e.g. Tagine, Burger, Pizza, Avocado...)"
                                className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white text-gray-800 placeholder-gray-400 font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-400/50 border border-amber-200/40 text-base transition-all duration-300"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition"
                                >
                                    <i className="fas fa-times text-xs"></i>
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Features Pills */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-white/10 text-sm font-medium text-amber-100">
                    <div className="flex items-center gap-2">
                        <i className="fas fa-star text-amber-400"></i>
                        <span><strong>4.9 / 5</strong> Rating (500+ Reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-truck-fast text-amber-400"></i>
                        <span>Fast 30-45 Min Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fas fa-shield-halved text-amber-400"></i>
                        <span>Halal & Certified Quality</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
