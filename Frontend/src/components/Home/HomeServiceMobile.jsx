import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

export default function HomeServiceMobile() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with the middle card (index 4)

  const services = [
    { name: 'Nail Art', image: '/Temp/Nail Art.webp', link: '/service/nailart' },
    { name: 'Hair Care', image: '/Temp/Haircare.webp', link: '/service/haircare' },
    { name: 'Mani-Pedi', image: '/Temp/Pedicure.webp', link: '/service/mani-pedi' },
    { name: 'Waxing', image: '/Temp/Waxing.webp', link: '/service/waxing' },
    { name: 'Polish & Massage', image: '/Temp/Massage.webp', link: '/service/body-polishing' },
    { name: 'Threading & Wax', image: '/Temp/Threading.webp', link: '/service/threading' },
    { name: 'Bleach & D-Tan', image: '/Temp/Bleach.webp', link: '/service/bleach-dtan' },
    { name: 'Wedding Package', image: '/Temp/Makeup.webp', link: '/service/weddingpakage' },
    { name: 'Facial & Cleanup', image: '/Temp/Facial.webp', link: '/service/facial-cleanup' },
  ];

  // Function to handle cyclic scrolling
  const handleScroll = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    } else {
      setActiveIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Create a cyclic array of services (before and after the visible ones)
  const getVisibleServices = (cardsToShow) => {
    const totalServices = services.length;
    const visibleServices = [];

    for (let i = -Math.floor(cardsToShow / 2); i <= Math.floor(cardsToShow / 2); i++) {
      visibleServices.push(services[(activeIndex + i + totalServices) % totalServices]);
    }
    return visibleServices;
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleScroll('right'),
    onSwipedRight: () => handleScroll('left'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Allow mouse swipe in addition to touch
  });

  return (
    <div className="bg-transparent min-h-fit flex flex-col items-center">
      <h6 className="text-3xl font-bold text-gray-900 mt-3">
        Services We Offer
      </h6>
      <div className="flex items-center mt-2 mb-2">
        {/* Left Scroll Button */}
        <button
          className="bg-gray-500 text-white rounded-full p-4 hover:bg-gray-700 transition duration-300 ease-in-out mb-4"
          onClick={() => handleScroll('left')}
        >
          &lt;
        </button>

        {/* Carousel Container with Swipe Handlers */}
        <div
          {...swipeHandlers}
          className="flex overflow-hidden items-center justify-center sm:p-10 w-full"
        >
          {getVisibleServices(3).map((service, index) => (
            <Link to={service.link} key={service.name}>
              <div
                className={`flex flex-col items-center justify-center p-1 transform-gpu transition-all duration-500 ease-out ${
                  index === 1 ? 'scale-110 opacity-100 hover:scale-[1.15]' : 'scale-100 opacity-50'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // Smoother animation
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-24 h-22 lg:w-40 lg:h-40 rounded-xl object-cover transition-all duration-500 ease-out hover:shadow-md"
                />
                <p className="pt-1.5 font-semibold text-gray-900 text-center text-[8px]">{service.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="bg-gray-500 text-white rounded-full p-4 hover:bg-gray-700 transition duration-300 ease-in-out mb-4"
          onClick={() => handleScroll('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
