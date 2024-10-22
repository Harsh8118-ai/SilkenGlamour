import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import Login from '../Contact/LogIn';
import ConfirmationModalName from './ConfirmationModalName';
import ConfirmationModalAddress from './ConfirmationModalAddress';

const Profile = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();
  const [modalType, setModalType] = useState(null); // State to determine which modal to open
  const [modalData, setModalData] = useState(null); // State to store modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // State to open/close modal

  // Function to open the modal with data and type
  const openModal = (type, data) => {
    setModalType(type);
    setModalData(data);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setModalData(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className='h-full w-screen bg-BGColorYellow p-5'>
          <div className="max-w-7xl mx-auto py-10 px-4 bg-gradient-to-b from-[#CBB59F] to-[#DED6CB] min-h-screen rounded-xl">
            {/* Heading */}
            <h1 className="text-4xl font-bold font-Helvetica mb-6 text-[#7A6752]">Your Profile</h1>

            {/* Profile Info Section WEB View */}
            <div className="bg-[#E3DBD0] hidden sm:block shadow-2xl rounded-lg p-6 mb-10 transition-all duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Personal Information</h2>
              <div className="flex items-center space-x-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#7A6752]">{user.username}</h3>
                  <p className="text-lg text-black">Email: {user.email}</p>
                  <p className="text-lg text-black">Phone: {user.mobileNumber}</p>
                </div>

                {/* Log Out Button WEB VIEW */}
                <div className="items-center sm:order-2 hidden sm:flex absolute flex-col gap-4 right-10">
                  <Link
                    to="/contact/logout"
                    className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black"
                  >
                    Log Out
                  </Link>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="mt-4">
                <button
                  className="text-[#796855] hover:text-[#CBB59F] font-medium transition-all duration-300"
                  onClick={() => openModal('name', { username: user?.username })}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Profile Info Section Mobile View */}
            <div className="bg-[#E3DBD0] sm:hidden shadow-2xl rounded-lg p-6 mb-10 transition-all duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Personal Information</h2>
              <div className="flex items-center flex-col justify-center ">
                <div>
                  <h3 className="text-xl text-center font-semibold text-[#7A6752]">{user.username}</h3>
                  <p className="text-lg text-black">Phone: {user.mobileNumber}</p>
                  <p className="text-lg text-black">Email: {user.email}</p>
                </div>
                <div className="my-2">
                  <button
                    className="text-[#796855] hover:text-[#CBB59F] font-medium transition-all duration-300"
                    onClick={() => openModal('name', { username: user?.username })}
                  >
                    Edit Profile
                  </button>
                </div>

                {/* Log Out Button Mobile VIEW */}
                <div className="items-center flex gap-2 justify-center mt-2">
                  <Link
                    to="/contact/logout"
                    className="text-MainBGColorYellow hover:bg-MainBGColorYellow focus:ring-4 bg-gray-900 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 sm:px-3 py-2 sm:py-1.5 mr-2 lg:mr-4 focus:outline-none hover:text-black">
                    Log Out
                  </Link>
                </div>
              </div>
            </div>

            {/* Address Management */}
            <div className="bg-[#E3DBD0] shadow-2xl rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105 mb-10">
              <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Your Address</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#DED6CB] rounded-lg">
                  <h3 className="text-xl font-semibold text-[#7A6752]">Home Address</h3>
                  <p className="text-lg">{user.street}, {user.apartmentNumber}</p>
                  <p className="text-lg">City: {user.town}</p>
                  <p className="text-lg">Zip Code: {user.pincode}</p>
                  <button
                    className="text-[#796855] hover:text-[#CBB59F] font-medium mt-2 block transition-all duration-300"
                    onClick={() => openModal('address', {
                      street: user?.street,
                      apartmentNumber: user.apartmentNumber,
                      town: user.town,
                      pincode: user.pincode,
                    })}
                  >
                    Edit Address
                  </button>
                </div>
              </div>
            </div>

            {/* Booking History */}
            <div className="bg-[#E3DBD0] shadow-2xl rounded-lg p-6 transition-all duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-2xl font-medium mb-4 text-[#7A6752]">Booking History</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#DED6CB] rounded-lg flex justify-between flex-col sm:flex-row gap-3 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-[#7A6752]">Manicure & Pedicure</h3>
                    <p className="text-lg">Date: Sept 20, 2024</p>
                    <p className="text-lg">Status: Completed</p>
                  </div>
                  <button className="bg-gradient-to-r from-[#2E2117] via-[#796855] to-[#2E2117] text-white px-4 py-2 rounded-md hover:bg-[#5E5543] transition transform hover:scale-105 duration-500">
                    Rebook
                  </button>
                </div>

                <div className="p-4 bg-[#DED6CB] rounded-lg flex justify-between flex-col sm:flex-row gap-3 items-center">
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
          </div>
        </div>
      ) : (
        <Login />
      )}

      {/* Render the ConfirmationModals */}
      {isModalOpen && modalType === 'name' && (
        <ConfirmationModalName data={modalData} isOpen={isModalOpen} onClose={closeModal} />
      )}
      {isModalOpen && modalType === 'address' && (
        <ConfirmationModalAddress data={modalData} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};

export default Profile;
