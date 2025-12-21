export default function Header() {
    return (
        <nav className="navbar bg-[#800000] text-[#fff5e6] p-4 flex justify-between items-center fixed w-full z-50 top-0">
            <div className="text-2xl font-bold tracking-wide flex items-center">
                <i className="fas fa-utensils mr-2" />
                Snack Anass
            </div>
            <ul className="hidden md:flex items-center space-x-8 text-lg">
                <li>
                    <a
                        href="/"
                        className="nav-item hover:text-yellow-200 transition duration-300 flex items-center"
                    >
                        <i className="fas fa-home mr-2" />
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#moroccan"
                        className="nav-item hover:text-yellow-200 transition duration-300 flex items-center"
                    >
                        <i className="fas fa-utensils mr-2" />
                        Moroccan
                    </a>
                </li>
                <li>
                    <a
                        href="#burgers"
                        className="nav-item hover:text-yellow-200 transition duration-300 flex items-center"
                    >
                        <i className="fas fa-hamburger mr-2" />
                        Burgers
                    </a>
                </li>
                <li>
                    <a
                        href="#pizza"
                        className="nav-item hover:text-yellow-200 transition duration-300 flex items-center"
                    >
                        <i className="fas fa-pizza-slice mr-2" />
                        Pizza
                    </a>
                </li>

                <li>
                    <a
                        href="#fresh-juices"
                        className="nav-item hover:text-yellow-200 transition duration-300 flex items-center"
                    >
                        <i className="fas fa-glass-whiskey mr-2" />
                        Fresh Juices
                    </a>
                </li>
            </ul>
        </nav>
    );
}