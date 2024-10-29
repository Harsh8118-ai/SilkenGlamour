import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../Store/auth';

const AllReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const { token } = useAuth(); // Assuming `token` is managed in auth context.

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${BASE_URL}/form/review`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Sending token with request
          },
        });
        console.log("response",response);


        if (response.ok) {
          const data = await response.json();
          setReviews(data);
          console.log(data);
          
        } else {
          toast('Failed to fetch reviews');
        console.log("Failed to fetch reviews");
        

        }
      } catch (error) {
        toast('Error fetching reviews');
        console.error(error);
      }
    };

    fetchReviews();
  }, [BASE_URL, token]);

  return (
    <div className="p-6 mt-10 bg-[#C6B198] rounded-3xl sm:rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">All Reviews</h2>

      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="p-4 bg-white rounded-lg shadow mt-4 w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
              <div className="text-sm text-gray-500">
                {review.date} at {review.time}
              </div>
            </div>
            <div className="flex items-center text-[#796855] text-xl mt-2">
              {Array(Number(review.rating))
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-700">No reviews yet.</p>
      )}
    </div>
  );
};

export default AllReviewsComponent;
