import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuth } from '../../Store/auth';
import { FaUser } from "react-icons/fa";

const ReviewStats = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { user } = useAuth();
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${BASE_URL}/form/review`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const categorizeReviews = () => {
    return {
      top: reviews.filter((review) => review.rating >= 4),
      normal: reviews.filter((review) => review.rating == 3),
      bad: reviews.filter((review) => review.rating <= 2),
    };
  };

  const { top, normal, bad } = categorizeReviews();
  const totalReviews = reviews.length;
  const averageRating = (
    reviews.reduce((sum, r) => sum + Number(r.rating), 0) / totalReviews
  ).toFixed(1);

  // Function to render stars dynamically
  const renderStars = (avg) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill={i <= avg ? '#796855' : '#475569'} // Gold for filled, Gray for unfilled
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block mx-0.5"
        >
          <path d="M12 2l2.93 6.26L22 9.27l-5 4.87 1.18 7.01L12 17.77l-6.18 3.38L7 14.14 2 9.27l7.07-1.01L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  // Function to calculate rating distribution
  const getRatingDistribution = () => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
      counts[review.rating]++;
    });

    return counts;
  };

  const ratingDistribution = getRatingDistribution();

  return (
    <div className="p-6 mt-10 bg-MainBGColorYellow rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Ratings and Reviews</h2>
      <h1 className="text-xs text-center mb-4">
        Ratings and Reviews are verified and are from people who use our services
      </h1>

      <div className='flex justify-around items-center mb-5'>
        {/* Star Rating Display */}
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{isNaN(averageRating) ? 'N/A' : averageRating}</p>

          <div className="flex items-center mb-2">
            {renderStars(isNaN(averageRating) ? 0 : Math.round(averageRating))}
          </div>

          <div className="flex items-center gap-2">
            <FaUser size={15} color="gray" />
            <p className="text-sm font-bold">{totalReviews.toLocaleString()}</p>
          </div>
        </div>

        {/* Rating Distribution Bar */}
        <div className="w-full max-w-md mt-4">
          {[5, 4, 3, 2, 1].map((rating) => {
            const percentage = totalReviews > 0 ? (ratingDistribution[rating] / totalReviews) * 100 : 0;

            return (
              <div key={rating} className="flex items-center space-x-2 mb-1">
                <span className="w-6 text-right font-semibold">{rating}</span>
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-BGColorYellow rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {['top', 'normal', 'bad'].map((category) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
            className="w-full bg-gray-700 text-white py-2 rounded-md text-lg font-semibold"
          >
            {category.toUpperCase()} REVIEWS (
            {category === 'top' ? top.length : category === 'normal' ? normal.length : bad.length})
          </button>
          {expandedCategory === category && (
            <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
              {(category === 'top' ? top : category === 'normal' ? normal : bad).map((review) => (
                <div key={review.id} className="border-b pb-3 mb-3">
                  <p className="font-bold">{review.username}</p>
                  <p className="text-gray-600">
                    {format(new Date(review.date), 'dd MMM yyyy')} at {review.time}
                  </p>
                  <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
                  <p className="text-gray-800">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewStats;
