import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';
import AllReviewsPage from './AllReviewsPage';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]); 
  const [username, setUsername] = useState(''); 
  const [comment, setComment] = useState(''); 
  const [rating, setRating] = useState(0); 

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  
  const defaultContactFormData = {
    username: "",
  };
  
  const [data, setData] = useState(defaultContactFormData)

  const { user } = useAuth();

  // Update form data when user is available
  useEffect(() => {
    if (user) {
      setData({
        username: user.username,
      });
    }
  }, [user]); // This effect runs only when the user changes


  const handleReviewSubmit = async() => {
    if (rating === 0) {
      toast('Please give the Rating');
      return;
    }

    if (!username) {
      toast('Please Enter Your Name');
      return;
    }
    
    if (!comment ) {
      toast('Please Enter your Comments');
      return;
    }

    const newReview = {
      username,
      comment,
      rating,
      date: format(new Date(), 'dd MMM yyyy'),
      time: format(new Date(), 'hh:mm a'),
    };

    setReviews([newReview, ...reviews]);
    setUsername('');
    setComment('');
    setRating(0);
    
    console.log(newReview);
    

    try {
      const response = await fetch(`${BASE_URL}/form/review`, {
          
          method: "POST",
          headers: {
              "Content-Type": "application/json", // Indicating that JSON is being sent
          },
          body: JSON.stringify(newReview),
      });

      if (response.ok) {
          setData(defaultContactFormData); // Reset the form data after submission
          const responseData = await response.json(); // Parsing the response data
          console.log(responseData);

          toast("Review Post Successfully");

      }
  } catch (error) {

      toast("Review Not Posted");

      console.error("Error:", error);
  }
    
  };

  // Function to return emoji based on rating
  const getEmoji = () => {
    if (rating === 0) return ''; // Show nothing if no rating is selected
    if (rating > 3) return '😊'; // Happy face for 4 and 5 stars
    if (rating === 3) return '😐'; // Neutral face for 3 stars
    return '😞'; // Sad face for 1 and 2 stars
  };

  return (
    <div className="p-6 mt-10 bg-[#C6B198] rounded-3xl sm:rounded-lg shadow-lg w-full max-w-lg mx-auto flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Leave a Review</h2>

      {/* Rating Selection */}
      <div className='flex'>
        <div className={`flex items-center mb-4 ${rating ? "mr-10" : "mr-0"}`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="text-3xl sm:text-4xl lg:ml-2 ml-1"
            >
              <svg
                // height={`${star <= rating ? "23px" : "20px" }`}
                width={`${star <= rating ? "23px" : "20px"}`}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.94 47.94"
              >
                <path
                  fill={`${star <= rating ? "#796855" : "#475569"}`}
                  d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 
            c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 
            c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 
            c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 
            c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 
            C22.602,0.567,25.338,0.567,26.285,2.486z"
                ></path>
              </svg>
            </button>
          ))}
        </div>


        {/* Star Count and Emoji */}
        <div className="flex items-center mb-4">
          {rating > 0 && (
            <span className="ml-2 text-lg font-semibold text-gray-800">
              {rating} Star{rating > 1 && 's'}
            </span>
          )}
          <span className="ml-2 text-3xl">{getEmoji()}</span>
        </div>
      </div>

      {/* Input Fields */}
      <form>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setUsername(e.target.value)}
        // value={data.username}
        className="w-[60%] mx-[20%] text-center p-2 text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-BGColorYellow transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        autoCapitalize="off"
        // required
      />

      <textarea
        placeholder="Write your review here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 mb-4 text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-BGColorYellow transition duration-300 ease-in-out transform hover:scale-105 h-24"
      />
      </form>

      <button
        onClick={handleReviewSubmit}
        className="w-full bg-[#796855] text-gray-300 font-semibold py-2 rounded"
      >
        Submit Review
      </button>

      <div className="reviews-page">
      <AllReviewsPage/>
    </div>

    </div>
  );
};

export default ReviewComponent;
