export default function Comments() {
    return (
        <>
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
        </>
    );
}