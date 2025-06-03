import React from 'react'
import HeaderPage from '../_components/header/Header'
import AboutTitle from '../_components/Home/AboutUs'
import Footer from '../_components/footer/Footer'
import FadeUpTest from '../_components/Home/SliderDrag'
import TestimonialsSlider from '../_components/Home/Slider'

async function page() {


  

  return (
    <>

<div className='w-full md:mx-auto  flex justify-center flex-col items-center'>
  
   <div className='w-full  md:w-[1203px]  '> <HeaderPage /></div> 
    <div className='w-full md:w-[1203px]  '><AboutTitle /></div>  
 
   
 <div className='w-full flex flex-col items-center bg-[#0F172A]'> 
   <div className='w-full flex flex-col items-center bg-[#0F172A]'>
    <div className='mx-4 md:mx-16 md:w-[1203px]  '><TestimonialsSlider /></div>
    </div>
    </div>
 <div className='w-full flex flex-col items-center bg-[#0F172A]'>   <div className='w-full flex flex-col mt-12 items-center bg-[#0F172A]'><div className='mx-4 md:mx-16 md:w-[1203px]  '><Footer /></div></div></div>
   </div>
    </>
  )
}

export default page