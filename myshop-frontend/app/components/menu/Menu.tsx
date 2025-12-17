'use client';

import { useEffect } from 'react';

interface MenuItem {
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
}

interface MenuProps {
    activeCategory: string;
    addToCart: (product: any) => void;
}

export default function Menu({ activeCategory, addToCart }: MenuProps) {
    // === Single products array ===
    const menuData: MenuItem[] = [
        // Moroccan Dishes 🇲🇦
        {
            name: "Chicken Tagine with Lemon and Olives",
            price: 45,
            image: "https://images.pexels.com/photos/6275122/pexels-photo-6275122.jpeg",
            category: "moroccan",
            description: "Traditional tagine with chicken, preserved lemons, olives, and Moroccan spices",
            rating: 4.8,
            reviews: 156
        },
        {
            name: "Lamb Tagine with Prunes",
            price: 55,
            image: "https://images.pexels.com/photos/6275118/pexels-photo-6275118.jpeg",
            category: "moroccan",
            description: "Tender lamb cooked with prunes, toasted almonds, and aromatic spices",
            rating: 5.0,
            reviews: 128
        },
        {
            name: "Couscous with Seven Vegetables",
            price: 35,
            image: "https://images.pexels.com/photos/5638287/pexels-photo-5638287.jpeg",
            category: "moroccan",
            description: "Traditional couscous with seven vegetables and rich broth, the Friday specialty",
            rating: 4.5,
            reviews: 142
        },
        {
            name: "Moroccan Pastilla",
            price: 40,
            image: "https://images.pexels.com/photos/6275128/pexels-photo-6275128.jpeg",
            category: "moroccan",
            description: "Sweet and savory chicken pie with ground almonds, cinnamon, and powdered sugar",
            rating: 4.7,
            reviews: 98
        },
        {
            name: "Moroccan Soup (Harira)",
            price: 18,
            image: "https://images.pexels.com/photos/5638302/pexels-photo-5638302.jpeg",
            category: "moroccan",
            description: "Traditional soup with lentils, chickpeas, tomatoes, and spices, perfect for Ramadan",
            rating: 4.4,
            reviews: 167
        },
        {
            name: "Moroccan Mint Tea",
            price: 12,
            image: "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg",
            category: "moroccan",
            description: "Sweet green tea with fresh mint, served in traditional Moroccan glasses",
            rating: 5.0,
            reviews: 203
        },

        // Fresh Juices 🥤
        {
            name: "Fresh Orange Juice",
            price: 15,
            image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
            category: "fresh-juices",
            description: "Freshly squeezed orange juice, rich in vitamin C and natural sweetness",
            rating: 5.0,
            reviews: 189
        },
        {
            name: "Natural Strawberry Juice",
            price: 18,
            image: "https://images.pexels.com/photos/96976/pexels-photo-96976.jpeg",
            category: "fresh-juices",
            description: "Natural strawberry juice full of antioxidants and fresh flavor",
            rating: 4.7,
            reviews: 134
        },
        {
            name: "Avocado Smoothie",
            price: 20,
            image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg",
            category: "fresh-juices",
            description: "Creamy avocado smoothie with milk and natural sweeteners, healthy and nutritious",
            rating: 4.3,
            reviews: 98
        },
        {
            name: "Mixed Fruit Juice",
            price: 22,
            image: "https://images.pexels.com/photos/96971/pexels-photo-96971.jpeg",
            category: "fresh-juices",
            description: "Blend of seasonal fruits: apple, pineapple, mango, and orange",
            rating: 4.6,
            reviews: 112
        },
        {
            name: "Fresh Lemonade",
            price: 12,
            image: "https://images.pexels.com/photos/96973/pexels-photo-96973.jpeg",
            category: "fresh-juices",
            description: "Refreshing hand-squeezed lemonade with mint and natural sweeteners",
            rating: 4.4,
            reviews: 145
        },
        {
            name: "Carrot & Orange Juice",
            price: 16,
            image: "https://images.pexels.com/photos/96975/pexels-photo-96975.jpeg",
            category: "fresh-juices",
            description: "Fresh carrot juice with orange and ginger for extra flavor",
            rating: 4.7,
            reviews: 87
        },

        // Burgers 🍔
        {
            name: "Classic Beef Burger",
            price: 25,
            image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
            category: "burgers",
            description: "Juicy beef patty with melted cheese, fresh lettuce, ripe tomatoes, and special sauce",
            rating: 4.7,
            reviews: 128
        },
        {
            name: "Chicken Burger",
            price: 22,
            image: "https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg",
            category: "burgers",
            description: "Grilled chicken breast with mayonnaise, crispy lettuce, and special seasoning",
            rating: 4.2,
            reviews: 95
        },
        {
            name: "Veggie Burger",
            price: 20,
            image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
            category: "burgers",
            description: "Plant-based patty with fresh vegetables, avocado, and special vegan sauce",
            rating: 4.0,
            reviews: 67
        },
        {
            name: "Double Cheese Burger",
            price: 30,
            image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
            category: "burgers",
            description: "Two beef patties with double cheese, bacon, and special sauce",
            rating: 5.0,
            reviews: 156
        },
        {
            name: "Fish Burger",
            price: 24,
            image: "https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg",
            category: "burgers",
            description: "Crispy fish fillets with tartar sauce, lettuce, and lemon",
            rating: 4.2,
            reviews: 89
        },
        {
            name: "BBQ Burger",
            price: 28,
            image: "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg",
            category: "burgers",
            description: "Beef patty with BBQ sauce, onion rings, and cheddar cheese",
            rating: 4.6,
            reviews: 112
        },

        // Pizza 🍕
        {
            name: "Margherita Pizza",
            price: 40,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Classic pizza with fresh mozzarella cheese, tomato sauce, and basil leaves",
            rating: 4.7,
            reviews: 113
        },
        {
            name: "Vegetable Pizza",
            price: 45,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Pizza topped with colorful bell peppers, mushrooms, onions, olives, and tomatoes",
            rating: 4.2,
            reviews: 89
        },
        {
            name: "Meat Lovers Pizza",
            price: 50,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Pizza with beef, pepperoni, sausages, and bell pepper slices",
            rating: 5.0,
            reviews: 134
        },
        {
            name: "Four Cheese Pizza",
            price: 48,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Pizza with mozzarella, gorgonzola, parmesan, and ricotta cheeses",
            rating: 4.7,
            reviews: 97
        },
        {
            name: "Seafood Pizza",
            price: 55,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Pizza with shrimp, calamari, oysters, and garlic sauce",
            rating: 4.2,
            reviews: 78
        },
        {
            name: "BBQ Chicken Pizza",
            price: 52,
            image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
            category: "pizza",
            description: "Pizza with grilled chicken, BBQ sauce, red onions, and cilantro",
            rating: 5.0,
            reviews: 121
        },
    ];

    // Filter items
    const filteredItems = activeCategory === 'all'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    // Add to cart function
    const handleAddToCart = (item: MenuItem) => {
        addToCart({
            id: Date.now().toString(),
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    };

    // Group items by category
    const groupedItems: { [key: string]: MenuItem[] } = {};
    filteredItems.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });

    // Category names and descriptions
    const categoryInfo = {
        'moroccan': {
            name: '🇲🇦 Moroccan Dishes',
            description: 'Traditional Moroccan flavors and heritage dishes'
        },
        'fresh-juices': {
            name: '🥤 Fresh Juices',
            description: 'Natural hand-squeezed juices full of vitamins'
        },
        'burgers': {
            name: '🍔 Delicious Burgers',
            description: 'Tasty burgers made from high-quality ingredients'
        },
        'pizza': {
            name: '🍕 Tasty Pizza',
            description: 'Fresh pizza baked with authentic flavors'
        }
    };

    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-500"></i>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-500"></i>);
        }

        return stars;
    };

    return (
        <section className="py-20 px-5 bg-[#fffaf0]">
            <div className="max-w-7xl mx-auto">
                {filteredItems.length === 0 ? (
                    <div className="text-center py-20">
                        <i className="fas fa-utensils text-6xl text-gray-300 mb-4" />
                        <p className="text-xl text-gray-600">No products in this category.</p>
                    </div>
                ) : (
                    Object.keys(groupedItems).map(category => (
                        <div key={category} id={category} className="menu-category mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-[#800000] mb-4">
                                    {categoryInfo[category as keyof typeof categoryInfo]?.name || category}
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    {categoryInfo[category as keyof typeof categoryInfo]?.description}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {groupedItems[category].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                    >
                                        <div className="relative h-64">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-[#d4af37] text-white px-3 py-1 rounded-full text-xs font-bold">
                                                    {item.category === 'moroccan' ? 'Moroccan' :
                                                        item.category === 'fresh-juices' ? 'Fresh' :
                                                            item.category === 'burgers' ? 'Tasty' : 'Delicious'}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="bg-[#800000] text-white px-4 py-2 rounded-lg font-bold text-lg">
                                                    {item.price} DH
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-[#800000] mb-2">{item.name}</h3>
                                                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                                            </div>

                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-1">
                                                    {renderStars(item.rating)}
                                                    <span className="text-gray-600 text-sm mr-2">
                                                        {item.rating.toFixed(1)} ({item.reviews})
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                                                <i className="fas fa-star text-yellow-500 mr-1"></i>
                                                <span className="text-yellow-700 font-bold">{item.rating.toFixed(1)}</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] text-white px-6 py-3 rounded-lg font-bold hover:from-[#a00000] hover:to-[#800000] transition-all duration-300 flex items-center justify-center gap-2 group"
                                        >
                                            <i className="fas fa-shopping-cart group-hover:scale-110 transition-transform"></i>
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>

                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section >
    );
}