import React, { useContext, useState } from 'react';
import { CartContext, CartProvider } from './CartContext';
import Modal from './Modal'; // Import the modal component

const RightCart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateOrderMessage = () => {
    const cartDetails = cartItems.map(item => {
      const itemTotal = item.quantity * item.price;
      return `${item.name} -> ₹${item.price} x ${item.quantity} = ₹${itemTotal}`;
    }).join('\n');

    return `${cartDetails}\n\nTotal: ₹${totalPrice}`;
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
    <><CartProvider>
      <div className='hidden sm:w-fit lg:w-full sm:block sticky top-16 h-screen bg-gray-100 p-4 max-w-sm'>
        {/* Your existing UI and structure */}
        <div className="w-full max-w-sm p-6 h-screen bg-MainBGColorYellow shadow-xl rounded-lg">
          <h2 className="text-lg font-bold text-center mb-4">My Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="ml-4">
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-gray-500">₹{item.price} x {item.quantity}</p>
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
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="sticky bottom-0 bg-MainBGColorYellow p-4">
                <div className="border-t mt-4 pt-4">
                  <h3 className="text-lg font-bold text-center">Total: ₹{totalPrice}</h3>
                </div>
                <button
                  onClick={handleOrderNow}
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-full rounded ${cartItems.length === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={cartItems.length === 0} // Disable if cart is empty
                >
                  {cartItems.length === 0 ? 'Cart is Empty' : 'Order Now'}
                </button>
              </div>
            </div>
          )}
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
      </CartProvider>
    </>
  );
};

export default RightCart;
