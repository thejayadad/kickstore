'use client'

import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-cente w-fullr">
        <div className='max-w-screen-lg	mx-auto bg-red-300'>
    <div className="text-gray-600 text-xl font-bold">
      Your Logo
    </div>

    <div className="flex items-center">
      <div className="text-gray-600  pr-4 cursor-pointer">
        <FaShoppingCart size={24} />
      </div>

      <button
        className="text-gray-600  border border-white px-2 py-1 transition duration-300 hover:bg-white hover:text-black hover:border-transparent hover:shadow-md"
        onClick={() => {
        }}
      >
        Logout
      </button>
    </div>
    </div>
  </nav>
  )
}

export default Navbar