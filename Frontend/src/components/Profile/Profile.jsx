import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import Login from '../Contact/LogIn';

const Profile = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();


  return (
    <>
    {isLoggedIn ?
      <div className='h-full w-screen bg-BGColorYellow p-5'>
        <div className="max-w-7xl mx-auto py-10 px-4 bg-gradient-to-b from-[#CBB59F] to-[#DED6CB] min-h-screen rounded-xl">
          {/* Heading */}
          <h1 className="text-4xl font-semibold mb-6 text-[#7A6752] animate-pulse">Your Profile</h1>

          {/* Profile Info Section WEB View */}
          <div className="bg-white hidden sm:block shadow-2xl rounded-lg p-6 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Personal Information</h2>
            <div className="flex items-center space-x-6">
              
              <div>
                <h3 className="text-xl font-semibold text-[#7A6752]">{user.username}</h3>
                
                <p className="text-lg text-black">Email: {user.email}</p>
                <p className="text-lg text-black">Phone: {user.mobileNumber}</p>
              </div>

              {/* .............. LOG IN / LOG OUT .............. */}
              {/* WEB VIEW  */}
              <div className="items-center sm:order-2 hidden sm:flex absolute flex-col gap-4 right-10">
                 <Link
                  to="/contact/logout"
                  className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                >
                  Log Out
                  

                </Link>
              </div>

            </div>
            <div className="mt-4">
              <Link
                to="/edit-profile"
                className="text-[#796855] hover:text-[#CBB59F] font-medium transition-all duration-300"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Profile Info Section Mobile View */}
          <div className="bg-white sm:hidden shadow-2xl rounded-lg p-6 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Personal Information</h2>
            <div className="flex items-center flex-col justify-center ">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transform transition duration-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#7A6752]">{user.username}</h3>
                <p className="text-lg text-black">Email: {user.email}</p>
                <p className="text-lg text-black">Phone: {user.mobileNumber}</p>
              </div>
              <div className="my-2">
              <Link
                to="/edit-profile"
                className="text-[#796855] hover:text-[#CBB59F] font-medium transition-all duration-300"
              >
                Edit Profile
              </Link>
            </div>

              {/* .............. LOG IN / LOG OUT .............. */}
              {/* Mobile VIEW  */}
              <div className="items-center flex gap-2 justify-center mt-2">
                {isLoggedIn ? <Link
                  to="/contact/logout"
                  className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black">
                    Log Out</Link>
                  :
                  <>
                    <Link
                      to="/contact/login"
                      className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/contact/signup"
                      className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                    >
                      Sign Up
                    </Link>
                  </>}
              </div>
            </div>

            
          </div>

          {/* Booking History */}
          <div className="bg-white shadow-2xl rounded-lg p-6 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Booking History</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#DED6CB] rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#7A6752]">Manicure & Pedicure</h3>
                  <p className="text-lg">Date: Sept 20, 2024</p>
                  <p className="text-lg">Status: Completed</p>
                </div>
                <button className="bg-gradient-to-r from-[#2E2117] via-[#796855] to-[#2E2117] text-white px-4 py-2 rounded-md hover:bg-[#5E5543] transition transform hover:scale-105 duration-500">
                  Rebook
                </button>
              </div>

              <div className="p-4 bg-[#DED6CB] rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#7A6752]">Facial & Clean-up</h3>
                  <p className="text-lg">Date: Sept 12, 2024</p>
                  <p className="text-lg">Status: Completed</p>
                </div>
                <button className="bg-gradient-to-r from-[#2E2117] via-[#796855] to-[#2E2117] text-white px-4 py-2 rounded-md hover:bg-[#5E5543] transition transform hover:scale-105 duration-500">
                  Rebook
                </button>
              </div>
            </div>
          </div>

          {/* Address Management */}
          <div className="bg-white shadow-2xl rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Your Address</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#DED6CB] rounded-lg">
                <h3 className="text-xl font-semibold text-[#7A6752]">Home Address</h3>
                <p className="text-lg">{user.street}, {user.apartmentNumber}</p>
                <p className="text-lg">City: {user.town}</p>
                <p className="text-lg">Zip Code: {user.pincode}</p>
                <Link
                  to="/edit-address"
                  className="text-[#796855] hover:text-[#CBB59F] font-medium mt-2 block transition-all duration-300"
                >
                  Edit Address
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div> : <Login /> }
    </>
  );
};

export default Profile;
