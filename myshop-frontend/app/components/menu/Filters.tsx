"use client";
import { useEffect } from 'react';
export default function Filters({ activeCategory, setActiveCategory }: any) {
    useEffect(() => {
    }, []);
    return (
        <section className="filter-section -mt-10 mx-5">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-[#800000] mb-6">
                    Filter by Category
                </h3>
                <div className="category-filter">

                    {/* All Items */}
                    <button
                        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        <i className="fas fa-th-large mr-2" />
                        All Items
                    </button>

                    {/* Moroccan */}
                    <button
                        className={`filter-btn ${activeCategory === 'moroccan' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('moroccan')}
                    >
                        <i className="fas fa-utensils mr-2" />
                        Moroccan
                    </button>

                    {/* Burgers */}
                    <button
                        className={`filter-btn ${activeCategory === 'burgers' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('burgers')}
                    >
                        <i className="fas fa-hamburger mr-2" />
                        Burgers
                    </button>

                    {/* Pizza */}
                    <button
                        className={`filter-btn ${activeCategory === 'pizza' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('pizza')}
                    >
                        <i className="fas fa-pizza-slice mr-2" />
                        Pizza
                    </button>
                    {/* Fresh Juices */}
                    <button
                        className={`filter-btn ${activeCategory === 'fresh-juices' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('fresh-juices')}
                    >
                        <i className="fas fa-glass-whiskey mr-2" />
                        Fresh Juices
                    </button>

                </div>
            </div>
        </section>
    );
}