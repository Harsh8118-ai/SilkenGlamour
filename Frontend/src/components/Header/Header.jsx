import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { LogoColor, LogoBGColor } from '../../Style';
import { FaUserCircle } from 'react-icons/fa';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="hidden sm:block shadow sticky z-50 top-0 bg-gradient-to-r from-black via-gray-900 to-black">
                <nav className="border-gray-600 sm:py-2 lg:px-6 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <Link to="/">
                            <div className="flex items-center justify-center sm:flex-col lg:flex-col    ">
                                <img src="/Services/SG Logo.png" alt='LOGO' className="hidden sm:inline ml-6 h-6 rounded-md object-cover bg-transparent" />
                                <span className={`${LogoColor} hidden sm:inline text-center ml-6 mt-1 text-sm font-bold`} id='logo'>SilkenGlamour</span>
                            </div>
                        </Link>

                        <div className="items-center sm:order-2 hidden sm:flex">
                            <Link
                                to="contact/login"
                                className="text-white hover:bg-yellow-600 focus:ring-4 bg-yellow-500 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-5 py-2 sm:py-2.5 mr-2 lg:mr-4 focus:outline-none
                            "
                            >
                                Log in
                            </Link>
                            <Link
                                to="contact/signup"
                                className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
                            >
                                Sign Up
                            </Link>

                            <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 448 512" className='ml-5'><path fill="#ceae3b" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </Link>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full sm:flex sm:flex-wrap sm:w-auto sm:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium sm:flex-row lg:space-x-10 sm:mt-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 sm:-ml-5 lg:-ml-0 duration-200 ${isActive ? "text-yellow-500" : "text-gray-300"}  border-gray-600 hover:bg-gray-60 lg:hover:bg-transparent hover:text-yellow-500 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-300"}  border-gray-600 hover:bg-gray-60 lg:hover:bg-transparent hover:text-yellow-500 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-300"}  border-gray-600 hover:bg-gray-60 lg:hover:bg-transparent hover:text-yellow-500 lg:p-0`
                                        }
                                    >
                                        Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-300"}  border-gray-600 hover:bg-gray-60 lg:hover:bg-transparent hover:text-yellow-500 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/faq"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-500" : "text-gray-300"}  border-gray-600 hover:bg-gray-60 lg:hover:bg-transparent  hover:text-yellow-500 lg:p-0`
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

            <header className="sm:hidden shadow sticky z-50 top-0 bg-gradient-to-r from-black via-gray-800 to-black h-full">
                    <div className="flex items-center justify-center ">
                        <div className='absolute left-0 h-full'>
                <Link to="/">
                        <img src="/Services/SG Logo.png" alt='LOGO' className="ml-6 m-2 h-6 rounded-md object-cover bg-transparent left-0" />
                </Link>
                        </div>
                        <span className={`${LogoColor} text-center ml-6 text-lg font-bold my-1.5`} id='logo'>Silken Glamour</span>
                <div className='absolute right-0'>
                
                <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 448 512" className='mr-3'><path fill="#ceae3b" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </Link>

                </div>
                </div>
            </header>
        </>
    );
}



