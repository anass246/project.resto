export default function Menu() {
    return (
        <section className="py-20 px-5 bg-[#fffaf0]">
            <div className="max-w-7xl mx-auto">
                {/* Moroccan Section */}
                <div id="moroccan" className="menu-category mb-20">
                    <h2 className="section-title text-4xl font-bold text-[#800000] text-center mb-4">
                        🇲🇦 Moroccan Specialties
                    </h2>
                    <p className="section-title text-lg text-gray-600 text-center mb-12">
                        Authentic Moroccan flavors and traditional dishes
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Chicken Tagine */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={0}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Chicken Tagine"
                                    className="product-image"
                                />
                                <span className="menu-badge">Traditional</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Chicken Tagine
                                    </h3>
                                    <span className="price-tag">45 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Traditional chicken tagine with olives, preserved lemons, and
                                    Moroccan spices
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(156)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Chicken Tagine"
                                        data-price={45}
                                        data-image="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Lamb Tagine */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={100}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Lamb Tagine"
                                    className="product-image"
                                />
                                <span className="menu-badge">Chef's Choice</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Lamb Tagine with Prunes
                                    </h3>
                                    <span className="price-tag">55 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Tender lamb cooked with prunes, almonds, and aromatic spices
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(128)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Lamb Tagine with Prunes"
                                        data-price={55}
                                        data-image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Couscous */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={200}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Couscous"
                                    className="product-image"
                                />
                                <span className="menu-badge">Friday Special</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Couscous with Vegetables
                                    </h3>
                                    <span className="price-tag">35 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Traditional couscous with seven vegetables and rich broth
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(142)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Couscous with Vegetables"
                                        data-price={35}
                                        data-image="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Pastilla */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={300}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1574787499417-0ef477be3c02?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Pastilla"
                                    className="product-image"
                                />
                                <span className="menu-badge">Special</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Chicken Pastilla
                                    </h3>
                                    <span className="price-tag">40 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Sweet and savory chicken pie with almonds and cinnamon
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(98)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Chicken Pastilla"
                                        data-price={40}
                                        data-image="https://images.unsplash.com/photo-1574787499417-0ef477be3c02?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Harira */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={400}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Harira"
                                    className="product-image"
                                />
                                <span className="menu-badge">Ramadan</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Harira Soup
                                    </h3>
                                    <span className="price-tag">18 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Traditional Moroccan soup with lentils, chickpeas, and tomatoes
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(167)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Harira Soup"
                                        data-price={18}
                                        data-image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Moroccan Tea */}
                        <div
                            className="menu-card moroccan-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="moroccan"
                            data-delay={500}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Moroccan Tea"
                                    className="product-image"
                                />
                                <span className="menu-badge">Traditional</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Moroccan Mint Tea
                                    </h3>
                                    <span className="price-tag">12 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Traditional sweet mint tea served in authentic glasses
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(203)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Moroccan Mint Tea"
                                        data-price={12}
                                        data-image="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fresh Juices Section */}
                <div id="fresh-juices" className="menu-category mb-20">
                    <h2 className="section-title text-4xl font-bold text-[#800000] text-center mb-4">
                        🥤 Fresh Juices
                    </h2>
                    <p className="section-title text-lg text-gray-600 text-center mb-12">
                        Freshly squeezed juices full of vitamins and natural goodness
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Orange Juice */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={0}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Orange Juice"
                                    className="product-image"
                                />
                                <span className="menu-badge">Vitamin C</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Fresh Orange Juice
                                    </h3>
                                    <span className="price-tag">15 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Freshly squeezed orange juice, rich in vitamin C and natural
                                    sweetness
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(189)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Fresh Orange Juice"
                                        data-price={15}
                                        data-image="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Strawberry Juice */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={100}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Strawberry Juice"
                                    className="product-image"
                                />
                                <span className="menu-badge">Antioxidants</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Strawberry Juice
                                    </h3>
                                    <span className="price-tag">18 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Fresh strawberry juice packed with antioxidants and natural
                                    flavor
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(134)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Strawberry Juice"
                                        data-price={18}
                                        data-image="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Avocado Smoothie */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={200}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Avocado Smoothie"
                                    className="product-image"
                                />
                                <span className="menu-badge">Healthy</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Avocado Smoothie
                                    </h3>
                                    <span className="price-tag">20 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Creamy avocado smoothie with milk and natural sweeteners
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(98)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Avocado Smoothie"
                                        data-price={20}
                                        data-image="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Mixed Fruit Juice */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={300}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Mixed Fruit Juice"
                                    className="product-image"
                                />
                                <span className="menu-badge">Vitamin Mix</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Mixed Fruit Juice
                                    </h3>
                                    <span className="price-tag">22 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Blend of seasonal fruits including apple, pineapple, and mango
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(112)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Mixed Fruit Juice"
                                        data-price={22}
                                        data-image="https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Lemonade */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={400}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1621506289987-48e6a7d32faf?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Lemonade"
                                    className="product-image"
                                />
                                <span className="menu-badge">Refreshing</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Fresh Lemonade
                                    </h3>
                                    <span className="price-tag">12 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Freshly squeezed lemonade with mint and natural sweeteners
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(145)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Fresh Lemonade"
                                        data-price={12}
                                        data-image="https://images.unsplash.com/photo-1621506289987-48e6a7d32faf?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Carrot Juice */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="fresh-juices"
                            data-delay={500}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1621506289937-3f2d5f4b4b4a?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Carrot Juice"
                                    className="product-image"
                                />
                                <span className="menu-badge">Vitamin A</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Carrot Juice
                                    </h3>
                                    <span className="price-tag">16 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Fresh carrot juice with orange and ginger for extra flavor
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(87)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Carrot Juice"
                                        data-price={16}
                                        data-image="https://images.unsplash.com/photo-1621506289937-3f2d5f4b4b4a?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Burgers Section */}
                <div id="burgers" className="menu-category mb-20">
                    <h2 className="section-title text-4xl font-bold text-[#800000] text-center mb-4">
                        🍔 Burgers
                    </h2>
                    <p className="section-title text-lg text-gray-600 text-center mb-12">
                        Juicy, flavorful burgers made with premium ingredients
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Classic Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={0}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Classic Burger"
                                    className="product-image"
                                />
                                <span className="menu-badge">Bestseller</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Classic Burger
                                    </h3>
                                    <span className="price-tag">25 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Tender beef patty with melted cheese, fresh lettuce, ripe
                                    tomatoes, and our special sauce
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(128)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Classic Burger"
                                        data-price={25}
                                        data-image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Chicken Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={100}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1606755962773-d324e3833248?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Chicken Burger"
                                    className="product-image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Chicken Burger
                                    </h3>
                                    <span className="price-tag">22 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Grilled chicken breast with mayonnaise, crisp lettuce, and
                                    special seasoning
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(95)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Chicken Burger"
                                        data-price={22}
                                        data-image="https://images.unsplash.com/photo-1606755962773-d324e3833248?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Veggie Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={200}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Veggie Burger"
                                    className="product-image"
                                />
                                <span className="menu-badge">Vegetarian</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Veggie Burger
                                    </h3>
                                    <span className="price-tag">20 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Plant-based patty with fresh vegetables, avocado, and special
                                    vegan sauce
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(67)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Veggie Burger"
                                        data-price={20}
                                        data-image="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Double Cheese Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={300}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Double Cheese Burger"
                                    className="product-image"
                                />
                                <span className="menu-badge">Cheesy</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Double Cheese Burger
                                    </h3>
                                    <span className="price-tag">30 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Two beef patties with double cheese, bacon, and special sauce
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(156)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Double Cheese Burger"
                                        data-price={30}
                                        data-image="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Fish Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={400}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Fish Burger"
                                    className="product-image"
                                />
                                <span className="menu-badge">Seafood</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Fish Burger
                                    </h3>
                                    <span className="price-tag">24 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Crispy fish fillet with tartar sauce, lettuce, and lemon
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(89)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Fish Burger"
                                        data-price={24}
                                        data-image="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* BBQ Burger */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="burgers"
                            data-delay={500}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1553979459-d2229ba7433c?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="BBQ Burger"
                                    className="product-image"
                                />
                                <span className="menu-badge">BBQ</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">BBQ Burger</h3>
                                    <span className="price-tag">28 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Beef patty with BBQ sauce, onion rings, and cheddar cheese
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(112)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="BBQ Burger"
                                        data-price={28}
                                        data-image="https://images.unsplash.com/photo-1553979459-d2229ba7433c?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* باقي الأقسام بنفس الطريقة */}
                {/* Pizza Section */}
                <div id="pizza" className="menu-category mb-20">
                    <h2 className="section-title text-4xl font-bold text-[#800000] text-center mb-4">
                        🍕 Pizza
                    </h2>
                    <p className="section-title text-lg text-gray-600 text-center mb-12">
                        Freshly baked pizzas with authentic flavors
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Margherita Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={0}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Margherita Pizza"
                                    className="product-image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Margherita Pizza
                                    </h3>
                                    <span className="price-tag">40 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Classic pizza with fresh mozzarella, tomato sauce, and basil
                                    leaves
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(113)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Margherita Pizza"
                                        data-price={40}
                                        data-image="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Vegetable Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={100}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Vegetable Pizza"
                                    className="product-image"
                                />
                                <span className="menu-badge">Vegetarian</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Vegetable Pizza
                                    </h3>
                                    <span className="price-tag">45 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Pizza topped with bell peppers, mushrooms, onions, olives, and
                                    tomatoes
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(89)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Vegetable Pizza"
                                        data-price={45}
                                        data-image="https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Meat Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={200}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Meat Pizza"
                                    className="product-image"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">Meat Pizza</h3>
                                    <span className="price-tag">50 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Pizza with beef, pepperoni, sausage, and bell pepper slices
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(134)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Meat Pizza"
                                        data-price={50}
                                        data-image="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 4 Cheese Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={300}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="4 Cheese Pizza"
                                    className="product-image"
                                />
                                <span className="menu-badge">Cheesy</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        4 Cheese Pizza
                                    </h3>
                                    <span className="price-tag">48 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Pizza with mozzarella, gorgonzola, parmesan, and ricotta cheese
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <span className="text-gray-600 ml-2 text-sm">(97)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="4 Cheese Pizza"
                                        data-price={48}
                                        data-image="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Seafood Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={400}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="Seafood Pizza"
                                    className="product-image"
                                />
                                <span className="menu-badge">Seafood</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        Seafood Pizza
                                    </h3>
                                    <span className="price-tag">55 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Pizza with shrimp, calamari, mussels, and garlic sauce
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(78)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="Seafood Pizza"
                                        data-price={55}
                                        data-image="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* BBQ Chicken Pizza */}
                        <div
                            className="menu-card bg-white rounded-2xl shadow-lg overflow-hidden"
                            data-category="pizza"
                            data-delay={500}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&h=400&q=80"
                                    alt="BBQ Chicken Pizza"
                                    className="product-image"
                                />
                                <span className="menu-badge">BBQ</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-[#800000]">
                                        BBQ Chicken Pizza
                                    </h3>
                                    <span className="price-tag">52 MAD</span>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Pizza with grilled chicken, BBQ sauce, red onions, and cilantro
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-yellow-500">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="text-gray-600 ml-2 text-sm">(121)</span>
                                    </div>
                                    <button
                                        className="add-to-cart bg-[#800000] text-white px-6 py-2 rounded-lg font-bold hover:bg-red-800 transition duration-300"
                                        data-name="BBQ Chicken Pizza"
                                        data-price={52}
                                        data-image="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&h=400&q=80"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* باقي الأقسام */}
            </div>
        </section>
    );
}