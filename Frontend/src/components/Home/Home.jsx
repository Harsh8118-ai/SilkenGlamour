import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../Service/Service Nav/CartContext'; // Import the CartContext
import { useAuth } from '../../Store/auth';
import HomeService from './HomeService';



export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility
  const { cartItems } = useContext(CartContext);

  const { isLoggedIn } = useAuth();


  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(4); // The middle card index

  // Function to scroll left or right and update the active index
  const scroll = (direction) => {
    let newIndex = activeIndex;

    if (direction === 'left') {
      newIndex = Math.max(activeIndex - 1, 0); // Prevents index from going below 0
    } else {
      newIndex = Math.min(activeIndex + 1, 8); // Prevents index from going beyond last card (assuming 9 cards)
    }

    setActiveIndex(newIndex);

    // Scroll to the new active card's position (optional, based on design)
    const { current } = scrollRef;
    current.scrollLeft = newIndex * 200; // Adjust scroll value based on the card's size and layout
  };

  // Array of services (data source for each card)
  const services = [
    { name: 'Nail Art', image: '/Temp/Nail Art.jpg', link: 'nailart' },
    { name: 'Hair Care', image: '/Temp/Haircare.jpg', link: 'haircare' },
    { name: 'Mani-Pedi', image: '/Temp/Pedicure.jpg', link: 'mani-pedi' },
    { name: 'Waxing', image: '/Temp/Waxing.jpg', link: 'waxing' },
    { name: 'Polish & Massage', image: '/Temp/Massage.jpg', link: 'body-polishing' },
    { name: 'Threading & Wax', image: '/Temp/Threading.jpg', link: 'threading' },
    { name: 'Bleach & D-Tan', image: '/Temp/Bleach.jpg', link: 'bleach-dtan' },
    { name: 'Wedding Package', image: '/Temp/Makeup.jpg', link: 'weddingpakage' },
    { name: 'Facial & Cleanup', image: '/Temp/Facial.jpg', link: 'facial-cleanup' },
  ];

  return (
    <>
      <div className='hidden sm:block bg-BGColorYellow min-h-screen w-full overflow-x-hidden'> {/* Ensure no horizontal scrolling */}

        {/* .......... HEADER SECTION .......... */}
        <header className="fixed z-[999] w-full top-0 bg-MainBGColorYellow">
          <nav className="border-gray-600 sm:py-2 lg:px-6">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <Link to="/">
                <div className="flex items-center justify-center sm:flex-col lg:flex-col">
                  <img src="/Services/SG Logo.png" alt="LOGO" className="hidden sm:inline ml-8 h-8 rounded-md object-cover bg-transparent" />
                  <span className={`text-black hidden sm:inline text-center ml-6 mt-1 text-sm font-bold`} id="logo">
                    SilkenGlamour
                  </span>
                </div>
              </Link>

              <div className="items-center sm:order-2 hidden sm:flex">
                {isLoggedIn ? <Link
                  to="contact/logout"
                  className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                >
                  Log Out
                </Link>
                  :
                  <>
                    <Link
                      to="contact/login"
                      className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                    >
                      Log In
                    </Link>
                    <Link
                      to="contact/signup"
                      className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                    >
                      Sign Up
                    </Link>
                  </>}

                <Link to="/profile">
                  <div className="p-3 hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" height="30" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                        fill="#BFA280"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="hidden justify-between items-center w-full sm:flex sm:flex-wrap sm:w-auto sm:order-1">
                <ul className="flex flex-col mt-4 font-medium sm:flex-row lg:space-x-10 sm:mt-0 pl-10">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 sm:-ml-5 lg:-ml-0 duration-200 ${isActive ? "text-gray-900" : "text-black"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-black"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-black"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                      }
                    >
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-black"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-black"}  border-gray-600  lg:hover:bg-transparent  hover:text-black font-bold lg:p-0`
                      }
                    >
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* .......... HERO SECTION .......... */}
        <div className="relative h-screen w-full overflow-x-hidden">  {/* Ensure no horizontal scroll */}
          {/* Curved Background */}
          <div
            className="absolute top-0 left-0 w-full h-[50%] bg-MainBGColorYellow"
            style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
          ></div>



          {/* Content */}
          <div className="relative h-full w-full text-center pt-16">
            <h1 className="text-5xl font-bold text-black mb-6 font-didot">
              Welcome to Our <br /> Premium Home Salon Service
            </h1>
            <div className='flex items-center justify-center w-full'>
              <Link to="/service">
              <img
                src="/Home/Banner Mirror.jpeg"
                alt=""
                className="w-80 h-96 rounded-t-full border-[6px] border-[000000] object-cover transform hover:opacity-95 hover:border-white"
              /></Link>

            </div>
          </div>
        </div>

        {/* .......... SERVICES .......... */}
        <div className='bg-MainBGColorYellow rounded-3xl m-0.5'>
          <HomeService />
        </div>


        {/* .......... COMBO PACK SECTION .......... */}
        <div>
          <h1 className='text-center font-bold text-2xl text-MainBGColorYellow'>Meet Our Combo Packs</h1>
        </div>

        {/* .......... REVIEWS SECTION .......... */}
        <div>
          <h1 className='text-center font-bold text-2xl text-MainBGColorYellow'>What People are Saying</h1>
        </div>

      </div>
    </>
  );
}
