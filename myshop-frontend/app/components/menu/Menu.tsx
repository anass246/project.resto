'use client';

import { useState } from 'react';

export interface MenuItem {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
    badge?: string;
    prepTime?: string;
}

interface MenuProps {
    activeCategory: string;
    addToCart: (product: any) => void;
    searchQuery?: string;
}

export default function Menu({ activeCategory, addToCart, searchQuery = '' }: MenuProps) {
    const [addedId, setAddedId] = useState<string | null>(null);

    // === Menu Products Array ===
    const menuData: MenuItem[] = [
        // Moroccan Dishes 🇲🇦
        {
            name: "Chicken Tagine with Lemon and Olives",
            price: 14.99,
            image: "https://images.pexels.com/photos/6275122/pexels-photo-6275122.jpeg",
            category: "moroccan",
            description: "Slow-simmered tender chicken infused with preserved lemons, seasoned green olives, and fragrant saffron broth.",
            rating: 4.8,
            reviews: 156,
            badge: "Chef's Special",
            prepTime: "25 min"
        },
        {
            name: "Lamb Tagine with Prunes",
            price: 17.99,
            image: "https://images.pexels.com/photos/6275118/pexels-photo-6275118.jpeg",
            category: "moroccan",
            description: "Melt-in-your-mouth lamb caramelized with honeyed prunes, toasted almonds, and aromatic cinnamon.",
            rating: 5.0,
            reviews: 128,
            badge: "Popular",
            prepTime: "30 min"
        },
        {
            name: "Couscous with Seven Vegetables",
            price: 13.99,
            image: "https://images.pexels.com/photos/5638287/pexels-photo-5638287.jpeg",
            category: "moroccan",
            description: "Authentic steamed semolina topped with pumpkin, zucchini, carrots, turnips, and rich savory broth.",
            rating: 4.5,
            reviews: 142,
            badge: "Traditional",
            prepTime: "20 min"
        },
        {
            name: "Moroccan Royal Pastilla",
            price: 15.99,
            image: "https://images.pexels.com/photos/6275128/pexels-photo-6275128.jpeg",
            category: "moroccan",
            description: "Crispy golden warqa pastry layered with spiced shredded chicken, toasted crushed almonds, and powdered sugar.",
            rating: 4.7,
            reviews: 98,
            badge: "Signature",
            prepTime: "20 min"
        },
        {
            name: "Traditional Moroccan Harira",
            price: 6.99,
            image: "https://images.pexels.com/photos/5638302/pexels-photo-5638302.jpeg",
            category: "moroccan",
            description: "Hearty heritage soup rich with chickpeas, tender lentils, fresh coriander, celery, and warm spices.",
            rating: 4.4,
            reviews: 167,
            prepTime: "10 min"
        },
        {
            name: "Moroccan Mint Tea Pot",
            price: 4.99,
            image: "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg",
            category: "moroccan",
            description: "Traditional gunpowder green tea brewed fresh with fragrant spearmint leaves and served in ornate teaware.",
            rating: 5.0,
            reviews: 203,
            prepTime: "5 min"
        },

        // Fresh Juices 🥤
        {
            name: "Fresh Orange Juice",
            price: 5.49,
            image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
            category: "fresh-juices",
            description: "100% natural, freshly squeezed Moroccan Valencia oranges bursting with pure vitamin C.",
            rating: 5.0,
            reviews: 189,
            badge: "100% Natural",
            prepTime: "5 min"
        },
        {
            name: "Natural Strawberry Juice",
            price: 6.49,
            image: "https://images.pexels.com/photos/96976/pexels-photo-96976.jpeg",
            category: "fresh-juices",
            description: "Sweet, sun-ripened fresh strawberries blended chilled for a refreshing antioxidant boost.",
            rating: 4.7,
            reviews: 134,
            prepTime: "5 min"
        },
        {
            name: "Creamy Avocado Almond Smoothie",
            price: 7.99,
            image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg",
            category: "fresh-juices",
            description: "Rich blended Hass avocado with fresh whole milk, orange blossom water, and crushed almonds.",
            rating: 4.9,
            reviews: 98,
            badge: "Best Seller",
            prepTime: "5 min"
        },
        {
            name: "Exotic Mixed Fruit Cocktail",
            price: 7.49,
            image: "https://images.pexels.com/photos/96971/pexels-photo-96971.jpeg",
            category: "fresh-juices",
            description: "A vibrant tropical blend of mango, pineapple, crisp apple, and freshly squeezed orange.",
            rating: 4.6,
            reviews: 112,
            prepTime: "5 min"
        },
        {
            name: "Fresh Mint Lemonade",
            price: 4.99,
            image: "https://images.pexels.com/photos/96973/pexels-photo-96973.jpeg",
            category: "fresh-juices",
            description: "Hand-squeezed zesty lemon blended with garden mint and crushed ice for total refreshment.",
            rating: 4.4,
            reviews: 145,
            prepTime: "5 min"
        },
        {
            name: "Carrot, Orange & Ginger",
            price: 5.99,
            image: "https://images.pexels.com/photos/96975/pexels-photo-96975.jpeg",
            category: "fresh-juices",
            description: "Cold-pressed fresh carrot juice paired with citrus orange and a subtle spicy ginger kick.",
            rating: 4.7,
            reviews: 87,
            prepTime: "5 min"
        },

        // Burgers 🍔
        {
            name: "Classic Steakhouse Beef Burger",
            price: 11.99,
            image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
            category: "burgers",
            description: "Flame-grilled pure beef patty, melted cheddar, crisp butter lettuce, ripe tomato, and our secret sauce.",
            rating: 4.7,
            reviews: 128,
            badge: "Popular",
            prepTime: "15 min"
        },
        {
            name: "Crispy Golden Chicken Burger",
            price: 10.99,
            image: "https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg",
            category: "burgers",
            description: "Crispy herb-crusted chicken fillet with garlic aioli, crunchy dill pickles, and melted gouda cheese.",
            rating: 4.5,
            reviews: 95,
            prepTime: "15 min"
        },
        {
            name: "Garden Fresh Veggie Burger",
            price: 9.99,
            image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
            category: "burgers",
            description: "Seasoned chickpea & quinoa patty, fresh avocado mash, caramelized onions, and vegan chipotle sauce.",
            rating: 4.3,
            reviews: 67,
            badge: "Vegetarian",
            prepTime: "12 min"
        },
        {
            name: "Double Melt Cheeseburger",
            price: 13.99,
            image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
            category: "burgers",
            description: "Two 100g beef patties smashed with double mature cheddar, crispy onion jam, and smokey house glaze.",
            rating: 5.0,
            reviews: 156,
            badge: "Top Rated",
            prepTime: "15 min"
        },
        {
            name: "Crispy Ocean Fish Burger",
            price: 11.49,
            image: "https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg",
            category: "burgers",
            description: "Golden crumbed white fish fillet, creamy house tartare sauce, shredded iceberg, and a touch of lemon.",
            rating: 4.2,
            reviews: 89,
            prepTime: "12 min"
        },
        {
            name: "Smoky Texas BBQ Burger",
            price: 12.99,
            image: "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg",
            category: "burgers",
            description: "Char-grilled beef coated in sweet hickory BBQ sauce, topped with golden onion rings and smoked bacon.",
            rating: 4.8,
            reviews: 112,
            prepTime: "15 min"
        },

        // Pizza 🍕
        {
            name: "Classic Italian Margherita",
            price: 13.99,
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "San Marzano tomato sauce, fresh creamy fior di latte mozzarella, fragrant sweet basil, and extra virgin olive oil.",
            rating: 4.8,
            reviews: 113,
            badge: "Classic",
            prepTime: "15 min"
        },
        {
            name: "Mediterranean Veggie Feast",
            price: 14.99,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "Roasted bell peppers, grilled eggplant, button mushrooms, red onions, kalamata olives, and fresh herbs.",
            rating: 4.4,
            reviews: 89,
            prepTime: "15 min"
        },
        {
            name: "Carnivore Meat Lovers Pizza",
            price: 16.99,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "Loaded with spiced minced beef, smoked turkey ham, pepperoni slices, and Italian herb mozzarella.",
            rating: 5.0,
            reviews: 134,
            badge: "Fan Favorite",
            prepTime: "18 min"
        },
        {
            name: "Quattro Formaggi (Four Cheese)",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "Rich decadence of whole mozzarella, aged parmesan, gorgonzola blue cheese, and creamy ricotta.",
            rating: 4.7,
            reviews: 97,
            prepTime: "15 min"
        },
        {
            name: "Mediterranean Seafood Pizza",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "Plump garlic sautéed shrimp, tender calamari rings, tomato confit, fresh parsley, and melted cheese.",
            rating: 4.6,
            reviews: 78,
            badge: "Gourmet",
            prepTime: "20 min"
        },
        {
            name: "Smoky BBQ Chicken Pizza",
            price: 16.49,
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
            category: "pizza",
            description: "Marinated grilled chicken breast slices, tangy BBQ base, red onions, smoked provolone, and fresh cilantro.",
            rating: 5.0,
            reviews: 121,
            prepTime: "16 min"
        },
    ];

    // Filter items by active category & search query
    const filteredItems = menuData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch = query === '' ||
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    const handleAddToCart = (item: MenuItem) => {
        addToCart({
            id: item.name + '_' + item.price,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });

        // Trigger brief visual feedback
        setAddedId(item.name);
        setTimeout(() => setAddedId(null), 1200);
    };

    // Category names and styling info
    const categoryInfo: { [key: string]: { name: string; subtitle: string; icon: string } } = {
        'moroccan': {
            name: 'Authentic Moroccan Heritage',
            subtitle: 'Centuries of rich spices, fragrant tagines, and traditional cooking',
            icon: '🇲🇦'
        },
        'burgers': {
            name: 'Gourmet Smashed Burgers',
            subtitle: '100% pure beef and crispy seasoned chicken in brioche buns',
            icon: '🍔'
        },
        'pizza': {
            name: 'Artisan Stone-Baked Pizza',
            subtitle: 'Slow-fermented dough topped with premium melted cheeses and fresh toppings',
            icon: '🍕'
        },
        'fresh-juices': {
            name: 'Cold-Pressed Fresh Juices',
            subtitle: '100% natural, vitamin-packed refreshments made to order',
            icon: '🥤'
        }
    };

    // Group items by category
    const groupedItems: { [key: string]: MenuItem[] } = {};
    filteredItems.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* When search active, show search result feedback */}
            {searchQuery && (
                <div className="mb-8 p-4 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-amber-900">
                        <i className="fas fa-search text-amber-600"></i>
                        <span>Search results for: <strong>"{searchQuery}"</strong> ({filteredItems.length} dishes found)</span>
                    </div>
                </div>
            )}

            {filteredItems.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-md mx-auto p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 text-3xl">
                        <i className="fas fa-magnifying-glass"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No Delicious Dishes Found</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        We couldn't find any dishes matching "{searchQuery}". Try searching for Tagine, Burger, Juice, or Pizza.
                    </p>
                </div>
            ) : (
                Object.keys(groupedItems).map(category => (
                    <div key={category} id={category} className="mb-20 scroll-mt-24">
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-200/80 gap-3">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full mb-2">
                                    <span>{categoryInfo[category]?.icon || '🍴'}</span>
                                    <span>{category.toUpperCase()} SELECTION</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#800000] tracking-tight">
                                    {categoryInfo[category]?.name || category}
                                </h2>
                                <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-xl">
                                    {categoryInfo[category]?.subtitle}
                                </p>
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-stone-500">
                                {groupedItems[category].length} items available
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {groupedItems[category].map((item, index) => {
                                const isJustAdded = addedId === item.name;

                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100/90 flex flex-col justify-between hover:-translate-y-2"
                                    >
                                        {/* Image Container with Zoom & Floating Badges */}
                                        <div className="relative h-60 overflow-hidden bg-stone-100">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            {/* Top Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                                            {/* Floating Badges */}
                                            <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                                                {item.badge && (
                                                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                                                        <i className="fas fa-sparkles text-[10px]"></i>
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Prep time badge */}
                                            {item.prepTime && (
                                                <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                                                    <i className="far fa-clock text-amber-300 text-[11px]"></i>
                                                    <span>{item.prepTime}</span>
                                                </div>
                                            )}

                                            {/* Floating Price Pill */}
                                            <div className="absolute bottom-3.5 right-3.5">
                                                <span className="bg-[#800000] text-white px-3.5 py-1.5 rounded-xl font-extrabold text-lg shadow-xl border border-amber-300/30 flex items-center gap-0.5">
                                                    <span className="text-sm font-bold text-amber-300">$</span>
                                                    <span>{item.price.toFixed(2)}</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                {/* Ratings Row */}
                                                <div className="flex items-center justify-between mb-3 text-xs">
                                                    <div className="flex items-center gap-1.5 text-amber-500">
                                                        <i className="fas fa-star text-amber-400"></i>
                                                        <span className="font-extrabold text-stone-800 text-sm">
                                                            {item.rating.toFixed(1)}
                                                        </span>
                                                        <span className="text-stone-400">
                                                            ({item.reviews} reviews)
                                                        </span>
                                                    </div>
                                                    <span className="text-stone-400 font-medium capitalize">
                                                        {item.category.replace('-', ' ')}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#800000] transition-colors duration-300 mb-2 leading-snug">
                                                    {item.name}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-2">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Action Button */}
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md select-none ${
                                                    isJustAdded
                                                        ? 'bg-emerald-600 text-white scale-[0.98]'
                                                        : 'bg-gradient-to-r from-[#800000] via-[#940000] to-[#b30000] text-white hover:shadow-xl hover:shadow-[#800000]/25 active:scale-95'
                                                }`}
                                            >
                                                {isJustAdded ? (
                                                    <>
                                                        <i className="fas fa-check text-base animate-bounce"></i>
                                                        <span>Added to Cart!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="fas fa-cart-plus text-base group-hover:scale-110 transition-transform"></i>
                                                        <span>Add to Cart • ${item.price.toFixed(2)}</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}
