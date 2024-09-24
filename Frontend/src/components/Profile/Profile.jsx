import React from 'react'

export default function () {

    const TextColor = 'bg-gradient-to-r from-[#C8A683] to-[#B6855C] bg-clip-text text-transparent';
    const BGColor = 'bg-gradient-to-t from-[#2D2C2A] via-[#ACA69E] to-[#EBE0D1]';
    const AccentColor = 'bg-[#E8C285]';  // A luxurious gold tone

  return (
    <>

    <div className={`${BGColor} min-h-screen flex items-center justify-center`}>
  <h1 className={`${TextColor} text-4xl font-bold`}>
    Welcome to Our Home Salon Service
  </h1>
  <button className={`${AccentColor} px-6 py-2 text-white rounded-lg`}>
    Book Appointment
  </button>
</div>
    </>
  )
}
