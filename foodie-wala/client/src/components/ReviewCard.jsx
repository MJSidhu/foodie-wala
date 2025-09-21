import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { formatToIST } from '../lib/IstDateFormat';

function ReviewCard({ createdAt ,userId, rating, text, upvotes = 0, downvotes = 0, date }) {
    const [up, setUp] = useState(upvotes);
    const [down, setDown] = useState(downvotes);

    const handleUpvote = () => setUp(prev => prev + 1);
    const handleDownvote = () => setDown(prev => prev + 1);

    return (
        <div className="bg-white border rounded-lg shadow p-4 space-y-2 hover:shadow-md transition duration-200">
            {/* Username + Rating */}
            <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-800 text-sm sm:text-base">@{userId.username}</div>
                <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(rating)].map((_, idx) => (
                        <Star key={idx} size={16} fill="#facc15" stroke="#facc15" />
                    ))}
                </div>
            </div>

            {/* Review Text */}
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {text}
            </div>

            {/* Voting Buttons */}
            <div className="flex gap-4 items-center text-sm text-gray-600">
                <button
                    className="flex items-center gap-1 hover:text-green-600 transition"
                    onClick={handleUpvote}
                >
                    <ThumbsUp size={16} /> {up}
                </button>
                <button
                    className="flex items-center gap-1 hover:text-red-600 transition"
                    onClick={handleDownvote}
                >
                    <ThumbsDown size={16} /> {down}
                </button>
                {createdAt && <span className="ml-auto text-xs text-gray-400">{formatToIST(createdAt)}</span>}
            </div>
        </div>
    );
}

export default ReviewCard;
