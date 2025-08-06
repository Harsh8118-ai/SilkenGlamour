import React, { useState, useEffect, useContext } from 'react';
import { CartContext, CartProvider } from '../../Cart/CartContext';
import LeftCard from '../../Cart/LeftCard';
import RightCart from '../../Cart/RightCard';
import { Star, Plus } from 'lucide-react';

const CardBleach = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('Bleach');
  const [isActive, setIsActive] = useState(true);
  const [IsSelect, setIsSelect] = useState(true);
  const [IsSelect2, setIsSelect2] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    toggleActive();
  }, []);

  useEffect(() => {
    if (type) {
      fetch(`/Json Files/${type}.json`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
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

  const toggleDetails = (productId) => {
    setExpandedCard(expandedCard === productId ? null : productId);
  };

  return (
    <CartProvider> 
      <div className="flex justify-between w-full h-full bg-MainBGColorYellow">
        <LeftCard />

        <div className="sm:w-[60%] w-full mx-2 sm:mx-auto my-8">
          <div className={`w-fit max-w-xl h-fit m-3 mx-auto`}>
            <div className="w-full mx-auto sticky top-0.5 sm:top-8 flex flex-col justify-center items-center h-fit">
              <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
              <div className="space-x-4 text-center">
                <button
                  className={`px-4 py-1.5 ${IsSelect ? 'bg-BGColorYellow' : 'bg-gray-400'} ${IsSelect ? 'border-2' : 'border-none'} border-black text-white rounded-full`}
                  onClick={() => {
                    setType('Bleach');
                    toggleActive();
                    toggleSelect1();
                  }}
                >
                  Bleach
                </button>
                <button
                  className={`px-4 py-1.5 ${IsSelect2 ? 'bg-BGColorYellow' : 'bg-gray-400'} ${IsSelect2 ? 'border-2' : 'border-none'} border-black text-white rounded-full`}
                  onClick={() => {
                    setType('Dtan');
                    toggleActive();
                    toggleSelect2();
                  }}
                >
                  D-Tan
                </button>
              </div>
            </div>

            {/* WEB VIEW */}
            {products.length > 0 && (
              <div className="w-full h-full mt-6 hidden sm:block">
                <div className="grid grid-cols-1 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="flex">
                        {/* Left Content */}
                        <div className="flex-1 p-5">
                          {/* Service Name */}
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h3>

                          {/* Rating */}
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm text-gray-600 ml-1">4.84 (507K reviews)</span>
                          </div>

                          {/* Pricing */}
                          <div className="mb-4">
                            <span className="text-sm text-gray-600">Starts at </span>
                            <span className="text-xl font-semibold text-gray-900">₹{product.price}</span>
                            {product.offerprice && (
                              <span className="text-sm text-gray-500 line-through ml-2">₹{product.offerprice}</span>
                            )}
                          </div>

                          {/* Features */}
                          <div className="mb-4 space-y-2">
                            {product.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* View Details */}
                          <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                            View details
                          </button>
                        </div>

                        {/* Right Image */}
                        <div className="w-40 h-40 relative bg-gradient-to-br from-orange-50 to-pink-50 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => addToCart(product)}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          {/* Discount Badge */}
                          {product.discount && (
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                              {product.discount} OFF
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="px-5 pb-4 flex items-center justify-between border-t border-gray-100 pt-4">
                        <span className="text-sm text-gray-500">2 options</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MOBILE VIEW */}
            {products.length > 0 && (
              <div className="w-full h-full mt-4 sm:hidden">
                <div className="grid grid-cols-1 gap-4">
                  {products.map((product) => {
                    const isExpanded = expandedCard === product.id;
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out"
                      >
                        <div className="flex">
                          {/* Left Content */}
                          <div className="flex-1 p-4">
                            {/* Service Name */}
                            <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
                              {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center mb-2">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              <span className="text-xs text-gray-600 ml-1">4.84 (507K)</span>
                            </div>

                            {/* Pricing */}
                            <div className="mb-3">
                              <span className="text-xs text-gray-600">Starts at </span>
                              <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
                              {product.offerprice && (
                                <span className="text-xs text-gray-500 line-through ml-1">₹{product.offerprice}</span>
                              )}
                            </div>

                            {/* Show/Hide Details Button */}
                            <button
                              onClick={() => toggleDetails(product.id)}
                              className="text-purple-600 text-xs font-medium hover:text-purple-700 transition-colors mb-2"
                            >
                              {isExpanded ? 'Hide Details' : 'View details'}
                            </button>

                            {/* Expandable Features */}
                            <div
                              className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                              {isExpanded && (
                                <div className="space-y-1 mb-3">
                                  {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                      <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span className="text-xs text-gray-700">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Right Image */}
                          <div className="w-24 h-24 relative bg-gradient-to-br from-orange-50 to-pink-50 flex-shrink-0 m-4 rounded-lg overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover cursor-pointer"
                              onClick={() => addToCart(product)}
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            {/* Discount Badge */}
                            {product.discount && (
                              <div className="absolute top-1 left-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                                {product.discount}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-100 pt-3">
                          <span className="text-xs text-gray-500">2 options</span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
          </div>
        </div>

        <RightCart />
      </div>
    </CartProvider>
  );
};

export default CardBleach;
