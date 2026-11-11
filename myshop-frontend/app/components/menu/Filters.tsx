'use client';

interface FiltersProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    totalCount?: number;
    categoryCounts?: { [key: string]: number };
}

export default function Filters({
    activeCategory,
    setActiveCategory,
    categoryCounts = {}
}: FiltersProps) {
    const categories = [
        { id: 'all', label: 'All Items', icon: 'fas fa-border-all', emoji: '🍽️' },
        { id: 'moroccan', label: 'Moroccan Classics', icon: 'fas fa-utensils', emoji: '🇲🇦' },
        { id: 'burgers', label: 'Gourmet Burgers', icon: 'fas fa-burger', emoji: '🍔' },
        { id: 'pizza', label: 'Stone Pizza', icon: 'fas fa-pizza-slice', emoji: '🍕' },
        { id: 'fresh-juices', label: 'Fresh Juices', icon: 'fas fa-glass-water', emoji: '🥤' },
    ];

    return (
        <section className="relative z-20 -mt-8 max-w-5xl mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl shadow-xl border border-amber-100 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const count = categoryCounts[cat.id];

                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 relative select-none ${
                                isActive
                                    ? 'bg-gradient-to-r from-[#800000] to-[#a00000] text-white shadow-lg shadow-[#800000]/30 scale-[1.03]'
                                    : 'bg-stone-50 hover:bg-amber-50/80 text-gray-700 hover:text-[#800000] border border-gray-200/60'
                            }`}
                        >
                            <span className="text-lg">{cat.emoji}</span>
                            <span>{cat.label}</span>
                            {count !== undefined && (
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-extrabold ${
                                        isActive
                                            ? 'bg-white/20 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                    }`}
                                >
                                    {count}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
