import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Store/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ConfirmationModalName = ({ data, isOpen, onClose }) => {
    // console.log("data",data);
    
    const [token, setToken] = useState(localStorage.getItem("token"));
  const { user } = useAuth();

  const navigate = useNavigate();

  // Access environment variable using import.meta.env
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue('username', data?.username);
      // setValue('email', data?.email);
      // setValue('mobileNumber', data?.mobileNumber);
    }
  }, [user, setValue]);

  const submitProfileForm = async(formData) => {
    try {
      // Form submission logic here
      console.log("Dataa",formData);
      const response = await fetch(`${BASE_URL}/auth/updateProfile`, {
        // const response = await fetch('http://localhost:5000/api/auth/register', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`, // Indicating that JSON is being sent
        },
        body: JSON.stringify(formData), // Converting formData object to JSON string

        
    });


    console.log("Updation Response", response);
    const data = await response.json(); // Parsing the response data
    
   

    
    if (response.ok) {
      toast.success("Update Successfully");
      console.log('User Updated successfully:', data); // Success message

      navigate("/profile");

      setTimeout(() => {
          window.location.reload();
      }, 500);
  }
  else {
          
          
          toast( data.message);   
      

          console.log("Response",data);



  }
      
    } catch (error) {
      // Handle error
      console.log("error occur while updation", error.message);
      console.log(error);
      
      
    }
  };

  // If modal is not open, return null (won't render)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-BGColorYellow p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          &#10005;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Information</h2>
        <form onSubmit={handleSubmit(submitProfileForm)}>
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Enter First Name"
                {...register('username', { required: true })}
              />
              {errors.username && <span className="text-red-500 text-sm">Please enter your First Name</span>}
            </div>

            {/* Email */}
            {/* <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Enter your Email"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500 text-sm">Please enter your Email</span>}
            </div> */}

            {/* Mobile Number */}
            {/* <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                type="number"
                id="mobileNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                placeholder="Enter your Mobile Number"
                {...register('mobileNumber', { required: true })}
              />
              {errors.mobileNumber && <span className="text-red-500 text-sm">Please enter your Mobile Number</span>}
            </div> */}

          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationModalName;
