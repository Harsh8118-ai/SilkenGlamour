import React from 'react'
import { LogoColor } from '../../../Style'
import { Link } from 'react-router-dom'

export default function LeftCard() {
  return (
    <>
    <div className="hidden sm:block w-1/4 sticky top-20 h-screen bg-gray-100 p-4">
          <div className='bg-white'>
            <h1 className={`text-center text-3xl font-bold p-3 ${LogoColor}`}>Services</h1>
            <div className='flex justify-center items-center p-3x '>
              <div className="flex flex-col gap-2">

                <Link to="/service/nailart">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125 '>

                    <p className={`font-bold  ${LogoColor}`}>Nail Art</p>
                  </div></Link>

                <Link to="/service/haircare">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Hair Care</p>
                  </div></Link>

                <Link to="/service/mani-pedi">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Mani-Pedi</p>
                  </div></Link>

                <Link to="/service/waxing">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Waxing</p>
                  </div></Link>

                <Link to="/service/body-polishing">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Polish & Massage</p>
                  </div></Link>

                <Link to="/service/threading">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Threading & Wax</p>
                  </div></Link>

                <Link to="/service/bleach-dtan">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Bleach & D-Tan</p>
                  </div></Link>

                <Link to="/service/weddingpakage">
                  <div className='shadow-lg rounded-xl p-2 flex flex-col bg-gray-900 justify-center items-center hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Wedding Package</p>
                  </div></Link>



                <Link to="/service/facial-cleanup">
                  <div className='shadow-lg rounded-xl p-2 sm:hidden text-center
                    lg:flex lg:justify-center lg:items-center lg:flex-col bg-gray-900 hover:scale-125'>

                    <p className={`font-bold  ${LogoColor}`}>Facial & Cleanup</p>
                  </div></Link>
                <div className='m-4'></div>

              </div >
            </div >
          </div>
          {/* Add content for the left container */}
        </div>
    </>
  )
}
