import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useAuth } from '../../Store/auth';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const WebCart = ({ closeCart }) => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
  const { user, isLoggedIn } = useAuth(); // Access user data and login status from AuthContext
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Track cart open state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the cart is opened
    if (!isLoggedIn) {
      navigate('/profile'); // Redirect to login page if not logged in
    } else {
      setIsCartOpen(true); // Open the cart if logged in
    }
  }, [isLoggedIn, navigate]);

  const generateOrderMessage = () => {
    const cartDetails = cartItems.map(item => {
      const itemTotal = item.quantity * item.price;
      return `${item.name} -> ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;
    }).join('\n');

    // Include the user's address in the WhatsApp message
    const userAddress = `\nStreet: ${user.street} ${user.apartmentNumber ? '\nApartment: ' + user.apartmentNumber : ''}\nTown: ${user.town}\nPincode: ${user.pincode}`;
    
    return `${cartDetails}\n\n*Total: ₹${totalPrice}*\n\n*Address* :- ${userAddress}`;
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

  return (
    <>
      {isLoggedIn && isCartOpen && ( // Only display the cart if the user is logged in
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-70 bg-gray-900">
          <div className="bg-MainBGColorYellow p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-black">Your Cart</h2>
              <button onClick={closeCart} className="text-red-500 text-lg font-bold">
                Close
              </button>
            </div>

            {/* Cart items container with dynamic height and overflow control */}
            <div className="flex flex-col max-h-[80vh]">
              <div className="overflow-auto mb-4">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="ml-4">
                        <h3 className="text-sm font-bold text-black text-left">{item.name}</h3>
                        <p className="text-xs text-gray-700 text-left">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 text-xs font-bold text-white bg-gray-500 rounded">
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 text-xs font-bold text-white bg-gray-500 rounded">
                          +
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Fixed Order Now Button at the bottom of the modal */}
              <div className="">
                <div className="border-t pb-5">
                  <h3 className="text-lg font-bold text-center">Total: ₹{totalPrice}</h3>
                </div>
                <button
                  onClick={handleOrderNow}
                  className={`mt-auto font-bold py-2 px-4 w-full rounded ${
                    cartItems.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-800 text-white'
                  }`}
                  disabled={cartItems.length === 0}
                >
                  {cartItems.length === 0 ? 'Cart is Empty' : 'Order Now'}
                </button>
              </div>
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
        </div>
      )}
    </>
  );
};

export default WebCart;
