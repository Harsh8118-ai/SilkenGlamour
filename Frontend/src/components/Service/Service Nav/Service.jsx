// import React from 'react'
// import { Link } from 'react-router-dom'
// import { LogoColor } from '../../../Style'




// export default function Service() {
    
//     return (
//         <>
//             <div className='bg-MainBGColorYellow'>
//                 <h1 className={`text-center text-3xl font-bold p-3 text-gray-900`}>Best Professional Home Salon for Women</h1>
//                 <div className='flex justify-center items-center p-5 '>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-12 sm:gap-y-6 bg-LightBGColor sm:p-8 p-4 rounded-xl">

//                         <Link to="nailart">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900 '>
//                                 {/* <img src="/Services/Service Main/NailArt.JPG" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Nail Art.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />

//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Nail Art</p>
//                             </div></Link>

//                         <Link to="haircare">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/HairCare1.JPG" alt="Image 8" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Haircare.webp" alt="Image 8" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover " />

//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Hair Care</p>
//                             </div></Link>

//                         <Link to="mani-pedi">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/ManiPedi.JPG" alt="Image 5" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Pedicure.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Mani-Pedi</p>
//                             </div></Link>

//                         <Link to="waxing">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/Waxing.JPG" alt="Image 6" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Waxing.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Waxing</p>
//                             </div></Link>

//                         <Link to="body-polishing">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/PreBridalGrooming.JPG" alt="Image 2" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Massage.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Polish & Massage</p>
//                             </div></Link>

//                         <Link to="threading">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/Threading&Wax.jpg" alt="Image 3" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Threading.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Threading & Wax</p>
//                             </div></Link>

//                         <Link to="bleach-dtan">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/Bleach&Dtan.JPG" alt="Image 7" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
//                                 <img src="/Temp/Bleach.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Bleach & D-Tan</p>
//                             </div></Link>

//                         <Link to="weddingpakage">
//                             <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/WeddingPackage.JPG" alt="Image 1" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />\ */}
//                                 <img src="/Temp/Makeup.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Wedding Package</p>
//                             </div></Link>



//                         <Link to="facial-cleanup">
//                         <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
//                                 {/* <img src="/Services/Service Main/WeddingPackage.JPG" alt="Image 1" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />\ */}
//                                 <img src="/Temp/Facial.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


//                                 <p className={`font-bold pt-1.5 text-gray-900`}>Facial & Cleanup</p>
//                             </div></Link>
//                         <div className='m-4'></div>

//                     </div >
//                 </div >
//             </div >

//         </>
//     )
// }


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Service() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 5000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <>
      <div className='bg-MainBGColorYellow'>
        <h1 className={`text-center text-3xl font-bold p-3 text-gray-900`} data-aos="fade-down">
          Luxury Home Salon
        </h1>
        <div className='flex justify-center items-center p-5'>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-12 sm:gap-y-6 bg-LightBGColor sm:p-8 p-4 rounded-xl">
            
            {/* Service 1: Nail Art */}
            <div data-aos="fade-up" data-aos-delay="0">
              <Link to="nailart">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Nail Art.webp" alt="Nail Art" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Nail Art</p>
                </div>
              </Link>
            </div>

            {/* Service 2: Hair Care */}
            <div data-aos="fade-up" data-aos-delay="200">
              <Link to="haircare">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Haircare.webp" alt="Hair Care" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Hair Care</p>
                </div>
              </Link>
            </div>

            {/* Service 3: Mani-Pedi */}
            <div data-aos="fade-up" data-aos-delay="400">
              <Link to="mani-pedi">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Pedicure.webp" alt="Mani-Pedi" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Mani-Pedi</p>
                </div>
              </Link>
            </div>

            {/* Service 4: Waxing */}
            <div data-aos="fade-up" data-aos-delay="600">
              <Link to="waxing">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Waxing.webp" alt="Waxing" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Waxing</p>
                </div>
              </Link>
            </div>

            {/* Service 5: Polish & Massage */}
            <div data-aos="fade-up" data-aos-delay="800">
              <Link to="body-polishing">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Massage.webp" alt="Polish & Massage" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Polish & Massage</p>
                </div>
              </Link>
            </div>

            {/* Service 6: Threading & Wax */}
            <div data-aos="fade-up" data-aos-delay="5000">
              <Link to="threading">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Threading.webp" alt="Threading & Wax" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Threading & Wax</p>
                </div>
              </Link>
            </div>

            {/* Service 7: Bleach & D-Tan */}
            <div data-aos="fade-up" data-aos-delay="1200">
              <Link to="bleach-dtan">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Bleach.webp" alt="Bleach & D-Tan" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Bleach & D-Tan</p>
                </div>
              </Link>
            </div>

            {/* Service 8: Wedding Package */}
            <div data-aos="fade-up" data-aos-delay="1400">
              <Link to="weddingpakage">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Makeup.webp" alt="Wedding Package" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Wedding Package</p>
                </div>
              </Link>
            </div>

            {/* Service 9: Facial & Cleanup */}
            <div data-aos="fade-up" data-aos-delay="1600">
              <Link to="facial-cleanup">
                <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                  <img src="/Temp/Facial.webp" alt="Facial & Cleanup" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                  <p className={`font-bold pt-1.5 text-gray-900`}>Facial & Cleanup</p>
                </div>
              </Link>
            </div>

            <div className='m-4'></div>
          </div>
        </div>
      </div>
    </>
  );
}
