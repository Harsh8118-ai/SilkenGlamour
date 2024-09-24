import React, { useState, useEffect } from 'react';
import { GoldenColor, PriceColor, BGColor, LogoColor } from '../../../Style';
import { Link } from 'react-router-dom';



const CardNailArt = () => {




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

  return (

    //     <div className={`w-fit max-w-xl h-fit m-3 mx-auto ${isActive ? "my-0" : "my-60"}`}>
    //       <div className='mx-auto w-fit max-w-xl m-3 sticky top-6 flex flex-col justify-center items-center h-fit'>
    //       <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
    //       <div className='space-x-4 '>
    //         <button
    //           className={`px-4 py-2 ${IsSelect ? "bg-yellow-500" : "bg-gray-400"}  ${IsSelect ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
    //           onClick={() => {setType('NailExtension'); toggleActive();
    //             toggleSelect1();
    //           }}
    //         >
    //           Nail Extension
    //         </button>
    //         <button
    //           className={`px-4 py-2 ${IsSelect2 ? "bg-yellow-500" : "bg-gray-400"}  ${IsSelect2 ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
    //           onClick={() => {setType('NailArtWork'); toggleActive();
    //             toggleSelect2();
    //           }} >
    //           Art Work
    //         </button>
    //         </div>
    //       </div>

    //       {products.length > 0 && (
    //       <div className="w-fit max-w-xl h-fit m-3 sm:mx-auto ">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3">
    //       {products.map(product => (
    //     <div className={`shadow  border-gray-700 rounded-lg mx-7 sm:mx-0 m-5 sm:m-0 bg-gray-200`}>
    //     <a href={product.href}>
    //         <img className="p-8 rounded-t-lg object-cover" src={product.image} alt={product.image} />
    //     </a>
    //     <div className="px-5 pb-5">
    //         <a href={product.href}>
    //             <h5 className={`text-xl tracking-tight text-center mb-3 -mt-5 font-bold ${GoldenColor}`}>
    //             {product.name}
    //             </h5>
    //         </a>

    //         <div className="flex items-center justify-between">
    //             <span className={`text-2xl font-bold ${PriceColor}`}>₹{product.price}</span>
    //           <span className='text-red-500 m-2 mx-1 text-sm font-bold line-through'>₹{product.offerprice}</span><span> </span>

    //             <a
    //                 href={product.href}
    //                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             >
    //                 Add to cart
    //             </a>
    //         </div>


    //         {product.features.map((feature, index) => (
    //         <div className=''>
    //         <div className='flex gap-2 w-full'>
    //           <img src="/Services/Tick.svg" alt="" />
    //           <span className='text-lg text-black' key={index}>{feature}</span>
    //         </div>
    //       </div>))}
    //     </div>
    //     </div>
    //       ))}
    // </div>
    //       </div>
    //     )}
    //     </div>      
    <>

<div className="flex justify-between w-full h-full">
  {/* Left Sticky Container */}
  <div className="hidden sm:block w-1/4 sticky top-20 h-screen bg-gray-100 p-4">
  <div className='bg-white'>
            <h1 className={`text-center text-3xl font-bold p-3 ${LogoColor}`}>Services</h1>
            <div className='flex justify-center items-center p-5 '>
                <div className="flex flex-col gap-2">
                    
                    <Link to="nailart">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125 '>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Nail Art</p>
                    </div></Link>
                    
                    <Link to="haircare">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Hair Care</p>
                    </div></Link>

                    <Link to="mani-pedi">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Mani-Pedi</p>
                    </div></Link>

                    <Link to="waxing">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Waxing</p>
                    </div></Link>

                    <Link to="body-polishing">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Polish & Massage</p>
                    </div></Link>

                    <Link to="threading">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Threading & Wax</p>
                     </div></Link>

                    <Link to="bleach-dtan">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Bleach & D-Tan</p>
                    </div></Link>

                    <Link to="weddingpakage">
                    <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Wedding Package</p>
                    </div></Link>

                    

                    <Link to="facial-cleanup">
                    <div className='shadow-lg rounded-xl p-2 sm:hidden text-center
                    lg:flex lg:justify-center lg:items-center lg:flex-col bg-gray-900 hover:scale-125'>
                    
                    <p className={`font-bold pt-1.5 ${LogoColor}`}>Facial & Cleanup</p>
                    </div></Link>
                    <div className='m-4'></div>

        </div >
        </div >
        </div>
    {/* Add content for the left container */}
  </div>

  {/* Middle Container (Products Container - 45% Width) */}
  <div className="w-[80%] sm:w-[45%] mx-auto my-8">
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Select your Item :</h1>
      <div className="space-x-4 text-center">
        <button
          className={`px-4 py-2 ${IsSelect ? "bg-yellow-500" : "bg-gray-400"} ${IsSelect ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
          onClick={() => {
            setType('NailExtension');
            toggleActive();
            toggleSelect1();
          }}
        >
          Nail Extension
        </button>
        <button
          className={`px-4 py-2 ${IsSelect2 ? "bg-yellow-500" : "bg-gray-400"} ${IsSelect2 ? "border-2" : "border-none"} border-yellow-700 text-white rounded`}
          onClick={() => {
            setType('NailArtWork');
            toggleActive();
            toggleSelect2();
          }}
        >
          Art Work
        </button>
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
  <div className="hidden sm:block w-1/4 sticky top-0 h-screen bg-gray-100 p-4">
    <h2 className="text-center text-xl font-bold mb-4">Right Container</h2>
    {/* Add content for the right container */}
  </div>


  </div>

    </>
  );
};

export default CardNailArt;
