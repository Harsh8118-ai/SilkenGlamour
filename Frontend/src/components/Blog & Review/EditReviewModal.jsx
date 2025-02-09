import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const EditReviewModal = ({ reviewId, existingComment, existingRating, onClose, onSave }) => {
  const [modalComment, setModalComment] = useState(existingComment);
  const [modalRating, setModalRating] = useState(existingRating);

  const handleReviewUpdate = async () => {
    if (!modalComment) {
      toast.error('Please enter a comment');
      return;
    }

    if (modalRating === 0) {
      toast.error('Please provide a rating');
      return;
    }

    const updatedReview = {
      id: reviewId,
      comment: modalComment,
      rating: modalRating,
      date: format(new Date(), 'dd MMM yyyy'),
      time: format(new Date(), 'hh:mm a'),
    };

    onSave(updatedReview); // Pass the updated review back to parent

    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-MainBGColorYellow p-6 rounded-lg shadow-lg max-w-lg w-full relative mx-4 sm:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 hover:text-red-800 text-bold"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <h2 className="text-2xl text-BGColorYellow font-bold mb-6 text-center">Edit Your Review</h2>
        <textarea
          value={modalComment}
          onChange={(e) => setModalComment(e.target.value)}
          className="w-full p-2 mb-4 text-gray-300 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-BGColorYellow transition duration-300 ease-in-out transform hover:scale-105 h-24"
        />
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setModalRating(star)}
              className="text-3xl sm:text-4xl ml-1"
            >
              <svg
                width={`${star <= modalRating ? '30px' : '25px'}`}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.94 47.94"
              >
                <path
                  fill={`${star <= modalRating ? '#796855' : '#475569'}`}
                  d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                ></path>
              </svg>
            </button>
          ))}
        </div>
        <button
          onClick={handleReviewUpdate}
          className="w-full bg-[#796855] text-gray-300 font-semibold py-2 rounded"
        >
          Update Review
        </button>
      </div>
    </div>
  );
};

export default EditReviewModal;
