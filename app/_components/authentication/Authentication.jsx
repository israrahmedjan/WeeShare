'use client'
import React, { useState } from 'react'
import Login from './Login'
import Link from 'next/link';
import Image from 'next/image';
import SignUp from './SignUp';

function Authentication() {
    const [signup, setsignup] = useState(false);
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const bgImageBottom = domain + "/images/bg-gradiant-bottom.png";
    const bgImageTop = domain + "/images/bg-gradient-top.png";

    


    return (
        <>
        <div className='relative'>

                 <div
  className="bg-[#0B0B0F] h-[300px]"
  style={{
    backgroundImage: `url(${bgImageTop})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center' // ✅ positions image on right side, vertically centered
  }}
>
  
</div>

            <div className="h-screen w-full flex justify-center items-center flex-col gap-6 bg-[#0B0B0F]">


                <div className='w-full flex flex-col items-center max-h-[200px]'>

                    <div className='text-white'><Image src={`${domain}/images/logo.svg`} width={150} height={150} alt='logo Image' /> </div>


                    {!signup && (<div className='w-full'><Login />
                        <div className='text-white flex flex-col items-center'>
                            <h1 >If you don’t have an account, please sign up first </h1>
                            <Link href="/" className='text-2xl font-semibold' onClick={(() => setsignup(!signup))}>
                                Sign Up</Link></div>

                    </div>)}

                    {signup && (<div className='w-full'><SignUp />
                        <div className='text-white flex flex-col items-center'>
                            <h1 >If you already have an account, please sign in </h1>
                            <Link href="/" className='text-2xl font-semibold' onClick={(() => setsignup(!signup))}>
                                Sign In</Link></div>
                    </div>
                    )}



                </div>
            </div>
           <div
  className="bg-[#0B0B0F] h-[200px]"
  style={{
    backgroundImage: `url(${bgImageBottom})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center' // ✅ positions image on right side, vertically centered
  }}
>
  
</div>

</div>

        </>

    )
}

export default Authentication