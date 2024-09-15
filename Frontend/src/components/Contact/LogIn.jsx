import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrMobile: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex -mt-20 sm:mt-0 items-center justify-center bg-gradient-to-r from-black via-gray-800 to-gray-900 p-5">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center text-white mb-6 animate-fadeIn">
                    Salon Service Login
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email or Mobile Number */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-300">
                            Email or Mobile Number
                        </label>
                        <input
                            type="text"
                            name="emailOrMobile"
                            value={formData.emailOrMobile}
                            onChange={handleChange}
                            className="w-full p-3 text-gray-300 bg-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                            placeholder="Enter email or mobile number"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 text-gray-300 bg-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400"
                            >
                                {showPassword ? (
                                    <svg
                                        className="w-5 h-5 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M1 12l4.293 4.293a2.3 2.3 0 003.293 0L12 12m0 0l4.293 4.293a2.3 2.3 0 003.293 0L23 12m-2.5 0a8.5 8.5 0 00-8.5-8.5A8.5 8.5 0 002.5 12a8.5 8.5 0 008.5 8.5M12 4.5a7.5 7.5 0 00-7.5 7.5A7.5 7.5 0 0012 19.5 7.5 7.5 0 0019.5 12 7.5 7.5 0 0012 4.5z" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-5 h-5 text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2.5 12C4.893 4.897 10.697 2 12 2s7.107 2.897 9.5 10c-2.393 7.103-8.197 10-9.5 10s-7.107-2.897-9.5-10zM12 15a3 3 0 010-6 3 3 0 010 6z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="h-4 w-4 text-yellow-500 bg-gray-900 border-gray-600 rounded focus:ring-yellow-500 transition duration-300"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 text-sm text-gray-300"
                        >
                            Remember Me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/contact/signup" className="text-yellow-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
