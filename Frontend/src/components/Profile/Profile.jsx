import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-6">Your Profile</h1>

      {/* Profile Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Personal Information</h2>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p>Email: johndoe@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/edit-profile"
            className="text-blue-500 hover:underline font-medium"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Haircut & Styling</h3>
              <p>Date: Oct 5, 2024, 2:00 PM</p>
              <p>Stylist: Jessica</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Cancel
            </button>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Full Body Massage</h3>
              <p>Date: Oct 10, 2024, 5:00 PM</p>
              <p>Therapist: Michael</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Booking History */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-medium mb-4">Booking History</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Manicure & Pedicure</h3>
              <p>Date: Sept 20, 2024</p>
              <p>Status: Completed</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Rebook
            </button>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Facial & Clean-up</h3>
              <p>Date: Sept 12, 2024</p>
              <p>Status: Completed</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Rebook
            </button>
          </div>
        </div>
      </div>

      {/* Address Management */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Your Addresses</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Home Address</h3>
            <p>123 Main Street, Apartment 5B</p>
            <p>City: Los Angeles, CA</p>
            <p>Zip Code: 90001</p>
            <Link
              to="/edit-address"
              className="text-blue-500 hover:underline font-medium mt-2 block"
            >
              Edit Address
            </Link>
          </div>

          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Office Address</h3>
            <p>456 Market Street, Suite 210</p>
            <p>City: San Francisco, CA</p>
            <p>Zip Code: 94103</p>
            <Link
              to="/edit-address"
              className="text-blue-500 hover:underline font-medium mt-2 block"
            >
              Edit Address
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
