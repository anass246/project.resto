"use client";
import { useState } from 'react';

export default function BookATable() {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    special_requests: ''
  });

  // 2. State for UI (Loading, Messages, Status)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [bookingStatus, setBookingStatus] = useState('Pending');

  // 3. Time Slots Data (توليد الأوقات ديناميكيا)
  const timeSlots = [
    "12:00", "13:00", "14:00", "15:00", "16:00", 
    "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  // 4. Handle Input Change
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    // كانحيدو "booking-" من id باش نلقاو السمية ف state
    const fieldName = id.replace('booking-', '').replace('requests', 'special_requests');
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  // 5. Handle Time Selection
  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time: time }));
  };

  // 6. Handle Submit (Sending to Laravel)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Success
        setMessage({ type: 'success', text: '🎉 Table reserved successfully!' });
        setBookingStatus('Confirmed');
        // Optional: Reset form
        // setFormData({ name: '', phone: '', email: '', guests: '', date: '', time: '', special_requests: '' });
      } else {
        // ❌ Error
        setMessage({ type: 'error', text: '❌ Failed to book. Please check fields.' });
        console.log(data); // دير log عادية باش ماتحبسش ليك ليكران
      }
    } catch (error) {
      setMessage({ type: 'error', text: '❌ Server connection error' });
    } finally {
      setLoading(false);
    }
  };

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
                  
                  {/* Show Message if exists */}
                  {message.text && (
                    <div className={`p-4 mb-4 rounded text-center font-bold ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {message.text}
                    </div>
                  )}

                  <form id="booking-form" onSubmit={handleSubmit}>
                    <div className="booking-form">
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Enter your full name"
                          id="booking-name"
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.phone}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Number of Guests</label>
                        <select
                          className="form-select"
                          id="booking-guests"
                          value={formData.guests}
                          onChange={handleChange}
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
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      {/* Dynamic Time Slots */}
                      <div className="form-group">
                        <label className="form-label">Time</label>
                        <div className="time-slots grid grid-cols-5 gap-2" id="time-slots">
                           {timeSlots.map((slot) => (
                             <button
                               key={slot}
                               type="button"
                               onClick={() => handleTimeSelect(slot)}
                               className={`p-2 rounded border text-sm transition-all ${
                                 formData.time === slot 
                                 ? 'bg-[#800000] text-white border-[#800000]' 
                                 : 'bg-white text-gray-700 hover:border-[#800000]'
                               }`}
                             >
                               {slot}
                             </button>
                           ))}
                        </div>
                        {/* Hidden input to store selected time for validation */}
                        <input 
                            type="hidden" 
                            id="booking-time" 
                            value={formData.time} 
                            required 
                        />
                        {!formData.time && <p className="text-xs text-red-400 mt-1">Please select a time</p>}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Special Requests</label>
                        <textarea
                          className="form-input form-textarea"
                          placeholder="Any special requests or dietary requirements?"
                          id="booking-requests"
                          rows={3}
                          value={formData.special_requests}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full py-4 text-lg disabled:opacity-70"
                        >
                          {loading ? (
                            <span>Processing...</span>
                          ) : (
                            <>
                              <i className="fas fa-calendar-check mr-2" />
                              Book Table Now
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Booking Summary (Linked to State) */}
              <div>
                <div className="booking-summary">
                  <h3 className="text-2xl font-bold text-[#800000] mb-6">
                    Reservation Details
                  </h3>
                  <div className="space-y-4">
                    <div className="summary-item">
                      <span>Name:</span>
                      <span id="summary-name" className="font-bold">{formData.name || '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Phone:</span>
                      <span id="summary-phone" className="font-bold">{formData.phone || '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Email:</span>
                      <span id="summary-email" className="font-bold break-all">{formData.email || '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Guests:</span>
                      <span id="summary-guests" className="font-bold">{formData.guests ? `${formData.guests} People` : '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Date:</span>
                      <span id="summary-date" className="font-bold">{formData.date || '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Time:</span>
                      <span id="summary-time" className="font-bold">{formData.time || '-'}</span>
                    </div>
                    <div className="summary-item">
                      <span>Status:</span>
                      <span className={`font-bold ${bookingStatus === 'Confirmed' ? 'text-green-600' : 'text-[#d4af37]'}`}>
                        {bookingStatus}
                      </span>
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