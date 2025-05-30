import React, { useState, useEffect, useContext } from 'react';

import { CartContext, CartProvider } from '../../Cart/CartContext';
import LeftCard  from '../../Cart/LeftCard';
import RightCart from '../../Cart/RightCard'; 
 


const CardHairCare = () => {
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
                  className={`px-4 py-1.5 ${IsSelect ? "bg-BGColorYellow" : "bg-gray-400"} ${IsSelect ? "border-2" : "border-none"} border-black text-white rounded-full`}
                  onClick={() => {
                    setType('HairCare'); toggleActive();
                    toggleSelect1();
                  }}
                >
                  Hair Care
                </button>
                <button
                  className={`px-4 py-1.5 ${IsSelect2 ? "bg-BGColorYellow" : "bg-gray-400"} ${IsSelect2 ? "border-2" : "border-none"} border-black text-white rounded-full`}
                  onClick={() => {
                    setType('HairColour'); toggleActive(); 
                    toggleSelect2();
                  }}
                >
                  Hair Colour
                </button>
              </div>
            </div>

            {products.length > 0 && (
              <div className="w-full h-full mt-6 hidden sm:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 ">
                  {products.map((product) => (
                    <div key={product.id} className="shadow border-gray-700 rounded-lg bg-BGColorYellow sm:p-4 p-2">

                        <img className="rounded-lg h-fit w-fit object-cover" src={product.image} alt={product.image} onClick={() => addToCart(product)} />

                      <CartContext.Consumer>
                        {({ addToCart }) => (
                          <div className="relative">

                            
                            <div
                              onClick={() => addToCart(product)}
                              className="absolute bottom-1 right-1 bg-gray-300 inline-block p-1.5 rounded-3xl cursor-pointer" >

                              <svg viewBox="0 0 24 24" fill="none" height="35" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.9474 6.97355H16.4211V6.65609C16.5263 4.1164 14.5263 2 12 2C9.47368 2.10582 7.57895 4.1164 7.57895 6.65609V6.97355H3.05263C2.42105 6.97355 2 7.39683 2 8.03175V16.709C2 19.672 4.31579 22 7.26316 22H16.7368C19.6842 22 22 19.672 22 16.709V8.03175C22 7.50265 21.5789 6.97355 20.9474 6.97355ZM9.1579 6.65609C9.1579 5.06878 10.4211 3.69312 12 3.5873C13.5789 3.69312 14.8421 5.06878 14.8421 6.65609V6.97355H9.1579V6.65609ZM20.4211 16.8148C20.4211 18.8254 18.7368 20.5185 16.7368 20.5185H7.26316C5.26316 20.5185 3.57895 18.8254 3.57895 16.8148V8.56085H7.57895V10.6772C7.36842 10.8889 7.26316 11.2063 7.26316 11.418C7.26316 12.0529 7.78947 12.4762 8.31579 12.4762C8.84211 12.4762 9.36842 11.9471 9.36842 11.418C9.36842 11.1005 9.26316 10.8889 9.05263 10.6772V8.56085H14.7368V10.5714C14.5263 10.7831 14.4211 11.1005 14.4211 11.418C14.4211 12.0529 14.8421 12.582 15.4737 12.582C16.1053 12.582 16.6316 12.1587 16.6316 11.5238C16.6316 11.2063 16.5263 10.9947 16.3158 10.7831V8.66667H20.4211V16.8148Z" fill="#001325" fillOpacity="0.92"></path></g></svg>
                            </div>
                          </div>
                        )}
                      </CartContext.Consumer>

                      <div className="px-5 pb-5">
                        
                          <h5 className={`text-2xl tracking-tight text-center mb-1 font-bold text-MainBGColorYellow`}>
                            {product.name}
                          </h5>
                        
                        <div className="flex items-center justify-center gap-3">
                          <span className={`text-2xl font-bold text-black`}>₹{product.price}</span>
                          <span className="text-red-700 m-2 mx-1 mr-2 text-lg font-bold line-through" >₹{product.offerprice}</span>

                        </div>

                        <hr />
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex gap-2 w-fit mt-2 -mx-4 ">
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
                    <div key={product.id} className="shadow-xl shadow-BGColorYellow rounded-lg bg-BGColorYellow p-2">

                        <img className="rounded-lg h-36 w-40 object-cover" src={product.image} alt={product.image} onClick={() => addToCart(product)} />
                      <div className="relative">

                        {/* Mobile "Add to Cart" button */}
                        <div
                          onClick={() => addToCart(product)}
                          className="absolute bottom-1 right-1 bg-gray-300 inline-block p-1 rounded-3xl" >

                          <svg viewBox="0 0 24 24" fill="none" height="20" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.9474 6.97355H16.4211V6.65609C16.5263 4.1164 14.5263 2 12 2C9.47368 2.10582 7.57895 4.1164 7.57895 6.65609V6.97355H3.05263C2.42105 6.97355 2 7.39683 2 8.03175V16.709C2 19.672 4.31579 22 7.26316 22H16.7368C19.6842 22 22 19.672 22 16.709V8.03175C22 7.50265 21.5789 6.97355 20.9474 6.97355ZM9.1579 6.65609C9.1579 5.06878 10.4211 3.69312 12 3.5873C13.5789 3.69312 14.8421 5.06878 14.8421 6.65609V6.97355H9.1579V6.65609ZM20.4211 16.8148C20.4211 18.8254 18.7368 20.5185 16.7368 20.5185H7.26316C5.26316 20.5185 3.57895 18.8254 3.57895 16.8148V8.56085H7.57895V10.6772C7.36842 10.8889 7.26316 11.2063 7.26316 11.418C7.26316 12.0529 7.78947 12.4762 8.31579 12.4762C8.84211 12.4762 9.36842 11.9471 9.36842 11.418C9.36842 11.1005 9.26316 10.8889 9.05263 10.6772V8.56085H14.7368V10.5714C14.5263 10.7831 14.4211 11.1005 14.4211 11.418C14.4211 12.0529 14.8421 12.582 15.4737 12.582C16.1053 12.582 16.6316 12.1587 16.6316 11.5238C16.6316 11.2063 16.5263 10.9947 16.3158 10.7831V8.66667H20.4211V16.8148Z" fill="#001325" fillOpacity="0.92"></path></g></svg>
                        </div>
                      </div>

                      <div className="px-5">
                        
                          <h5 className={`tracking-tight text-center mb-1 font-bold text-MainBGColorYellow`}>
                            {product.name}
                          </h5>
                        
                        <div className="flex flex-col items-center justify-between gap-2">
                          <div className='flex gap-3'>
                            <div className='gap-3 flex justify-center items-center'>
                              <span className={`text-lg sm:text-2xl font-bold tracking-wider text-black `}>₹{product.price}</span>
                              <span className="text-red-700 sm:m-2 sm:mx-1 text-sm font-bold line-through tracking-wider">₹{product.offerprice}</span>
                            </div>

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

export default CardHairCare;
