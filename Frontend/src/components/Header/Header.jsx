import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { LogoColor, LogoBGColor } from '../../Style';
import { FaUserCircle } from 'react-icons/fa';


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="hidden sm:block shadow sticky z-50 top-0 bg-gradient-to-r from-[#2E2117] via-[#796855] to-[#2E2117]">
                <nav className="border-gray-600 sm:py-2 lg:px-6 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <Link to="/">
                            <div className="flex items-center justify-center sm:flex-col lg:flex-col    ">
                                <img src="/Services/SG Logo.png" alt='LOGO' className="hidden sm:inline ml-8 h-8 rounded-md object-cover bg-transparent" />
                                <span className={`text-MainBGColorYellow hidden sm:inline text-center ml-6 mt-1 text-sm font-bold`} id='logo'>SilkenGlamour</span>
                            </div>
                        </Link>

                        <div className="items-center sm:order-2 hidden sm:flex">
                            <Link
                                to="contact/login"
                                className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none
                            "
                            >
                                Log in
                            </Link>
                            <Link
                                to="contact/signup"
                                className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none" >
                                Sign Up
                            </Link>

                            <Link to="/profile">
                            <div className='p-3 hover:scale-110'>
                            <svg viewBox="0 0 24 24" fill="none" height="30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#BFA280"></path></g></svg></div>
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
                                            `block py-2 pr-4 pl-3 sm:-ml-5 lg:-ml-0 duration-200 ${isActive ? "text-gray-900" : "text-MainBGColorYellow"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-MainBGColorYellow"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-MainBGColorYellow"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                                        }
                                    >
                                        Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-MainBGColorYellow"}  border-gray-600  lg:hover:bg-transparent hover:text-black font-bold lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/faq"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-gray-900" : "text-MainBGColorYellow"}  border-gray-600  lg:hover:bg-transparent  hover:text-black font-bold lg:p-0`
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

            <header className="sm:hidden shadow sticky z-50 top-0 bg-gradient-to-r from-[#4d3b2e] via-[#39260b] to-[#4d3b2e] h-full">
                    <div className="flex items-center justify-center ">
                        <div className='absolute left-0 h-full'>
                <Link to="/">
                        <img src="/Services/SG Logo.png" alt='LOGO' className="ml-6 m-2 h-6 rounded-md object-cover bg-transparent left-0" />
                </Link>
                        </div>
                        <span className={`text-gray-300 text-center ml-1 text-lg font-extrabold my-1.5`} id='logo'>Silken Glamour</span>
                <div className='absolute right-0'>
                
                <Link to="/profile">
                <div className='mr-5'> 
                <svg viewBox="0 0 24 24" fill="none" height="25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#BFA280"></path></g></svg></div>
                </Link>

                </div>
                </div>
            </header>
        </>
    );
}



