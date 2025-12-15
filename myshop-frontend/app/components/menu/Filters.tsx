export default function Filters() {
    return (
        <section className="filter-section -mt-10 mx-5">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-[#800000] mb-6">
                    Filter by Category
                </h3>
                <div className="category-filter">
                    <button className="filter-btn active" data-category="all">
                        <i className="fas fa-th-large mr-2" />
                        All Items
                    </button>
                    <button className="filter-btn" data-category="moroccan">
                        <i className="fas fa-utensils mr-2" />
                        Moroccan
                    </button>
                    <button className="filter-btn" data-category="burgers">
                        <i className="fas fa-hamburger mr-2" />
                        Burgers
                    </button>
                    <button className="filter-btn" data-category="pizza">
                        <i className="fas fa-pizza-slice mr-2" />
                        Pizza
                    </button>
                    <button className="filter-btn" data-category="sandwiches">
                        <i className="fas fa-bread-slice mr-2" />
                        Sandwiches
                    </button>
                    <button className="filter-btn" data-category="fresh-juices">
                        <i className="fas fa-glass-whiskey mr-2" />
                        Fresh Juices
                    </button>
                    <button className="filter-btn" data-category="drinks">
                        <i className="fas fa-coffee mr-2" />
                        Hot Drinks
                    </button>
                    <button className="filter-btn" data-category="desserts">
                        <i className="fas fa-ice-cream mr-2" />
                        Desserts
                    </button>
                </div>
            </div>
        </section>
    );
}