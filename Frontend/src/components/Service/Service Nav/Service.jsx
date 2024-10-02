import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Service() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <div className='bg-MainBGColorYellow min-h-screen overflow-x-hidden'>
      <h6 className='text-center text-3xl font-bold text-gray-900 sm:tracking-wide pt-2' data-aos="fade-down">
        Luxury Home Salon
      </h6>

      <div className='flex justify-center items-center p-5 pt-3'>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 bg-LightBGColor p-4 sm:p-6 rounded-xl max-w-screen-lg mx-auto">
          {/* Service 1: Nail Art */}
          <div data-aos="fade-up">
            <Link to="nailart">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Nail Art.jpg
                " alt="Nail Art" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Nail Art</p>
              </div>
            </Link>
          </div>

          {/* Service 2: Hair Care */}
          <div data-aos="fade-down">
            <Link to="haircare">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Haircare.jpg
                " alt="Hair Care" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Hair Care</p>
              </div>
            </Link>
          </div>

          {/* Service 3: Mani-Pedi */}
          <div data-aos="fade-right">
            <Link to="mani-pedi">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Pedicure.jpg
                " alt="Mani-Pedi" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Mani-Pedi</p>
              </div>
            </Link>
          </div>

          {/* Service 4: Waxing */}
          <div data-aos="fade-left">
            <Link to="waxing">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Waxing.jpg
                " alt="Waxing" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Waxing</p>
              </div>
            </Link>
          </div>

          {/* Service 5: Polish & Massage */}
          <div data-aos="fade-up">
            <Link to="body-polishing">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Massage.jpg
                " alt="Polish & Massage" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Polish & Massage</p>
              </div>
            </Link>
          </div>

          {/* Service 6: Threading & Wax */}
          <div data-aos="fade-down">
            <Link to="threading">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Threading.jpg
                " alt="Threading & Wax" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Threading & Wax</p>
              </div>
            </Link>
          </div>

          {/* Service 7: Bleach & D-Tan */}
          <div data-aos="fade-right">
            <Link to="bleach-dtan">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Bleach.jpg
                " alt="Bleach & D-Tan" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Bleach & D-Tan</p>
              </div>
            </Link>
          </div>

          {/* Service 8: Wedding Package */}
          <div data-aos="fade-left">
            <Link to="weddingpakage">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Makeup.jpg
                " alt="Wedding Package" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Wedding Package</p>
              </div>
            </Link>
          </div>

          {/* Service 9: Facial & Cleanup */}
          <div data-aos="fade-up">
            <Link to="facial-cleanup">
              <div className='shadow-lg text-sm sm:text-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-110 hover:rotate-3 hover:shadow-2xl transition-transform duration-500 ease-in-out'>
                <img src="/Temp/Facial.jpg
                " alt="Facial & Cleanup" className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover transition-all duration-300 ease-in-out" />
                <p className='font-bold pt-1.5 text-gray-900'>Facial & Cleanup</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
