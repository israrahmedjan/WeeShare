import React from 'react'
import HeaderPage from '../_components/header/Header'
import AboutTitle from '../_components/Home/AboutUs'
import Footer from '../_components/footer/Footer'
import CustomSlider from '../_components/Home/Slider'
import SemiCircleImages from '../_components/Home/SemiCircleImages'

function page() {
  return (
    <>
   <div className='mx-16'> <HeaderPage /></div>
     <div className='mx-16'><AboutTitle /></div> 

       {/* <div className='w-full bg-red-600'><CustomSlider /></div>
     */}
     <div className='w-full bg-[#0F172A] hidden md:block'><SemiCircleImages /></div>
    <Footer />
    </>
  )
}

export default page