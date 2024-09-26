import React, { useState, useEffect } from 'react';
import { GoldenColor, PriceColor, BGColor, LogoColor } from '../../../Style';
import { Link } from 'react-router-dom';
import LeftCard from '../Service Nav/LeftCard';
import RightCard from '../Service Nav/RightCard';


const CardThreading = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [IsSelect, setIsSelect] = useState(false);
  const [IsSelect2, setIsSelect2] = useState(false);


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

  const toggleSelect1 = ()=> {
    setIsSelect(true);
    setIsSelect2(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSelect2 = ()=> {
    setIsSelect(false);
    setIsSelect2(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  return (
  <>
  <div className="flex justify-between w-full h-full">
        
        {/* Left Sticky Container */}
        <LeftCard />

        {/* Middle Container (Products Container - 45% Width) */}
        <div className="w-[80%] sm:w-[45%] mx-auto my-8">
          <div className={`w-fit max-w-xl h-fit m-3 mx-auto`}>
            <div className="w-full mx-auto sticky top-6 flex flex-col justify-center items-center h-fit">
              <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
              <div className="space-x-4 text-center">
                <button
                  className={`px-4 py-2 ${IsSelect ? "bg-yellow-500" : "bg-gray-400"} ${IsSelect ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
                  onClick={() => {
                    setType('FaceWaxing');
                    toggleActive();
                    toggleSelect1();
                  }}
                >
                  Face Waxing
                </button>
                <button
                  className={`px-4 py-2 ${IsSelect2 ? "bg-yellow-500" : "bg-gray-400"} ${IsSelect2 ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
                  onClick={() => {
                    setType('Threading');
                    toggleActive();
                    toggleSelect2();
                  }}
                >
                  Threading
                </button>
              </div>
              </div>

              {products.length > 0 && (
                <div className="w-full h-full mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 ">
                    {products.map((product) => (
                      <div key={product.id} className="shadow border-gray-700 rounded-lg bg-gray-200 sm:p-4 p-2">
                        <a href={product.href}>
                          <img className="rounded-lg h-fit w-fit object-cover" src={product.image} alt={product.image} />
                        </a>
                        <div className="px-5 pb-5">
                          <a href={product.href}>
                            <h5 className={`text-xl tracking-tight text-center mb-3 font-bold ${GoldenColor}`}>
                              {product.name}
                            </h5>
                          </a>
                          <div className="flex items-center justify-between">
                            <span className={`text-2xl font-bold ${PriceColor}`}>₹{product.price}</span>
                            <span className="text-red-500 m-2 mx-1 text-sm font-bold line-through">₹{product.offerprice}</span>
                            <a
                              href={product.href}
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 sm:px-5 py-2.5 text-center"
                            >
                              Add to cart
                            </a>
                          </div>
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex gap-2 w-full mt-2">
                              <img src="/Services/Tick.svg" alt="tick" />
                              <span className="text-xs sm:text-sm text-black">{feature}</span>
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
        


          {/* Right Sticky Container */}
          <RightCard />

      </div>
  </>
  );
};

export default CardThreading;
