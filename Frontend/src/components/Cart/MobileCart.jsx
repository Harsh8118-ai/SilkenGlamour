import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useAuth } from '../../Store/auth';
import Modal from './Modal'; // Import the modal component
import { useNavigate } from 'react-router-dom';

const MobileCart = ({ closeCart }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth(); // Access user data including address from AuthContext
  const { isLoggedIn } = useAuth();
  
  const visitingCharge = 100; // Fixed visiting charge of ₹100
  const totalPriceWithVisitingCharge = totalPrice + visitingCharge; // Include visiting charge

  const generateOrderMessage = () => {
    const cartDetails = cartItems.map(item => {
      const itemTotal = item.quantity * item.price;
      return `${item.name} -> ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;
    }).join('\n');

    // Include the user's address in the WhatsApp message
    const userAddress = `\nStreet: ${user.street} ${user.apartmentNumber ? '\nApartment: ' + user.apartmentNumber : ''}\nTown: ${user.town}\nPincode: ${user.pincode}`;
    
    return `${cartDetails}\n\nVisiting Charge: ₹${visitingCharge}\n\n*Total: ₹${totalPriceWithVisitingCharge}*\n\n*Address* :- ${userAddress}`;
  };

  const handleOrderNow = () => {
    setIsModalOpen(true);
  };

  const confirmOrder = () => {
    const message = generateOrderMessage();
    const whatsappLink = `https://api.whatsapp.com/send?phone=919266037001&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setIsModalOpen(false); // Close the modal after confirming
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to the login page if not logged in
      navigate('/contact/login'); // Replace '/login' with your desired path
       // Close the cart when navigating to login
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
    {isLoggedIn ? (
    <div className="fixed inset-0 z-50 bg-MainBGColorYellow p-4 w-full max-w-xs right-0 shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          onClick={closeCart}
          className="text-red-500 text-lg font-extrabold"
        >
          Close
        </button>
      </div>

      {/* Cart items container */}
      <div className="overflow-auto flex-grow">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-left">{item.name}</h3>
                  <p className="text-xs text-gray-500 text-left">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 text-xs font-bold text-white bg-gray-500 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 text-xs font-bold text-white bg-gray-500 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fixed Order Now Button */}
      <div className="mt-4">
        <p className="text-left text-gray-600">Visiting Charge: ₹{visitingCharge}</p>
        <p className="text-left font-bold">Total: ₹{totalPriceWithVisitingCharge}</p>
        <button
          onClick={handleOrderNow}
          className={`font-bold py-2 px-4 w-full rounded mb-12 ${cartItems.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
          disabled={cartItems.length === 0} // Disable if cart is empty
        >
          {cartItems.length === 0 ? 'Cart is Empty' : 'Order Now'}
        </button>
      </div>

      {/* Modal for Order Confirmation */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title="Confirm Your Order"
          message={generateOrderMessage()}
          onConfirm={confirmOrder}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
    ) : null }
    </>
  );
};

export default MobileCart;
