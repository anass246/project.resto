export default function Home() {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar bg-[#800000] text-white p-4 flex justify-between items-center fixed w-full z-50 top-0">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide flex items-center">
            <i className="fas fa-utensils mr-2 text-[#d4af37]" />
            <span className="gradient-text">Snack Anass</span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-lg">
            <li>
              <a
                href="#home"
                className="nav-link text-white hover:text-[#d4af37] transition duration-300"
                data-nav="home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="nav-link text-white hover:text-[#d4af37] transition duration-300"
                data-nav="features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="nav-link text-white hover:text-[#d4af37] transition duration-300"
                data-nav="booking"
              >
                Book a Table
              </a>
            </li>
            <li>
              <a
                href="#rating-comments"
                className="nav-link text-white hover:text-[#d4af37] transition duration-300"
                data-nav="rating-comments"
              >
                Ratings &amp; Comments
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link text-white hover:text-[#d4af37] transition duration-300"
                data-nav="contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/menu" className="btn-primary">
                View Menu
              </a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-2xl text-white hover:text-[#d4af37] transition duration-300"
          >
            <i className="fas fa-bars" />
          </button>
        </nav>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="mobile-menu">
          <button
            id="close-menu"
            className="absolute top-6 right-6 text-white hover:text-[#d4af37] text-2xl transition duration-300"
          >
            <i className="fas fa-times" />
          </button>
          <div className="text-center">
            <div className="text-3xl font-bold mb-10 flex items-center justify-center">
              <i className="fas fa-utensils mr-2 text-[#d4af37]" />
              <span className="text-white">Snack Anass</span>
            </div>
            <a href="#home" className="mobile-nav-link" data-nav="home">
              Home
            </a>
            <a href="#features" className="mobile-nav-link" data-nav="features">
              Features
            </a>
            <a href="#booking" className="mobile-nav-link" data-nav="booking">
              Book a Table
            </a>
            <a
              href="#rating-comments"
              className="mobile-nav-link"
              data-nav="rating-comments"
            >
              Ratings &amp; Comments
            </a>
            <a href="#contact" className="mobile-nav-link" data-nav="contact">
              Contact
            </a>
            <a
              href="/menu"
              className="mobile-nav-link bg-[#d4af37] text-[#800000] rounded-full px-6 py-2 mt-6 font-bold"
            >
              View Menu
            </a>
          </div>
        </div>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative pt-16"
        >
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 text-center max-w-4xl mx-4 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-[#d4af37]">Snack Anass</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Experience the finest traditional cuisine with a modern twist in the
              heart of Casablanca
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/menu"
                className="btn-primary text-lg py-4 px-8 floating-animation"
              >
                <i className="fas fa-utensils mr-2" />
                Explore Our Menu
              </a>
              <a href="#booking" className="btn-secondary text-lg py-4 px-8">
                <i className="fas fa-calendar-alt mr-2" />
                Book a Table
              </a>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <a href="#features" className="text-white text-2xl animate-bounce">
              <i className="fas fa-chevron-down" />
            </a>
          </div>
        </section>
  /*anastjergopjpzetpgo*/
        {/* Features Section - Centered */}
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
        {/* Book a Table Section */}
        <section id="booking" className="section-padding booking-section">
          <div className="container mx-auto px-5">
            <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
              Book a Table
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Reserve your table for an unforgettable dining experience
            </p>
            <div className="booking-container">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <div className="booking-card">
                    <h3 className="text-2xl font-bold text-[#800000] mb-6">
                      Make a Reservation
                    </h3>
                    <form id="booking-form">
                      <div className="booking-form">
                        <div className="form-group">
                          <label className="form-label">Full Name</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your full name"
                            id="booking-name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            className="form-input"
                            placeholder="Enter your phone number"
                            id="booking-phone"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            className="form-input"
                            placeholder="Enter your email"
                            id="booking-email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Number of Guests</label>
                          <select
                            className="form-select"
                            id="booking-guests"
                            required
                          >
                            <option value="">Select number of guests</option>
                            <option value={1}>1 Person</option>
                            <option value={2}>2 People</option>
                            <option value={3}>3 People</option>
                            <option value={4}>4 People</option>
                            <option value={5}>5 People</option>
                            <option value={6}>6 People</option>
                            <option value={7}>7 People</option>
                            <option value={8}>8+ People</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Date</label>
                          <input
                            type="date"
                            className="form-input"
                            id="booking-date"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Time</label>
                          <div className="time-slots" id="time-slots">
                            {/* Time slots will be generated dynamically */}
                          </div>
                          <input type="hidden" id="booking-time" required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Special Requests</label>
                          <textarea
                            className="form-input form-textarea"
                            placeholder="Any special requests or dietary requirements?"
                            id="booking-requests"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn-primary w-full py-4 text-lg"
                          >
                            <i className="fas fa-calendar-check mr-2" />
                            Book Table Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Booking Summary */}
                <div>
                  <div className="booking-summary">
                    <h3 className="text-2xl font-bold text-[#800000] mb-6">
                      Reservation Details
                    </h3>
                    <div className="space-y-4">
                      <div className="summary-item">
                        <span>Name:</span>
                        <span id="summary-name">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Phone:</span>
                        <span id="summary-phone">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Email:</span>
                        <span id="summary-email">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Guests:</span>
                        <span id="summary-guests">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Date:</span>
                        <span id="summary-date">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Time:</span>
                        <span id="summary-time">-</span>
                      </div>
                      <div className="summary-item">
                        <span>Status:</span>
                        <span className="text-[#d4af37] font-bold">Pending</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-[#fffaf0] rounded-lg">
                      <h4 className="font-bold text-[#800000] mb-2">
                        Important Notes:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Please arrive 5 minutes before your reservation</li>
                        <li>• Tables are held for 15 minutes after booking time</li>
                        <li>• Cancellations must be made 2 hours in advance</li>
                        <li>• Special requests are subject to availability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Booking Features */}
              <div className="booking-features">
                <div className="booking-feature">
                  <i className="fas fa-clock" />
                  <h3>Quick Booking</h3>
                  <p>
                    Reserve your table in just a few clicks. Instant confirmation for
                    your peace of mind.
                  </p>
                </div>
                <div className="booking-feature">
                  <i className="fas fa-users" />
                  <h3>Group Friendly</h3>
                  <p>
                    Perfect for all occasions - from intimate dinners to large family
                    gatherings.
                  </p>
                </div>
                <div className="booking-feature">
                  <i className="fas fa-star" />
                  <h3>Priority Service</h3>
                  <p>
                    Booked guests receive priority seating and attentive service
                    throughout their meal.
                  </p>
                </div>
                <div className="booking-feature">
                  <i className="fas fa-utensils" />
                  <h3>Special Requests</h3>
                  <p>
                    We accommodate dietary restrictions and special occasions with
                    advance notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Specialties Section */}
        <section className="section-padding bg-[#fffaf0]">
          <div className="container mx-auto px-5">
            <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
              Our Specialties
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Discover our signature dishes that keep our customers coming back for
              more
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                  <div className="menu-tag">Popular</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-2">
                    Gourmet Burgers
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Juicy beef patties with fresh vegetables and special sauce
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#800000]">45 MAD</span>
                    <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                      <i className="fas fa-plus-circle text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                  <div className="menu-tag">Chef's Choice</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-2">
                    Wood-Fired Pizza
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thin crust pizza with premium toppings and melted cheese
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#800000]">65 MAD</span>
                    <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                      <i className="fas fa-plus-circle text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                  <div className="menu-tag">Traditional</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-2">
                    Moroccan Tagine
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Slow-cooked traditional dish with tender meat and vegetables
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#800000]">75 MAD</span>
                    <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                      <i className="fas fa-plus-circle text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=500&q=80')] bg-cover bg-center relative">
                  <div className="menu-tag">Refreshing</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#800000] mb-2">
                    Fresh Juices
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Natural fruit juices made from seasonal fresh fruits
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#800000]">20 MAD</span>
                    <button className="text-[#d4af37] hover:text-[#800000] transition duration-300">
                      <i className="fas fa-plus-circle text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/menu" className="btn-primary text-lg py-4 px-8">
                View Full Menu <i className="fas fa-arrow-right ml-2" />
              </a>
            </div>
          </div>
        </section>
        {/* Ratings & Comments Section */}
        <section
          id="rating-comments"
          className="section-padding rating-comments-section"
        >
          <div className="container mx-auto px-5">
            <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
              Customer Ratings &amp; Comments
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              See what our customers are saying about their experience at Snack Anass
            </p>
            <div className="max-w-6xl mx-auto">
              {/* Overall Rating Box */}
              <div className="rating-box">
                <div className="overall-rating">4.8</div>
                <div className="rating-stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <div className="rating-count">
                  Based on <span id="total-comments">247</span> reviews
                </div>
                <div className="rating-bars">
                  <div className="rating-bar">
                    <div className="rating-label">5 Stars</div>
                    <div className="rating-progress">
                      <div
                        className="rating-progress-fill"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <div className="rating-percentage">85%</div>
                  </div>
                  <div className="rating-bar">
                    <div className="rating-label">4 Stars</div>
                    <div className="rating-progress">
                      <div
                        className="rating-progress-fill"
                        style={{ width: "12%" }}
                      />
                    </div>
                    <div className="rating-percentage">12%</div>
                  </div>
                  <div className="rating-bar">
                    <div className="rating-label">3 Stars</div>
                    <div className="rating-progress">
                      <div className="rating-progress-fill" style={{ width: "2%" }} />
                    </div>
                    <div className="rating-percentage">2%</div>
                  </div>
                  <div className="rating-bar">
                    <div className="rating-label">2 Stars</div>
                    <div className="rating-progress">
                      <div className="rating-progress-fill" style={{ width: "1%" }} />
                    </div>
                    <div className="rating-percentage">1%</div>
                  </div>
                  <div className="rating-bar">
                    <div className="rating-label">1 Star</div>
                    <div className="rating-progress">
                      <div className="rating-progress-fill" style={{ width: "0%" }} />
                    </div>
                    <div className="rating-percentage">0%</div>
                  </div>
                </div>
              </div>
              {/* Customer Comments */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Comments List */}
                <div>
                  <h3 className="text-2xl font-bold text-[#800000] mb-6">
                    Recent Comments
                  </h3>
                  <div className="comments-container" id="comments-container">
                    {/* Comments will be dynamically added here */}
                    <div className="comment-item">
                      <div className="comment-header">
                        <div className="comment-user">
                          <div className="user-avatar">M</div>
                          <div>
                            <h4>Mohammed</h4>
                            <div className="comment-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                        <div className="comment-date">2 days ago</div>
                      </div>
                      <div className="comment-text">
                        "The best burger I've ever had! The quality of ingredients is
                        exceptional and the service is outstanding. Highly
                        recommended!"
                      </div>
                      <div className="comment-actions">
                        <div className="comment-action">
                          <i className="far fa-thumbs-up" />
                          <span>12</span>
                        </div>
                        <div className="comment-action">
                          <i className="far fa-comment" />
                          <span>3</span>
                        </div>
                        <div className="comment-action reply-btn">
                          <i className="far fa-reply" />
                          <span>Reply</span>
                        </div>
                      </div>
                      {/* Replies */}
                      <div className="replies-container">
                        <div className="reply-item">
                          <div className="reply-header">
                            <div className="reply-user">
                              <div className="reply-avatar">S</div>
                              <div>
                                <h5>Snack Anass</h5>
                                <div className="reply-date">1 day ago</div>
                              </div>
                            </div>
                          </div>
                          <div className="reply-text">
                            Thank you Mohammed for your wonderful feedback! We're
                            thrilled you enjoyed our burgers. We look forward to
                            serving you again soon!
                          </div>
                          <div className="reply-actions">
                            <div className="reply-action">
                              <i className="far fa-thumbs-up" />
                              <span>5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Reply Form */}
                      <div className="reply-form">
                        <textarea
                          className="form-input form-textarea"
                          placeholder="Write your reply..."
                          rows={3}
                          defaultValue={""}
                        />
                        <div className="flex justify-end mt-2 gap-2">
                          <button className="cancel-reply px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300">
                            Cancel
                          </button>
                          <button className="submit-reply px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#a00000] transition duration-300">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div className="comment-header">
                        <div className="comment-user">
                          <div className="user-avatar">F</div>
                          <div>
                            <h4>Fatima</h4>
                            <div className="comment-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                            </div>
                          </div>
                        </div>
                        <div className="comment-date">1 week ago</div>
                      </div>
                      <div className="comment-text">
                        "The pizza is absolutely delicious and the atmosphere is so
                        welcoming. The staff is friendly and the prices are very
                        reasonable."
                      </div>
                      <div className="comment-actions">
                        <div className="comment-action">
                          <i className="far fa-thumbs-up" />
                          <span>8</span>
                        </div>
                        <div className="comment-action">
                          <i className="far fa-comment" />
                          <span>1</span>
                        </div>
                        <div className="comment-action reply-btn">
                          <i className="far fa-reply" />
                          <span>Reply</span>
                        </div>
                      </div>
                      {/* Replies */}
                      <div className="replies-container">
                        <div className="reply-item">
                          <div className="reply-header">
                            <div className="reply-user">
                              <div className="reply-avatar">S</div>
                              <div>
                                <h5>Snack Anass</h5>
                                <div className="reply-date">6 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div className="reply-text">
                            Thank you Fatima! We're so glad you enjoyed our pizza and
                            atmosphere. We strive to provide the best experience for
                            all our customers.
                          </div>
                          <div className="reply-actions">
                            <div className="reply-action">
                              <i className="far fa-thumbs-up" />
                              <span>3</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Reply Form */}
                      <div className="reply-form">
                        <textarea
                          className="form-input form-textarea"
                          placeholder="Write your reply..."
                          rows={3}
                          defaultValue={""}
                        />
                        <div className="flex justify-end mt-2 gap-2">
                          <button className="cancel-reply px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300">
                            Cancel
                          </button>
                          <button className="submit-reply px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#a00000] transition duration-300">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div className="comment-header">
                        <div className="comment-user">
                          <div className="user-avatar">A</div>
                          <div>
                            <h4>Ahmed</h4>
                            <div className="comment-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                        <div className="comment-date">3 days ago</div>
                      </div>
                      <div className="comment-text">
                        "Excellent service and amazing food quality. The traditional
                        dishes are authentic and full of flavor. Will definitely be
                        returning!"
                      </div>
                      <div className="comment-actions">
                        <div className="comment-action">
                          <i className="far fa-thumbs-up" />
                          <span>15</span>
                        </div>
                        <div className="comment-action">
                          <i className="far fa-comment" />
                          <span>2</span>
                        </div>
                        <div className="comment-action reply-btn">
                          <i className="far fa-reply" />
                          <span>Reply</span>
                        </div>
                      </div>
                      {/* Replies */}
                      <div className="replies-container">
                        <div className="reply-item">
                          <div className="reply-header">
                            <div className="reply-user">
                              <div className="reply-avatar">S</div>
                              <div>
                                <h5>Snack Anass</h5>
                                <div className="reply-date">2 days ago</div>
                              </div>
                            </div>
                          </div>
                          <div className="reply-text">
                            Thank you Ahmed! We're delighted to hear you enjoyed our
                            traditional dishes. We can't wait to welcome you back!
                          </div>
                          <div className="reply-actions">
                            <div className="reply-action">
                              <i className="far fa-thumbs-up" />
                              <span>7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Reply Form */}
                      <div className="reply-form">
                        <textarea
                          className="form-input form-textarea"
                          placeholder="Write your reply..."
                          rows={3}
                          defaultValue={""}
                        />
                        <div className="flex justify-end mt-2 gap-2">
                          <button className="cancel-reply px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300">
                            Cancel
                          </button>
                          <button className="submit-reply px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#a00000] transition duration-300">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add Comment Form */}
                <div>
                  <h3 className="text-2xl font-bold text-[#800000] mb-6">
                    Share Your Experience
                  </h3>
                  <div className="comment-form">
                    <form id="comment-form">
                      <div className="form-group text-center">
                        <div className="star-rating" id="star-rating">
                          <i className="fas fa-star" data-rating={1} />
                          <i className="fas fa-star" data-rating={2} />
                          <i className="fas fa-star" data-rating={3} />
                          <i className="fas fa-star" data-rating={4} />
                          <i className="fas fa-star" data-rating={5} />
                        </div>
                        <input
                          type="hidden"
                          id="user-rating"
                          name="rating"
                          defaultValue={5}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Your Name"
                          id="comment-name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-input form-textarea"
                          placeholder="Share your experience..."
                          id="comment-text"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-primary w-full py-4 text-lg"
                      >
                        Submit Review <i className="fas fa-paper-plane ml-2" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section - Centered */}
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
        {/* Booking Success Modal */}
        <div id="booking-modal" className="modal">
          <div className="modal-content">
            <div className="modal-icon">
              <i className="fas fa-check-circle" />
            </div>
            <h2>Booking Confirmed!</h2>
            <p>
              Your table has been successfully reserved. We look forward to serving
              you!
            </p>
            <div className="booking-details">
              <div className="booking-detail">
                <span>Name:</span>
                <span id="modal-name">-</span>
              </div>
              <div className="booking-detail">
                <span>Date &amp; Time:</span>
                <span id="modal-datetime">-</span>
              </div>
              <div className="booking-detail">
                <span>Guests:</span>
                <span id="modal-guests">-</span>
              </div>
              <div className="booking-detail">
                <span>Reservation ID:</span>
                <span id="modal-id">-</span>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="modal-btn secondary" id="modal-close">
                Close
              </button>
              <button className="modal-btn primary" id="modal-print">
                <i className="fas fa-print mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>
      </>

    </div>
  );
}