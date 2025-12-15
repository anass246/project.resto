export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-[#800000] text-white py-12">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <i className="fas fa-utensils mr-2 text-[#d4af37]" />
                                Snack Anass
                            </h3>
                            <p className="text-gray-300">
                                Traditional taste with modern elegance in the heart of Casablanca.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-300 hover:text-white transition duration-300"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/menu"
                                        className="text-gray-300 hover:text-white transition duration-300"
                                    >
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#features"
                                        className="text-gray-300 hover:text-white transition duration-300"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-300 hover:text-white transition duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mr-2 mt-1 text-[#d4af37]" />
                                    <span>123 Mohammed V Street, Casablanca</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone mr-2 text-[#d4af37]" />
                                    <span>+212 5XX-XXXXXX</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope mr-2 text-[#d4af37]" />
                                    <span>info@snackanass.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex justify-between">
                                    <span>Monday - Sunday</span>
                                    <span>9:00 AM - 11:00 PM</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <a
                                    href="#booking"
                                    className="btn-secondary inline-block text-center w-full py-2"
                                >
                                    Book a Table
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
                        <p>© 2023 Snack Anass. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}