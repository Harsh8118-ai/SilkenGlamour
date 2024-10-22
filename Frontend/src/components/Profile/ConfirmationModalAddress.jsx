import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Store/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


const ConfirmationModalAddress = ({ data, isOpen, onClose }) => {
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
            setValue('street', data?.street);
            setValue('apartmentNumber', data?.apartmentNumber);
            setValue('town', data?.town);
            setValue('pincode', data?.pincode);
        }
    }, [user, setValue]);

    const submitProfileForm = async (formData) => {
        try {
            // Form submission logic here
            console.log("Dataa", formData);
            const response = await fetch(`${BASE_URL}/auth/updateAddress`, {
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
                toast.success("Address Update Successfully");
                console.log('Address Updated successfully:', data); // Success message

                navigate("/profile");

                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
            else {


                toast(data.message);


                console.log("Response", data);



            }

        } catch (error) {
            // Handle error
            console.log("Error occur while Updating Address", error.message);
            console.log(error);


        }
    };

    // If modal is not open, return null (won't render)
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <div className="bg-MainBGColorYellow p-6 rounded-lg shadow-lg max-w-lg w-full relative mx-4 sm:mx-0">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-800 text-bold"
                    >
                        <FaTimes className="h-6 w-6" />
                    </button>
                    <h2 className="text-2xl text-BGColorYellow font-bold mb-6 text-center">Your Address</h2>
                    <form onSubmit={handleSubmit(submitProfileForm)}>
                        <div className="space-y-4">
                            {/* Address Information */}
                            <div className="space-y-4">
                                {/* Street */}
                                <div>
                                    <label className="block text-BGColorYellow text-sm font-bold" htmlFor="street">
                                        Street
                                    </label>
                                    <input
                                        type="text"
                                        id="street"
                                        className="w-full px-3 py-2 text-gray-300 border border-gray-300 bg-gray-700 rounded-md focus:outline-none focus:border-green-500"
                                        placeholder="Enter Street"
                                        {...register('street', { required: true })}
                                    />
                                    {errors.street && <span className="text-red-500 text-sm">Please enter your Street</span>}
                                </div>

                                {/* Apartment Number */}
                                <div>
                                    <label className="block text-BGColorYellow text-sm font-bold" htmlFor="apartmentNumber">
                                        Apartment Number
                                    </label>
                                    <input
                                        type="text"
                                        id="apartmentNumber"
                                        className="w-full px-3 py-2 text-gray-300 border border-gray-300 bg-gray-700 rounded-md focus:outline-none focus:border-green-500"
                                        placeholder="Enter Apartment Number"
                                        {...register('apartmentNumber', { required: true })}
                                    />
                                    {errors.apartmentNumber && <span className="text-red-500 text-sm">Please enter your Apartment Number</span>}
                                </div>

                                {/* Town */}
                                <div>
                                    <label className="block text-BGColorYellow text-sm font-bold" htmlFor="town">
                                        Town
                                    </label>
                                    <input
                                        type="text"
                                        id="town"
                                        className="w-full px-3 py-2 text-gray-300 border border-gray-300 bg-gray-700 rounded-md focus:outline-none focus:border-green-500"
                                        placeholder="Enter Town"
                                        {...register('town', { required: true })}
                                    />
                                    {errors.town && <span className="text-red-500 text-sm">Please enter your Town</span>}
                                </div>

                                {/* Pincode */}
                                <div>
                                    <label className="block text-BGColorYellow text-sm font-bold" htmlFor="pincode">
                                        Pincode
                                    </label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        className="w-full px-3 py-2 text-gray-300 border border-gray-300 bg-gray-700 rounded-md focus:outline-none focus:border-green-500"
                                        placeholder="Enter Pincode"
                                        {...register('pincode', { required: true })}
                                    />
                                    {errors.pincode && <span className="text-red-500 text-sm">Please enter your Pincode</span>}
                                </div>
                            </div>

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

        </>
    );
};

export default ConfirmationModalAddress;
