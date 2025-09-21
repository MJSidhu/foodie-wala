import React, { useState } from 'react';
import { Star } from 'lucide-react';

function ReviewInputBox({ onSubmit }) {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!reviewText || rating === 0) return;

        // Pass data to parent or backend
        console.log(reviewText+" "+ rating); //test
        onSubmit({ reviewText, rating });
        
        // Reset
        setReviewText('');
        setRating(0);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 border rounded-lg shadow space-y-3 mb-6"
        >
            <label className="block text-gray-800 font-semibold">
                Share your experience
            </label>

            <textarea
                className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows={4}
                placeholder="Write your review here... Don't forget to include @restaurant and #fooditem!"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
            />

            {/* Star Rating */}
            <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                    >
                        <Star
                            size={20}
                            fill={star <= rating ? '#facc15' : 'none'}
                            stroke="#facc15"
                        />
                    </button>
                ))}
            </div>

            <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
                Submit Review
            </button>
        </form>
    );
}

export default ReviewInputBox;
