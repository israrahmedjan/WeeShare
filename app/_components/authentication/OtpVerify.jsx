'use client';
import React, { useEffect, useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import Link from 'next/link';


function OtpVerify() {
  const [email, setEmail] = useState('israr12@gmail.com');
  const [password, setPassword] = useState('israr123');
  const [otpNumber, setotpNumber] = useState('');
  const [response, setResponse] = useState('');
  const [client,setclient] = useState(false);
  const [error,seterror] = useState(false);
  const [success,setsuccess] = useState(false);
  const [loading,setloading] = useState(false)

  const [otp,setotp] = useState(true);
     const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const bgImageBottom = domain + "/images/bg-gradiant-bottom.png";
    const bgImageTop = domain + "/images/bg-gradient-top.png";


  
  

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      otpNumber:'',
    },
  });

const handleOtp = async (data)=>
{
  const { email,otpNumber } = data;
  setloading(true);
  console.log("OTP is called!",otpNumber);
     try {
      const res = await fetch(`${domain}/api/otpVerify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,otpNumber }),
      });

      const data = await res.json();

      if (res.ok) {
       
      

      
          if(data.message)
        {
          setsuccess(true);
          setloading(false)
        }
       if(data.error)
        {
          seterror(true)
          setloading(false)
        }
      } else {
       
      }
    } catch (error) {
      
    }
}
useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      seterror(false);
   //   setsuccess(false);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // clear timer if component unmounts
  }
}, [error, success]);

  useEffect(()=>
{
setclient(true);
},[])


if(!client) return null;

  
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
<div className="h-[150px] w-full flex justify-center items-center flex-col gap-1 bg-[#0B0B0F]">


                <div className='w-full flex flex-col items-center'>

                    <div><Image src={`${domain}/images/logo.svg`} width={150} height={150} alt='logo Image' /></div>

<div className="relative w-full">
  {loading && (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 z-10">
      <span className="text-white text-xl opacity-90">Loading...</span>
    </div>
  )}
    
    {/* User activation through otp */}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOtp)} 
        className={`space-y-4 w-full md:w-[30%] mx-auto p-6 shadow-md rounded-xl transition-opacity duration-300 ${
    loading ? 'opacity-20 pointer-events-none' : 'opacity-100'
  }`}
>
       
        <div className='flex justify-center flex-col items-center text-white text-base'> <h1 className=' md:text-[27px] '>Verify Your Email!</h1>
 <p>Verify your email.</p>
  {error && (<p className='text-red-700 italic text-xl'>OTP or Email is mismatch!</p>)}
  {success && (<div className='bg-[#FFA500] text-black font-semibold rounded-2xl p-2 flex flex-col items-center'>
    <p className='p-4 italic text-2xl text-center'>Your Account activated Successfully!</p>
    <p className='text-3xl italic'>Click here to <Link  href={`${domain}`}><strong className='underline'>Login</strong></Link></p>
    
  </div>
  )}
 </div>
 
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-normal">Email</FormLabel>
              <FormControl>
          <Input
  placeholder="Enter email"
  {...field}
  onChange={(e) => {
    field.onChange(e);
   
  }}
  className="bg-white text-black hover:bg-white"
/>
              </FormControl>

              <FormMessage />
            </FormItem>

            
          )}
        />


  <FormField
          control={form.control}
          name="otpNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-normal">OTP Code</FormLabel>
              <FormControl>
          <Input
  placeholder="Enter OPT Code"
  {...field}
  onChange={(e) => {
    field.onChange(e);
   
  }}
  className="bg-white text-black hover:bg-white"
/>
              </FormControl>

              <FormMessage />
            </FormItem>

            
          )}
        />

     
       

<Button
  type="submit"
  className="w-full text-white font-medium py-2 px-6 rounded-md bg-gradient-to-r from-[#933FFE] to-[#18C8FF] hover:opacity-90 transition-all duration-300"
>
  Activate Your Account with OTP
</Button>
 
      </form>
    </Form>
</div>
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
  );
}

export default OtpVerify;
