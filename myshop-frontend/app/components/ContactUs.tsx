export default function ContactUs() {
    return (
        <>
            <section id="contact" className="section-padding bg-white">
                <div className="container mx-auto px-5">
                    <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                        Get in touch with us for reservations, catering, or any inquiries
                    </p>
                    <div className="contact-container">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-[#800000] mb-8">
                                    Visit Our Restaurant
                                </h3>
                                <div className="flex items-start mb-6">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Address</h4>
                                        <p className="text-gray-700">
                                            123 Mohammed V Street, Casablanca, Morocco
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                                        <p className="text-gray-700">+212 5XX-XXXXXX</p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email</h4>
                                        <p className="text-gray-700">info@snackanass.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="contact-icon">
                                        <i className="fas fa-clock" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                        <p className="text-gray-700">
                                            Monday - Sunday: 9:00 AM - 11:00 PM
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-lg mb-4 text-[#800000]">
                                        Follow Us
                                    </h4>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] transition duration-300"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] transition duration-300"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] transition duration-300"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#800000] mb-6">
                                    Send Us a Message
                                </h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#800000] transition duration-300"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#800000] transition duration-300"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#800000] transition duration-300"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#800000] transition duration-300"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#800000] transition duration-300"
                                        defaultValue={""}
                                    />
                                    <button type="submit" className="btn-primary w-full py-4 text-lg">
                                        Send Message <i className="fas fa-paper-plane ml-2" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}