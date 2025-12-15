export default function Shop() {
    return (
        <section>
            <div id="cart-overlay" className="cart-overlay" />
            <div id="cart-sidebar" className="cart-sidebar">
                <div className="cart-header">
                    <h2 className="text-xl font-bold flex items-center">
                        <i className="fas fa-shopping-cart mr-2" />
                        سلة التسوق
                    </h2>
                    <button
                        id="close-cart"
                        className="text-white hover:text-yellow-200 text-xl transition duration-300"
                    >
                        <i className="fas fa-times" />
                    </button>
                </div>
                <div className="cart-content">
                    <div id="cart-items" className="cart-items">
                        <div className="empty-cart">
                            <i className="fas fa-shopping-cart" />
                            <p>سلة التسوق فارغة</p>
                            <p className="text-sm mt-2">أضف بعض المنتجات من القائمة</p>
                        </div>
                    </div>
                </div>
                <div className="cart-summary">
                    <div className="summary-row">
                        <span>المجموع الجزئي:</span>
                        <span id="subtotal">0.00 MAD</span>
                    </div>
                    <div className="summary-row">
                        <span>التوصيل:</span>
                        <span id="delivery">15.00 MAD</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>المجموع الكلي:</span>
                        <span id="total">15.00 MAD</span>
                    </div>
                    <button id="checkout-btn" className="checkout-btn">
                        <i className="fas fa-credit-card mr-2" />
                        إتمام الطلب
                    </button>
                </div>
            </div>


            <div id="cart-notification" className="cart-notification">
                <i className="fas fa-check-circle mr-2" />
                <span id="notification-text">Product added to cart!</span>
            </div>
        </section>
    );
}