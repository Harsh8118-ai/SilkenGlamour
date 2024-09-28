import React from 'react'
import { Link } from 'react-router-dom'
import { LogoColor } from '../../../Style'




export default function Service() {
    
    return (
        <>
            <div className='bg-MainBGColorYellow'>
                <h1 className={`text-center text-3xl font-bold p-3 text-gray-900`}>Best Professional Home Salon for Women</h1>
                <div className='flex justify-center items-center p-5 '>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-12 sm:gap-y-6 bg-LightBGColor sm:p-8 p-4 rounded-xl">

                        <Link to="nailart">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900 '>
                                {/* <img src="/Services/Service Main/NailArt.JPG" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Nail Art.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />

                                <p className={`font-bold pt-1.5 text-gray-900`}>Nail Art</p>
                            </div></Link>

                        <Link to="haircare">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/HairCare1.JPG" alt="Image 8" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Haircare.webp" alt="Image 8" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl h-40 w-40 rounded-xl object-cover " />

                                <p className={`font-bold pt-1.5 text-gray-900`}>Hair Care</p>
                            </div></Link>

                        <Link to="mani-pedi">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/ManiPedi.JPG" alt="Image 5" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Pedicure.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Mani-Pedi</p>
                            </div></Link>

                        <Link to="waxing">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/Waxing.JPG" alt="Image 6" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Waxing.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Waxing</p>
                            </div></Link>

                        <Link to="body-polishing">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/PreBridalGrooming.JPG" alt="Image 2" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Massage.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Polish & Massage</p>
                            </div></Link>

                        <Link to="threading">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/Threading&Wax.jpg" alt="Image 3" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Threading.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Threading & Wax</p>
                            </div></Link>

                        <Link to="bleach-dtan">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/Bleach&Dtan.JPG" alt="Image 7" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " /> */}
                                <img src="/Temp/Bleach.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Bleach & D-Tan</p>
                            </div></Link>

                        <Link to="weddingpakage">
                            <div className='shadow-lg rounded-xl p-1 flex flex-col bg-BGColorYellow justify-center items-center hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/WeddingPackage.JPG" alt="Image 1" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />\ */}
                                <img src="/Temp/Makeup.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />


                                <p className={`font-bold pt-1.5 text-gray-900`}>Wedding Package</p>
                            </div></Link>



                        <Link to="facial-cleanup">
                            <div className='shadow-lg rounded-xl p-1 text-center
                    lg:flex lg:justify-center lg:items-center lg:flex-col bg-BGColorYellow hover:scale-125 shadow-gray-900'>
                                {/* <img src="/Services/Service Main/Facial&Cleanup.JPG" alt="Image 9" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover" /> */}
                    <img src="/Temp/Facial.webp" alt="Image 4" className="sm:object-cover sm:w-32 sm:h-32 sm:rounded-xl  h-40 w-40 rounded-xl object-cover " />

                                <p className={`font-bold pt-1.5 text-gray-900`}>Facial & Cleanup</p>
                            </div></Link>
                        <div className='m-4'></div>

                    </div >
                </div >
            </div >

        </>
    )
}
