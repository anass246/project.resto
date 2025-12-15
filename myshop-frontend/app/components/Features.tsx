export default function Features() {
    return (
        <>
            <section id="features" className="section-padding bg-white">
                <div className="container mx-auto px-5">
                    <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                        We take pride in offering an exceptional dining experience that combines
                        authentic flavors with modern elegance
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="text-center card-hover">
                            <div className="feature-icon floating-animation">
                                <i className="fas fa-seedling" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#800000] mb-4">
                                Fresh Ingredients
                            </h3>
                            <p className="text-gray-600">
                                We source only the finest, locally-sourced ingredients to ensure
                                every dish is bursting with flavor and nutrition.
                            </p>
                        </div>
                        <div className="text-center card-hover">
                            <div
                                className="feature-icon floating-animation"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <i className="fas fa-clock" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#800000] mb-4">
                                Quick Service
                            </h3>
                            <p className="text-gray-600">
                                Our efficient kitchen and attentive staff ensure your meals are
                                prepared and served promptly without compromising quality.
                            </p>
                        </div>
                        <div className="text-center card-hover">
                            <div
                                className="feature-icon floating-animation"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <i className="fas fa-heart" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#800000] mb-4">
                                Made with Love
                            </h3>
                            <p className="text-gray-600">
                                Every dish is crafted with passion and attention to detail, creating
                                memorable culinary experiences for our guests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

