"use client";

import { useState } from "react";

export default function Comments() {
    // Component State
    const [rating, setRating] = useState(5);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    // Initial Reviews List
    const [reviews, setReviews] = useState([
        { user: "Mohammed", text: "The best burger and tagine I've ever had in town!", rating: 5, date: "2 days ago" },
        { user: "Fatima", text: "The wood-fired pizza and avocado smoothie are absolutely delicious.", rating: 4.5, date: "1 week ago" }
    ]);

    // Submit New Review
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const newComment = {
            name: name,
            content: comment,
            rating: rating
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                alert("Thank you! Review submitted successfully. 🎉");
                setReviews([{ user: name, text: comment, rating: rating, date: "Just now" }, ...reviews]);
                setName("");
                setComment("");
                setRating(5);
            } else {
                alert("Could not submit review. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Connection error! Please check if backend server is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="rating-comments" className="section-padding rating-comments-section bg-[#fffaf0]">
            <div className="container mx-auto px-5">
                <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
                    Customer Ratings & Reviews
                </h2>
                <p className="text-gray-600 text-center mt-3 max-w-xl mx-auto">
                    Read genuine testimonials from our guests or share your dining experience.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-10">
                    {/* Reviews List */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#800000] mb-6">Recent Customer Reviews</h3>
                        <div className="comments-container h-96 overflow-y-auto pr-2 space-y-4">
                            {reviews.map((rev, index) => (
                                <div key={index} className="comment-item bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="comment-header flex justify-between items-center mb-3">
                                        <div className="comment-user flex items-center gap-3">
                                            <div className="user-avatar bg-amber-100 text-[#800000] w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                                {rev.user.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-stone-900">{rev.user}</h4>
                                                <div className="comment-rating text-amber-400 text-xs flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fas fa-star ${i < Math.floor(rev.rating) ? "" : "text-gray-300"}`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-date text-gray-400 text-xs">{rev.date}</div>
                                    </div>
                                    <div className="comment-text text-gray-700 text-sm leading-relaxed">{rev.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-[#800000] mb-2">Share Your Experience</h3>
                        <p className="text-gray-500 text-sm mb-6">Your feedback helps us continuously improve our cuisine and service.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                                <div className="flex gap-2 text-2xl text-amber-400 cursor-pointer">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <i
                                            key={star}
                                            className={`fas fa-star transition hover:scale-110 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
                                            onClick={() => setRating(star)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#800000]"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Review</label>
                                <textarea
                                    required
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={4}
                                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#800000]"
                                    placeholder="Tell us what you liked about your meal..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#800000] hover:bg-[#600000] text-white py-3.5 rounded-xl font-bold transition shadow-md"
                            >
                                {loading ? "Submitting..." : "Submit Review"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
