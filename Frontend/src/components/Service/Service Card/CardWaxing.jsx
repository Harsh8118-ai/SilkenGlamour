import React, { useState, useEffect, useContext } from 'react';
import RightCard from '../Service Nav/RightCard';
import LeftCard from '../Service Nav/LeftCard';
import { CartContext, CartProvider } from '../Service Nav/CartContext'; 
import RightCart from '../Service Nav/RightCard';

const CardWaxing = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [IsSelect, setIsSelect] = useState(false);
  const [IsSelect2, setIsSelect2] = useState(false);
  
  // Track which card's details are shown
  const [expandedCard, setExpandedCard] = useState(null);

  // Import the CartContext to access cart functionalities
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (type) {
      fetch(`/Json Files/${type}.json`)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }
  }, [type]);

  const toggleActive = () => {
    setIsActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSelect1 = () => {
    setIsSelect(true);
    setIsSelect2(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSelect2 = () => {
    setIsSelect(false);
    setIsSelect2(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to toggle card details
  const toggleDetails = (productId) => {
    setExpandedCard(expandedCard === productId ? null : productId);
  };

  return (    
    <CartProvider>
      <div className="flex justify-between w-full h-full bg-MainBGColorYellow">

        {/* Left Sticky Container */}
        <LeftCard />

        {/* Middle Container (Products Container - 60% Width) */}
        <div className="sm:w-[60%] w-full mx-2 sm:mx-auto my-8">
          <div className={`w-fit max-w-xl h-fit m-3 mx-auto`}>
            <div className="w-full mx-auto sticky top-0.5 sm:top-8 flex flex-col justify-center items-center h-fit">
              <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
              <div className="space-x-4 text-center">
                <button
                  className={`px-4 py-2 ${IsSelect ? "bg-BGColorYellow" : "bg-gray-400"} ${IsSelect ? "border-2" : "border-none"} border-black text-white rounded`}
                  onClick={() => {
                    setType('WaxingNormal'); toggleActive();
                    toggleSelect1();
                  }}
                >
                  Normal Wax
                </button>
                <button
                  className={`px-4 py-2 ${IsSelect2 ? "bg-BGColorYellow" : "bg-gray-400"} ${IsSelect2 ? "border-2" : "border-none"} border-black text-white rounded`}
                  onClick={() => {
                    setType('WaxingRica'); toggleActive(); 
                    toggleSelect2();
                  }}
                >
                  Rica Wax
                </button>
              </div>
            </div>

            {products.length > 0 && (
              <div className="w-full h-full mt-6 hidden sm:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 ">
                  {products.map((product) => (
                    <div key={product.id} className="shadow border-gray-700 rounded-lg bg-BGColorYellow sm:p-4 p-2">
                      <a href={product.href}>
                        <img className="rounded-lg h-fit w-fit object-cover" src={product.image} alt={product.image} />
                      </a>
                      <div className="px-5 pb-5">
                        <a href={product.href}>
                          <h5 className={`text-2xl tracking-tight text-center mb-1 font-bold text-MainBGColorYellow`}>
                            {product.name}
                          </h5>
                        </a>
                        <div className="flex items-center justify-between">
                          <span className={`text-2xl font-bold text-black`}>₹{product.price}</span>
                          <span className="text-red-500 m-2 mx-1 text-sm font-bold line-through">₹{product.offerprice}</span>
                          <CartContext.Consumer>
                            {({ addToCart }) => (
                              <button
                                onClick={() => addToCart(product)}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 sm:px-5 py-2.5 text-center"
                              >
                                Add to cart
                              </button>
                            )}
                          </CartContext.Consumer>
                        </div>
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex gap-2 w-full mt-2">
                            <img src="/Services/Tick.svg" alt="tick" />
                            <span className="text-sm font-bold text-black">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ............. MOBILE VIEW CARD ............. */}

            {products.length > 0 && (
              <div className="w-full h-full mt-4 sm:hidden">
                <div className="grid grid-cols-2 gap-x-3 gap-y-6 ">
                  {products.map((product) => (
                    <div key={product.id} className="shadow-xl shadow-BGColorYellow rounded-lg bg-BGColorYellow sm:p-4 p-2">
                      <a href={product.href}>
                        <img className="rounded-lg h-36 w-40 object-cover" src={product.image} alt={product.image} />
                      </a>
                      <div className="px-5">
                        <a href={product.href}>
                          <h5 className={`text-lg tracking-tight text-center mb-1 font-bold text-MainBGColorYellow`}>
                            {product.name}
                          </h5>
                        </a>
                        <div className="flex flex-col items-center justify-between gap-2">
                          <div className='flex gap-3'>
                            <div className='flex flex-col text-center'>
                              <span className={`text-lg sm:text-2xl font-bold tracking-wider text-black `}>₹{product.price}</span>
                              <span className="text-red-500 sm:m-2 sm:mx-1 text-sm font-bold line-through tracking-wider">₹{product.offerprice}</span>
                            </div>
                            {/* Mobile "Add to Cart" button */}
                            <button
                              onClick={() => addToCart(product)}
                              className="sm:hidden block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs mx-auto p-1 text-center"
                            >
                              Add to Cart
                            </button>
                          </div>

                          <div className=''>
                            <button
                              onClick={() => toggleDetails(product.id)}
                              className="bg-MainBGColorYellow text-black text-xs rounded sm:hidden text-center px-1"
                            >
                              {expandedCard === product.id ? 'Hide Details' : 'Show Details'}
                            </button>
                          </div>
                        </div>

                        {/* Mobile View Button */}

                        {/* Features - Handle Mobile and Desktop with Conditional Classes */}
                        {product.features.map((feature, index) => (
                          <div key={index} className={`${expandedCard === product.id ? 'flex' : 'hidden'} sm:flex w-full mt-2`}>
                            <img src="/Services/Tick.svg" alt="tick" />
                            <span className="text-xs sm:text-sm font-bold text-black">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sticky Cart */}
        <RightCart/>
      </div>
    </CartProvider>
  );
};

export default CardWaxing;
