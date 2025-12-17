export default function Mobile() {
    return (
        <>
            <div id="mobile-menu-overlay" className="mobile-menu-overlay" />
            <div id="mobile-menu" className="mobile-menu">
                <div className="mobile-menu-header">
                    <div className="text-xl font-bold text-[#fff5e6] flex items-center">
                        <i className="fas fa-utensils mr-2" />
                        Snack Anass
                    </div>
                    <button
                        id="close-menu"
                        className="text-[#fff5e6] hover:text-yellow-200 text-xl transition duration-300"
                    >
                        <i className="fas fa-times" />
                    </button>
                </div>
                <div className="mobile-menu-content">
                    <a href="snak.html" className="mobile-nav-item">
                        <i className="fas fa-home mr-3 w-5 text-center" />
                        Home
                    </a>
                    <a href="#moroccan" className="mobile-nav-item">
                        <i className="fas fa-utensils mr-3 w-5 text-center" />
                        Moroccan
                    </a>
                    <a href="#burgers" className="mobile-nav-item">
                        <i className="fas fa-hamburger mr-3 w-5 text-center" />
                        Burgers
                    </a>
                    <a href="#pizza" className="mobile-nav-item">
                        <i className="fas fa-pizza-slice mr-3 w-5 text-center" />
                        Pizza
                    </a>
                    <a href="#fresh-juices" className="mobile-nav-item">
                        <i className="fas fa-glass-whiskey mr-3 w-5 text-center" />
                        Fresh Juices
                    </a>
                </div>
            </div>
        </>
    );
}