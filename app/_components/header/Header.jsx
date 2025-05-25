'use client'
import Image from 'next/image';
import React from 'react'
import { ChevronDown, ChevronRight,Menu, X  } from 'lucide-react';
import { useState } from 'react';


function HeaderPage() {
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const logoURL = domain + "/images/logo.png";
   const [openDropdown, setOpenDropdown] = useState({
    services: false,
    services2: false,
    services3: false,
    services4: false,
    services5: false,
  });

  const handleDropdown = (key, isOpen) => {
    setTimeout(() => {
          setOpenDropdown(prev => ({
      ...prev,
      [key]: isOpen,
    }));
    }, 200);
  
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    {/* Header for large devices and medium devics */}
    <div className='text-white  hidden md:block '>

       <div className="w-full px-16 bg-[#FCFCFC] ">
  {/* Top Bar: Logo Left, Text Right */}
  <div className="flex justify-between items-center h-[100px] mb-0">
    <div className="relative w-[200px] h-[100px]"> {/* adjust as needed */}
  <Image
    src={`${domain}/images/logo.png`}
    alt="logo image"
    fill
    className="object-contain"
  />
</div>
  <div className="w-full px-16  bg-[#FCFCFC] font-semibold text-[#000000] text-base">
      <nav className="flex space-x-8 md:text-[14px] items-center relative h-[40px]">
        <a href="#">Home{logoURL}</a>
        
        {/* About Us Dropdown */}
        <div
          className="relative"
          onMouseOver={() => handleDropdown('services2', true)}
          onMouseLeave={() => handleDropdown('services2', false)}
        >
          <button className="flex items-center space-x-1">
            <span>About Us</span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services2 && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

        
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseOver={() => handleDropdown('services', true)}
          onMouseLeave={() => handleDropdown('services', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Services</span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

        
            </div>
          )}
        </div>


<a href="#">Our Creation</a>
<a href="#">Case Studies</a>
<a href="#">Insight Hub</a>


    {/* Careers Dropdown */}
        <div
          className="relative"
          onMouseOver={() => handleDropdown('services3', true)}
          onMouseLeave={() => handleDropdown('services3', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Careers</span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services3 && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

        
            </div>
          )}
        </div>
        <a href="#">Visual Hub</a>
      </nav>
    </div>
 
  <div className="text-base  flex items-center text-[#0537AE] md:w-[139px] gap-4"><button className='bg-[#0537AE] rounded-md text-white px-5 py-1'>LogOut</button></div>
 
  </div>


</div>
 {/* Bottom Bar: Menu (visible from md and up) */}


    </div>

    {/* Mobile devices header */}
 <div className=" md:hidden bg-[#FCFCFC] text-black px-4 py-3">
      {/* Top Row: Logo + Book Button + Toggle */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image width={120} height={40} src={`${domain}/images/logo.png`} alt="logo" />
        </div>

        {/* Book Now */}
        <div className="text-base flex flex-col items-end">
         
          <button className="bg-[#0537AE] text-white text-sm px-2 py-1 rounded">
            Log Out
          </button>
        </div>

        {/* Hamburger or Close Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black ml-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#FCFCFC] text-black mt-3 rounded shadow-lg text-sm">
          <a href="#" className="block px-4 py-2 border-b border-white">Home</a>
          <a href="#" className="block px-4 py-2 border-b border-white">About</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Luxury Boats</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Canal Cruises</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Whixall Marina</a>
          <a href="#" className="block px-4 py-2">Contact</a>
        </div>
      )}
    </div>


    </>
  )
}

export default HeaderPage