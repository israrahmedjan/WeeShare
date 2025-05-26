'use client'
import Image from 'next/image';
import React from 'react'

function Footer() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const LineUrl = `${domain}/images/footerLline.png`;
   const DividerUrl = `${domain}/images/Divider.png`;
   const footerlogoUrl = `${domain}/images/footerlogo.png`;
    const facebookUrl = `${domain}/images/facebook.png`;
    const linkdenUrl = `${domain}/images/linkden.png`;
   const twitterUrl = `${domain}/images/twitter.png`;
   

  return (
    <div className='w-full bg-[#0F172A]'>

      <div className='flex flex-col items-center  text-white mt-[10px]'>
        <div><Image src={`${LineUrl}`} width={400} height={100} alt='image' /></div>
        <div className='text-base md:text-[35px] flex flex-col items-center mt-3'><span>Contact Us &</span>
          <span>Let’s Build Your Dream Project.</span></div>
          <button className='text-black bg-white md:px-5 py-2 font-semibold mt-10 rounded-md'>Contact Us </button>
        {/* footer links etc */}
        <div className="w-full mt-5 text-white grid grid-cols-1 md:grid-cols-4 gap-6 py-6 text-base md:text-[15px]">
  {/* Column 1 */}
  <div className='text-white'>
    <h3 className="text-lg font-semibold mb-2">Links</h3>
    <ul className="space-y-1">
      <li><a href="#" className="hover:underline">Web Development</a></li>
      <li><a href="#" className="hover:underline">Mobile Apps</a></li>
      <li><a href="#" className="hover:underline">UI/UX Design</a></li>
      <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
  </div>

  {/* Column 2 */}
  <div>
    <h3 className="text-lg font-semibold mb-2">Services</h3>
    <ul className="space-y-1">
      <li><a href="#" className="hover:underline">Content Marketing</a></li>
      <li><a href="#" className="hover:underline">UI/UX Designing</a></li>
      <li><a href="#" className="hover:underline">Custom Software Development</a></li>
      <li><a href="#" className="hover:underline">PPC Marketing</a></li>
    </ul>
  </div>

  {/* Column 3 */}
  <div>
    <h3 className="text-lg font-semibold mb-2">Focus</h3>
    <ul className="space-y-1">
      <li><a href="#" className="hover:underline">Performance Optimization</a></li>
      <li><a href="#" className="hover:underline">Responsive Designs</a></li>
      <li><a href="#" className="hover:underline">Website Maintenance</a></li>
      <li><a href="#" className="hover:underline">Mobile App Development</a></li>
    </ul>
  </div>

  {/* Column 4 */}
  <div>
    <h3 className="text-lg font-semibold mb-2">Legal</h3>
    <ul className="space-y-1">
      <li><a href="#" className="hover:underline">Market Research & Analysis</a></li>
      <li><a href="#" className="hover:underline">PriSocial Media Contentvacy Policy</a></li>
      <li><a href="#" className="hover:underline">Graphic Design</a></li>
      <li><a href="#" className="hover:underline">E-Commerce</a></li>
    </ul>
  </div>
</div>

 <div className=" relative w-full h-[2px]">
  <Image
    src={DividerUrl}
    alt="image"
    fill
    className="object-cover"
  />
</div>
{/* Footer Logo */}
<div className='w-full my-5'>
  <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
      <Image
    src={footerlogoUrl}
    width={150}
    height={150}
    alt='image'

  />
  <span>© 2025 SMB DigitalZone. All Rights Reserved. </span>
  <div className='flex gap-3'>
         <Image
    src={facebookUrl}
    width={40}
    height={40}
    alt='image'

  />
        <Image
    src={linkdenUrl}
    width={40}
    height={40}
    alt='image'

  />
        <Image
    src={twitterUrl}
    width={40}
    height={40}
    alt='image'

  />
  </div>
  </div>
</div>
      
      </div>
      

    </div>
  )
}

export default Footer