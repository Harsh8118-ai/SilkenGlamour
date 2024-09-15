import React, { useState, useEffect } from 'react';
import { GoldenColor, PriceColor, BGColor } from '../../../Style';


const CardWedding = () => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [IsSelect, setIsSelect] = useState(false);
  const [IsSelect2, setIsSelect2] = useState(false);
  const [IsSelect3, setIsSelect3] = useState(false);



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
    setIsSelect2(false);
    setIsSelect3(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSelect2 = ()=> {
    setIsSelect(false);
    setIsSelect2(true);
    setIsSelect3(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  const toggleSelect3 = ()=> {
    setIsSelect(false);
    setIsSelect2(false);
    setIsSelect3(ture);
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  return (
    <div className={`w-fit max-w-xl h-fit m-3 mx-auto ${isActive ? "my-0" : "my-60"}`}>
      <div className='mx-auto w-fit max-w-xl m-3 sticky top-6 flex flex-col justify-center items-center h-fit'>
      <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
      <div className='space-x-4 '>
        <button
          className={`px-4 py-2 ${IsSelect ? "bg-yellow-500" : "bg-gray-400"}  ${IsSelect ? "border-2" : "border-none"} border-yellow-700 text-white font-bold rounded`}
          onClick={() => {setType('Party'); toggleActive();
            toggleSelect1();
          }}
        >
          Party
        </button>
        <button
          className={`px-4 py-2 ${IsSelect2 ? "bg-yellow-500" : "bg-gray-400"}  ${IsSelect2 ? "border-2" : "border-none"} border-yellow-700 text-white font-bold rounded`}
          onClick={() => {setType('Engagement'); toggleActive();
            toggleSelect2();
          }} >
          Engagement
        </button>
        <button
          className={`px-4 py-2 ${IsSelect3 ? "bg-yellow-500" : "bg-gray-400"}  ${IsSelect3 ? "border-2" : "border-none"} border-yellow-700 text-white font-bold rounded`}
          onClick={() => {setType('Bridal'); toggleActive();
            toggleSelect3();
          }} >
          Bridal
        </button>
        </div>
      </div>

      {products.length > 0 && (
        <div className="w-fit max-w-xl h-fit m-3 sm:mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
        {products.map(product => (
      <div className={`shadow  border-gray-700 rounded-lg bg-gray-200`}>
      <a href={product.href}>
          <img className="p-8 rounded-t-lg" src={product.image} alt={product.image} />
      </a>
      <div className="px-5 pb-5">
          <a href={product.href}>
              <h5 className={`text-xl font-semibold tracking-tight  ${GoldenColor}`}>
              {product.name}
              </h5>
          </a>
          
          <div className="flex items-center justify-between">
              <span className={`text-2xl font-bold ${PriceColor}`}>₹{product.price}</span>
            <span className='text-red-500 m-2 mx-1 text-sm font-bold line-through'>₹{product.offerprice}</span><span> </span>

              <a
                  href={product.href}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                  Add to cart
              </a>
          </div>


          {product.features.map((feature, index) => (
          <div className=''>
          <div className='flex gap-2 w-full'>
            <img src="/Services/Tick.svg" alt="" />
            <span className='text-lg text-black' key={index}>{feature}</span>
          </div>
        </div>))}
      </div>
      </div>
        ))}
  </div>
        </div>
      )}
    </div>
  );
};

export default CardWedding;
