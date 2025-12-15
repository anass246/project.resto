export default function Booking() {
    return (
        <>
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
    );
}