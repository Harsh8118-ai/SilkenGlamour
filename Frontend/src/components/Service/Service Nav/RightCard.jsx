import React, { useContext } from 'react';
import { CartContext } from '../Service Nav/CartContext'; 


const RightCart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext); // Importing context values

  return (
    <>
    <div className='sticky top-16 h-screen bg-gray-100 p-4 w-full max-w-sm'>
    <div className="w-full max-w-sm p-6 h-screen bg-MainBGColorYellow  shadow-xl rounded-lg">
      <h2 className="text-lg font-bold text-center mb-4">Your Cart</h2>

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

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-bold text-center">Total: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
    </div></>
  );
};


export default RightCart;
