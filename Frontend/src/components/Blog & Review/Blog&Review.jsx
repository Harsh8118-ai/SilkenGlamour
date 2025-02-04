import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const BlogAndReview = () => {
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
  const averageRating = (reviews.reduce((sum, r) => sum + Number(r.rating), 0) / totalReviews).toFixed(1);

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Blog & Reviews</h2>
      <p className="text-center mb-2">Total Reviews: {totalReviews}</p>
      <p className="text-center mb-4">Average Rating: {isNaN(averageRating) ? 'N/A' : averageRating} ⭐</p>

      {['top', 'normal', 'bad'].map((category) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
            className="w-full bg-gray-700 text-white py-2 rounded-md text-lg font-semibold"
          >
            {category.toUpperCase()} REVIEWS ({category === 'top' ? top.length : category === 'normal' ? normal.length : bad.length})
          </button>
          {expandedCategory === category && (
            <div className="bg-white p-4 mt-2 rounded-lg shadow-md">
              {(category === 'top' ? top : category === 'normal' ? normal : bad).map((review) => (
                <div key={review.id} className="border-b pb-3 mb-3">
                  <p className="font-bold">{review.username}</p>
                  <p className="text-gray-600">{format(new Date(review.date), 'dd MMM yyyy')} at {review.time}</p>
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

export default BlogAndReview;
