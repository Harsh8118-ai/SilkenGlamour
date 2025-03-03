import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const IMAGEKIT_BASE_URL = import.meta.env.VITE_IMAGEKIT_BASE_URL;

  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden">
        {/* Curved Background */}
        <div
          className="absolute top-0 left-0 w-full h-[50%] bg-MainBGColorYellow"
          style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
        ></div>

        {/* Content */}
        <div className="relative h-full w-full text-center sm:pt-16 pt-5">
          {/* <p className='hidden sm:block text-sm sm:text-xl font-bold text-black font-Logo'>SilkenGlamour</p> */}
          <h1 className="text-2xl sm:text-5xl font-bold text-black sm:mb-16 mb-5 font-Logo">
            Welcome to<br /> Luxurious Home Salon
          </h1>
          <div className='flex items-center justify-center w-full gap-10'>

            <div className='mt-32 hidden sm:block'>
              <Link to="/service">
                <img
                  src={`${import.meta.env.VITE_IMAGEKIT_BASE_URL}/Home/Makeup Home.webp`}
                  alt="Makeup Home"
                  className="w-64 h-64 rounded-xl border-[6px] border-[000000] object-cover transform hover:opacity-80 hover:border-white "
                />
              </Link></div>

            <Link to="/service">
              <img
                src={`${import.meta.env.VITE_IMAGEKIT_BASE_URL}/Home/Banner Mirror.webp`}
                alt="Banner Mirror"
                width="320"
                height="384"
                className="h-72 w-60 sm:w-80 sm:h-96 rounded-t-full border-[6px] border-white object-cover transform hover:opacity-95 hover:border-white"
                decoding="async"
                fetchpriority="high"
              />
            </Link>



            <div className='mt-32 hidden sm:block'>
              <Link to="/service">
                <img
                  src={`${import.meta.env.VITE_IMAGEKIT_BASE_URL}/Home/Facial Home.webp`}
                  alt="Facial Home"
                  className="w-64 h-64 rounded-xl border-[6px] border-[000000] object-cover transform hover:opacity-80 hover:border-white "
                />
              </Link></div>
          </div>
        </div>
      </div>
    </>
  )
}
