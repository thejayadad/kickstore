'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart } from 'react-icons/fi'; // Import icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full px-6 bg-secondary text-white border-solid border-1 border-primary ${
        isScrolled ? 'fixed top-0 z-50' : ''
      }`}
    >
      <div className='flex justify-between items-center h-[80px] max-w-screen-lg mx-auto'>
        <div>
          <Link href='/'>
            <span>
              <img src='/logo.png' alt='Kickshare Logo' className='w-20 h-20' />
            </span>
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='relative group'>
            <FiShoppingCart className='text-lg cursor-pointer group-hover:text-gray-900' />

          </div>
          <FiHeart className='text-xg cursor-pointer' />
          <button className='cursor-pointer text-lg'>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
