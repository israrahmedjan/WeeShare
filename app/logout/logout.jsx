'use client';
import React from 'react';
import Cookies from 'js-cookie';

export default function LogoutButton() {
  const handleLogout = () => {
    Cookies.remove('token');
    // Optionally redirect to login or homepage
    window.location.href = '/';
  };

  return (
    <button className='bg-[#0537AE] rounded-md  text-white px-5 py-1 cursor-pointer' onClick={handleLogout}>
      Logout
    </button>
  );
}
