import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <>
      <div className="relative h-full w-full overflow-x-hidden">
        {/* Curved Background */}
        <div
          className="absolute top-0 left-0 w-full h-[50%] bg-MainBGColorYellow"
          style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
        ></div>

        {/* Content */}
        <div className="relative h-full w-full text-center pt-20">
          <p className='text-xl font-bold text-black font-Logo'>SilkenGlamour</p>
          <h1 className="text-5xl font-bold text-black mb-5 font-Logo">
            Welcome to Our <br /> Premium Home Salon Service
          </h1>
          <div className='flex items-center justify-center w-full gap-10'>

            <div className='mt-32'>
              <Link to="/service">
                <img
                  src="/Home/Makeup Home.jpg"
                  alt=""
                  className="w-64 h-64 rounded-xl border-[6px] border-[000000] object-cover transform hover:opacity-80 hover:border-white "
                />
              </Link></div>

            <Link to="/service">
              <img
                src="/Home/Banner Mirror.jpeg"
                alt=""
                className="w-80 h-96 rounded-t-full border-[6px] border-[000000] object-cover transform hover:opacity-95 hover:border-white"
              />
            </Link>

            <div className='mt-32'>
              <Link to="/service">
                <img
                  src="/Home/Facial Home.jpg"
                  alt=""
                  className="w-64 h-64 rounded-xl border-[6px] border-[000000] object-cover transform hover:opacity-80 hover:border-white "
                />
              </Link></div>
          </div>
        </div>
      </div>
    </>
  )
}
