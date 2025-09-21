import React, { useState, useEffect } from 'react';
import ReviewInputBox from '../components/ReviewInputBox';
import ReviewCard from '../components/ReviewCard';
import axios from 'axios'
import { useUser } from "@clerk/clerk-react";
function ResReviews({ data }) {
  const [showInput, setShowInput] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/review/${data._id}`);
        setReviews(res.data.reviews);
        console.log(res.data.reviews);
        console.log(reviews)
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };
    fetchReviews();
  }, [data._id]);

  const handleNewReview = async (newReview) => {
    try {
      const res = await axios.post('http://localhost:5000/api/review', {
        clerkId: user.id, //clerk id 
        restaurantId: data._id,
        text: newReview.reviewText,
        rating: newReview.rating,
      });

      // Add new review on top
      setReviews([res.data.review, ...reviews]);
      setShowInput(false);
    } catch (err) {
      console.error("Error posting review:", err);
      alert(err.response?.data?.message || "Error posting review");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
      {/* Average Rating */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">⭐ 4.5 Average Rating</h2>
        <p className="text-gray-600 text-sm">Based on {reviews.length} reviews</p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowInput(prev => !prev)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          {showInput ? 'Cancel' : '✍️ Write a Review'}
        </button>
      </div>

      {/* Review Input Box */}
      {showInput && (
        <ReviewInputBox onSubmit={handleNewReview} />
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews
          .sort((a, b) => b.upvotes - a.upvotes) // Sort by thumbs-up
          .map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))
        }
      </div>
    </div>
  );
}

export default ResReviews;
