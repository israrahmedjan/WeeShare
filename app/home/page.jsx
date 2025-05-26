import React from 'react'
import HeaderPage from '../_components/header/Header'
import AboutTitle from '../_components/Home/AboutUs'
import Footer from '../_components/footer/Footer'
import CustomSlider from '../_components/Home/Slider'
import SemiCircleImages from '../_components/Home/SemiCircleImages'

async function page() {

  return (
    <>

<div className='w-full mx-auto border-gray-600 border-2 flex justify-center flex-col items-center'>
  
   <div className='w-full  md:w-[1203px] border-red-500 border'> <HeaderPage /></div> 
    <div className='w-full md:w-[1203px]  border-green-500 border'><AboutTitle /></div>  

      {/* <div className='mx-16 w-[1203px]  border-green-500 border'><CustomSlider /></div>
     */}
     {/* <div className='mx-16 w-[1203px]  border-green-500 border'><SemiCircleImages /></div> */}
{/* <SemiCircleImages /></div> */}
    <div className='w-full flex flex-col items-center bg-[#0F172A]'><div className='mx-16 w-[1203px]  border-green-500 border'><Footer /></div></div>
   </div>
    </>
  )
}

export default page