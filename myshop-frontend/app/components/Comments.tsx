"use client"; // ضروري باش يخدم useState

import { useState } from "react";

export default function Comments() {
    // 1. هنا كنعرفو المتغيرات (State) باش نخزنو المعلومات
    const [rating, setRating] = useState(5); // عدد النجوم (بدينا بـ 5)
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    // ليستة تجريبية (من بعد خاصك تجيبها من الداتابيز)
    const [reviews, setReviews] = useState([
        { user: "Mohammed", text: "The best burger I've ever had!", rating: 5, date: "2 days ago" },
        { user: "Fatima", text: "The pizza is absolutely delicious.", rating: 4.5, date: "1 week ago" }
    ]);

    // 2. الدالة اللي كاتصيفط الكومنتير (Submit)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // باش الصفحة ما ديرش Reload
        setLoading(true);

        const newComment = {
            name: name,
            content: comment,
            rating: rating
        };

        try {
            // هنا كنصيفطو للداتابيز (تأكد أن الرابط صحيح)
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                alert("Comment added successfully! 🎉");
                // كنزيدو الكومنتير الجديد لليستة باش يبان دابا
                setReviews([{ user: name, text: comment, rating: rating, date: "Just now" }, ...reviews]);
                // كنخويو الفورم
                setName("");
                setComment("");
                setRating(5);
            } else {
                alert("Failed to send comment. Check backend.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Connection error!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="rating-comments" className="section-padding rating-comments-section">
            <div className="container mx-auto px-5">
                <h2 className="section-title text-4xl font-bold text-center text-[#800000]">
                    Customer Ratings & Comments
                </h2>

                {/* ... (الجزء ديال الإحصائيات خليه كيف ما هو) ... */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-10">

                    {/* Comments List (ديناميكي دابا) */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#800000] mb-6">Recent Comments</h3>
                        <div className="comments-container h-96 overflow-y-auto pr-2">
                            {reviews.map((rev, index) => (
                                <div key={index} className="comment-item bg-white p-4 rounded-lg shadow mb-4 border border-gray-100">
                                    <div className="comment-header flex justify-between items-center mb-2">
                                        <div className="comment-user flex items-center gap-3">
                                            <div className="user-avatar bg-red-100 text-red-800 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                                {rev.user.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{rev.user}</h4>
                                                <div className="comment-rating text-yellow-400 text-sm">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fas fa-star ${i < Math.floor(rev.rating) ? "" : "text-gray-300"}`} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-date text-gray-400 text-xs">{rev.date}</div>
                                    </div>
                                    <div className="comment-text text-gray-600">{rev.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Part (هنا فين زدنا Logic) */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#800000] mb-6">Share Your Experience</h3>
                        <div className="comment-form bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <form onSubmit={handleSubmit}>
                                {/* Star Rating Interactive */}
                                <div className="form-group text-center mb-6">
                                    <label className="block text-gray-700 mb-2">How was your experience?</label>
                                    <div className="flex justify-center gap-2 text-2xl cursor-pointer">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <i
                                                key={star}
                                                className={`fas fa-star transition-colors duration-200 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                                                onClick={() => setRating(star)} // هنا كيتبدل الـ Rating
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <input
                                        type="text"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:outline-none"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} // هنا كيتسجل الاسم
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <textarea
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] focus:outline-none"
                                        placeholder="Share your experience..."
                                        rows={4}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)} // هنا كيتسجل الكومنتير
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-[#800000] text-white font-bold rounded-lg hover:bg-[#600000] transition duration-300 flex justify-center items-center gap-2"
                                >
                                    {loading ? "Sending..." : <>Submit Review <i className="fas fa-paper-plane" /></>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}