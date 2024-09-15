import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
        <div className="relative flex items-start  sm:items-center sm:-mt-20 justify-center h-screen sm:min-h-[750px]  bg-white sm:pt-0">
            <div className="max-w-6xl mx-3 sm:px-6 lg:px-8 ">
                <div className="mt-20 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 bg-gradient-to-t from-black via-gray-800 to-gray-900 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-600 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Sector 52, Noida
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 7668718283
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    silkenglamour@salon.org
                                </div>
                            </div>
                        </div>


                        {/*............... button ................ */}
                        <div className='flex flex-col justify-center items-center sm:items-stretch mt-7 sm:mt-0'>
                        <Link to="signup"><button
                            type="submit"
                            className="p-3 sm:w-full px-8 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                        >
                            Sign Up
                        </button></Link>

                        <Link to="login"><button
                            type="submit"
                            className="mt-5 p-3 sm:w-full px-8  bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                        >
                            Log In
                        </button></Link></div>

                        

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}





