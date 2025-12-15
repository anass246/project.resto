export default function BookATable() {
  return (
    <>
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
    </>
  );
}