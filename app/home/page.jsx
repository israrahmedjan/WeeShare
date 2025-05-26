import React from 'react'
import HeaderPage from '../_components/header/Header'
import AboutTitle from '../_components/Home/AboutUs'
import Footer from '../_components/footer/Footer'
import CustomSlider from '../_components/Home/Slider'
import SemiCircleImages from '../_components/Home/SemiCircleImages'
import HeroSlider from '../_components/Home/Slider'
import ThumbnailSlider from '../_components/Home/Slider'
import ArcSlider from '../_components/Home/Slider'
import GridSlider from '../_components/Home/Slider'
import ArcGridSlider from '../_components/Home/Slider'
import LightArcImages from '../_components/Home/SemiCircleImages'
import ArcImageSlider from '../_components/Home/Slider'

async function page() {

  return (
    <>

<div className='w-full md:mx-auto  flex justify-center flex-col items-center'>
  
   <div className='w-full  md:w-[1203px]  '> <HeaderPage /></div> 
    <div className='w-full md:w-[1203px]  '><AboutTitle /></div>  
    <div className='w-full bg-[#0F172A]  flex flex-col items-center'> <div className='w-full    '><ArcImageSlider /></div> </div> 

      {/* <div className='mx-16 w-[1203px]  border-green-500 border'><CustomSlider /></div>
     */}
     {/* <div className='mx-16 w-[1203px]  border-green-500 border'><SemiCircleImages /></div> */}
{/* <SemiCircleImages /></div> */}
    <div className='w-full flex flex-col items-center bg-[#0F172A]'><div className='mx-4 md:mx-16 md:w-[1203px]  '><Footer /></div></div>
   </div>
    </>
  )
}

export default page