'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutTitle() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  const imageURL = `${domain}/images/bg-about.jpg`;

  const imageRight = `${domain}/images/about-right.png`;
  const imageLeft = `${domain}/images/about-left.png`;

const gridimage = `${domain}/images/grid.png`;
const imageDate = `${domain}/images/date.jpg`;

  return (
    <>
  
{/* //   For Large Devices */}

<div className='hidden md:block'>
<div className='flex justify-between mt-2 w-[100%] border-red-500 border mx-0'>
  <h1
    className="text-[100px] md:text-[200px] xl:text-[25.6rem] lg:text-[18.2rem] border-green-400 border text-transparent bg-clip-text bg-center bg-cover"
    style={{
      fontFamily: 'Bebas Neue, sans-serif',
      letterSpacing: '0.1',
      lineHeight: '0.8',
      backgroundImage: `
        linear-gradient(rgba(5, 55, 174, 0.7), rgba(5, 55, 174, 0.7)),
        url(${imageURL})
      `,
    }}
  >
    ABOUT US
  </h1>
</div>
   {/* <div className="flex justify-center items-center md:h-[350px] lg:h-[400px] bg-white  mt-0 p-0 overflow-hidden border-red-500 border">
  <h1
    className="text-[200px] lg:text-[480px] border-green-400 border text-transparent bg-clip-text bg-center bg-cover"
    style={{
      fontFamily: 'Bebas Neue, sans-serif',
      letterSpacing: '0.5px',
      lineHeight: '1.2', // <-- Add this
      backgroundImage: `
        linear-gradient(rgba(5, 55, 174, 0.7), rgba(5, 55, 174, 0.7)),
        url(${imageURL})
      `,
      // backgroundSize: 'contain',
    }}
  >
    ABOUT US
  </h1>
</div> */}


{/* About us text area */}
   <div className="flex justify-between flex-col md:flex-row gap-5"
   >
  <div className="w-full md:w-[65%] h-[400px]"  
    style={{
    backgroundImage: `url(${gridimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  
  
  }}>
    <h1 className="text-[25px] font-bold md:text-[48px] text-black mx-0">
        Welcome to <span className='text-[#FFA500]'>SMB DigitalZone,</span>
</h1>
<div className="flex text-black flex-col md:flex-row">
  <div className="w-full md:w-[40%]"></div> {/* 25% empty */}
  <div className="w-full md:w-[60%] flex flex-col p-2">
  <p className='text-base md:text-[32px]'>
    your cosmic command center
for digital supremacy in Dubai,</p>
<p><span className='font-semibold text-base md:text-[32px]'>United Arab Emirates!</span>

  </p>
   <p className='text-base md:text-[16px] pt-3'>
   At SMB DigitalZone, we're more than just a digital marketing agency. we're your 
   celestial navigators on a cosmic voyage through the ever-evolving digital universe.
  
  </p>
<p className='text-base md:text-[16px] pt-3'>
  Our mission? To guide businesses like yours through the nebulous digital realm and 
  ensure you thrive amidst its swirling challenges and opportunities. We've assembled a star-studded
   team of seasoned navigators, each dedicated to plotting a course to your success.</p>
  </div> {/* 75% content */}
</div>
  </div>
    <div
      className="w-full lg:w-[35%] bg-cover bg-center h-[350px] md:h-[480px]"
      style={{ backgroundImage: `url(${imageRight})`,
       backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat', }}
    >
    
    </div>
</div>


{/* About below section */}

            <div className='flex  flex-col md:flex-row h-[333px] justify-between'>
                <div className=' relative top:0 md:-top-[150px] w-full md:w-[50%] h-[500px] z-20'
                 style={{ backgroundImage: `url(${imageLeft})`,
       backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat', }}
                ></div>
                <div className='w-full h-[320px] flex justify-start'
                  style={{ backgroundImage: `url(${imageDate})`,
       backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', }}
                >
                    {/* {imageDate}
                     <Image
                       src={`${imageDate}`}
                      width={400}
                      height={200}
                      alt='image'
                       className="object-contain z-10"
                     /> */}
                </div>
                </div>
                </div>

{/* Slider area */}


{/* For small devicess */}
<div className='flex flex-col mx-4 md:hidden mt-2'>

<h1
    className="text-[100px] border-green-400 border text-transparent bg-clip-text bg-center bg-cover"
    style={{
      fontFamily: 'Bebas Neue, sans-serif',
      letterSpacing: '0.1',
      lineHeight: '0.8',
      backgroundImage: `
        linear-gradient(rgba(5, 55, 174, 0.7), rgba(5, 55, 174, 0.7)),
        url(${imageURL})
      `,
    }}
  >
    ABOUT US
  </h1>


 <div className="flex justify-between flex-col md:flex-row gap-5"
   >
  <div className="w-full md:w-[65%] h-[400px]"  
    style={{
    backgroundImage: `url(${gridimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  
  
  }}>
    <h1 className="text-[20px] font-bold md:text-[48px] text-black mx-0">
        Welcome to <span className='text-[#FFA500]'>SMB DigitalZone,</span>
</h1>
<div className="flex text-black flex-col">
  <div className="w-full md:w-[40%]"></div> {/* 25% empty */}
  <div className="w-full md:w-[60%] flex flex-col p-2">
  <p className='text-base md:text-[32px]'>
    your cosmic command center
for digital supremacy in Dubai,</p>
<p><span className='font-semibold text-base md:text-[32px]'>United Arab Emirates!</span>

  </p>
   <p className='text-base md:text-[16px] pt-3'>
   At SMB DigitalZone, we're more than just a digital marketing agency. we're your 
   celestial navigators on a cosmic voyage through the ever-evolving digital universe.
  
  </p>
<p className='text-base md:text-[16px] pt-3'>
  Our mission? To guide businesses like yours through the nebulous digital realm and 
  ensure you thrive amidst its swirling challenges and opportunities. We've assembled a star-studded
   team of seasoned navigators, each dedicated to plotting a course to your success.</p>
  </div> {/* 75% content */}
</div>
  </div>
    <div
      className="w-full h-[350px] mx-auto"
      style={{ backgroundImage: `url(${imageRight})`,
       backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', }}
    >
    
    </div>
</div>  

            <div className=''>
                <div className='w-full md:w-[50%] h-[500px]'
                 style={{ backgroundImage: `url(${imageLeft})`,
       backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat', }}
                ></div>
                <div className='w-full h-[320px] flex justify-start'
                  style={{ backgroundImage: `url(${imageDate})`,
       backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', }}
                >
                    {/* {imageDate}
                     <Image
                       src={`${imageDate}`}
                      width={400}
                      height={200}
                      alt='image'
                       className="object-contain z-10"
                     /> */}
                </div>
                </div>
                
</div>
              


    </>
   
  );
}
