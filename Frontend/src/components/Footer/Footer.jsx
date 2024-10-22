import { React, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp, } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {

    const phoneNumber = '9266037001';
    const message = "Hi Silken Glamour! I'd like to know more about your Services. Can you help me?";

    const handleClick = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, });
    }, []);

    const iconClasses =
        'transition duration-300 transform hover:scale-125 w-10 h-10';

    return (
        <>
            {/* Uncomment and adjust this section when needed */}
            {/* <footer className="bg-MainBGColorYellow border-y hidden sm:block">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                    <div className="flex justify-center gap-9 sm:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img src="/Services/sg logo.png" alt="Logo" className="hidden sm:inline ml-9 h-14 rounded-md object-cover" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="/" className="hover:underline">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link to="/about" className="hover:underline">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service" className="hover:underline">
                                            Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <Link to="#" className="hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 sm:text-center">
                            © 2024
                            <a href="https://hiteshchoudhary.com/" className="hover:underline">
                                harshtyagi
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer> */}

            {/* ...................... WHATSAPP ICON ...................... */}

            <div className=''>
                {/* Mobile version of WhatsApp Icon */}
                {/* <div className="sm:hidden fixed z-50 bottom-14 right-1 animate-bounce">
                    <a href="https://wa.me/9266037001" onClick={handleClick} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-[#25D366] text-5xl bg-gray-300 p-2 rounded-full transition hover:scale-110 duration-300" />
                    </a>
                </div> */}

                {/* Desktop version of WhatsApp Icon */}
                {/* <div className="hidden sm:block fixed z-50 top-3/4 right-0">
                    <div className="fixed bottom-10 right-5 sm:animate-pulse">
                        <a href="https://wa.me/9266037001" onClick={handleClick} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-[#25D366] text-5xl bg-gray-300 p-2 rounded-full shadow-lg transition hover:scale-110 duration-300" />
                        </a>
                    </div>
                </div> */}

                <div className="fixed bottom-14 sm:bottom-20 right-0 m-4 z-[999]">

                    <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/yournumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-BGColorYellow sm:bg-MainBGColorYellow rounded-full p-2 sm:p-3 shadow-lg hover:bg-[#635a4f] hover:text-green-500 animate-bounce"
                            data-aos="fade-up"
                        >
                            <FaWhatsapp className={`${iconClasses} w-6 h-6 sm:w-8 sm:h-8`} />
                        </a>
                    </div>
                </div>

            </div>

            {/*........................................ ICON BAR ........................................*/}

            {/* Removed the empty div that caused extra space */}

            <div className="flex justify-center">
                <div className="sm:hidden shadow fixed py-1 px-5 z-50 bottom-1.5 w-fit bg-gradient-to-r from-[#2E2117] via-[#796855] to-[#2E2117] rounded-full">
                    <ul className="flex justify-center gap-10 pt-1 bg-transparent">
                        <li className="flex flex-col items-center h-auto pl-2 w-auto">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `duration-200 flex flex-col items-center ${isActive ? "text-gray-900" : "text-MainBGColorYellow"} font-bold`
                                }
                            >
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                                    <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"></path>
                                </svg>
                                <span className="text-sm">Home</span>
                            </NavLink>
                        </li>

                        <li className="flex flex-col items-center h-auto w-auto">
                            <NavLink
                                to="/service"
                                className={({ isActive }) =>
                                    `duration-200 flex flex-col items-center ${isActive ? "text-gray-900" : "text-MainBGColorYellow"} font-bold`
                                }
                            >
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                                    <path d="M505.329 324.301c-12.496-7.39-28.143-8.585-42.107-2.392 0 0-.054.056-.272.109-.054.054-.163.054-.218.109.054 0 0 0-.163.054l-.109.054-.054.054c-.217.054-.435.163-.706.272-5.107 2.281-25.047 11.138-92.852 41.129v-.109c-15.213-21.569-41.998-5.651-78.291-2.5-56.287-28.849-109.423-57.101-167.72-55.309v115.454h9.671l121.05 47.812c19.777 7.823 42.215 5.814 60.362-5.324l191.517-118.17C513.315 340.654 513.37 329.027 505.329 324.301zM100.649 291.555h-9.716v-7.268c0-5.681-4.604-10.285-10.285-10.285H10.932c-5.681 0-10.285 4.604-10.285 10.285v164.742c0 5.681 4.604 10.285 10.285 10.285h69.716c5.681 0 10.285-4.604 10.285-10.285v-7.268h9.716c6.263 0 11.34-5.078 11.34-11.341V302.896C111.99 296.633 106.912 291.555 100.649 291.555zM59.471 443.539c-6.99 0-12.716-5.725-12.716-12.715 0-6.989 5.726-12.715 12.716-12.715 6.989 0 12.715 5.726 12.715 12.715C72.186 437.814 66.46 443.539 59.471 443.539z"></path>
                                    <path d="M193.495,195.43l21.725,2.498c2.607,11.297,7.06,22.16,13.252,31.937l-13.687,17.163c-3.584,4.562-3.15,10.971,0.869,14.99l14.99,14.99c4.019,4.019,10.428,4.454,14.99,0.869l17.163-13.686c9.776,6.192,20.638,10.645,31.936,13.251l2.498,21.726c1.702,15.038,21.441,8.544,32.262,9.993c5.757,0,10.537-4.237,11.189-9.993l2.498-21.726c11.298-2.606,22.16-7.061,31.936-13.253l17.163 13.688c4.562,3.584,10.971,3.15,14.99-0.869l14.99-14.99c4.019-4.019,4.454-10.428,0.87-14.991l-13.687-17.163c6.192-9.776,10.645-20.638,13.252-31.935l21.725-2.499c5.757-0.651,9.993-5.432,9.993-11.189v-21.073c0-5.757-4.236-10.536-9.993-11.189l-21.725-2.499c-2.607-11.296-7.06-22.16-13.252-31.935l13.687-17.163c3.584-4.562,3.15-10.971-0.87-14.99l-14.99-14.99c-4.019-4.019-10.428-4.454-14.99-0.869l-17.163 13.686c-9.776-6.192-20.638-10.645-31.936-13.251l-2.498-21.726c-0.652-5.758-5.431-9.993-11.189-9.993h-21.073c-5.757,0-10.537 4.237-11.189 9.993l-2.498 21.726c-11.298 2.606-22.16 7.059-31.936 13.251l-17.163-13.686c-4.562-3.584-10.971-3.149-14.99 0.87l-14.99 14.99c-4.019 4.019-4.453 10.427-0.869 14.99l13.687 17.162c-6.192 9.777-10.645 20.639-13.252 31.937l-21.725 2.499c-5.757 0.651-9.993 5.432-9.993 11.189v21.073C183.502 190 187.738 194.779 193.495 195.43z M284.001 138.859c19.301-19.301 50.52-19.301 69.821 0 19.171 19.171 19.171 50.519 0 69.691-19.301 19.301-50.52 19.301-69.821 0C264.7 189.379 264.7 158.03 284.001 138.859z"></path>
                                </svg>
                                <span className="text-sm">Service</span>
                            </NavLink>
                        </li>

                        <li className="flex flex-col items-center h-auto w-auto">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `duration-200 flex flex-col items-center ${isActive ? "text-gray-900" : "text-MainBGColorYellow"} font-bold`
                                }
                            >
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <circle cx="12" cy="6" r="4.75"></circle>
                                    <path d="M14,11.25H10A5.757,5.757,0,0,0,4.25,17v5a.75.75,0,0,0,.75.75H19a.75.75,0,0,0,.75-.75V17A5.757,5.757,0,0,0,14,11.25Z"></path>
                                </svg>
                                <span className="text-sm">Contact</span>
                            </NavLink>
                        </li>

                        <li className="flex flex-col items-center h-auto pr-2 w-auto">
                            <NavLink
                                to="/faq"
                                className={({ isActive }) =>
                                    `duration-200 flex flex-col items-center ${isActive ? "text-gray-900" : "text-MainBGColorYellow"} font-bold`
                                }
                            >
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" width="24" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 420.794">
                                    <path fillRule="nonzero" d="M365.115 411.466l-41.555-48.032H168.499c-8.77 0-16.722-3.669-22.406-9.542l-34.239 32.84a17.242 17.242 0 01-12.855 5.73c-9.545 0-17.285-7.74-17.285-17.285v-71.248H38.913C17.662 303.929 0 286.269 0 265.016V38.913C0 17.834 17.802 0 38.913 0h390.993c21.283 0 38.914 17.631 38.914 38.913v51.92h11.975c17.088 0 31.205 14.12 31.205 31.205v210.199c0 17.103-14.103 31.197-31.205 31.197h-78.294l-1.835 38.455c.012 10.605-8.657 18.905-19.061 18.905-8.201 0-11.857-3.969-16.49-9.328zM156.443 166.073h-28.111v41.447H95.263V95.864h67.793l-4.134 28.583h-30.59v15.007h28.111v26.619zm36.922 41.447h-31.046l26.786-111.656h51.092l26.787 111.656h-31.046l-3.806-17.686h-34.965l-3.802 17.686zm16.535-77.542l-6.778 31.449h22.893l-6.613-31.263-9.502-.186zm123.313 73.434l-14.057 4.108c-18.519 0-30.973-5.121-37.366-15.363-3.309-5.121-5.623-10.87-6.947-17.242-1.321-6.372-1.983-14.083-1.983-23.135 0-20.365 3.528-35.223 10.582-44.574 7.055-9.348 19.732-14.022 38.031-14.022 18.298 0 31.031 4.703 38.196 14.112 7.165 9.409 10.747 24.238 10.747 44.484 0 15.126-2.921 27.333-8.762 36.623l14.101 8.094-8.599 20.545-33.943-6.842v-6.788zm-24.805-23.762h13.727c4.517 0 7.8-.566 9.838-1.698 2.041-1.129 3.057-3.722 3.057-7.769v-46.45h-13.888c-4.41 0-7.633.567-9.674 1.696-2.038 1.132-3.06 3.722-3.06 7.771v46.45zM98.999 375.177l92.307-88.533h238.6c11.903 0 21.629-9.734 21.629-21.628V38.913c0-11.894-10.013-21.628-21.629-21.628H38.913c-11.615 0-21.628 10.007-21.628 21.628v226.103c0 11.697 9.726 21.628 21.628 21.628h60.086v88.533z" />
                                </svg>
                                <span className="text-sm">FAQ</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
