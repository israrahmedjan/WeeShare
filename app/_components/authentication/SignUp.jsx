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
import Link from 'next/link';


function SignUp() {
  const [email, setEmail] = useState('israr12@gmail.com');
  const [password, setPassword] = useState('israr123');
  const [otpNumber, setotpNumber] = useState('');
  const [response, setResponse] = useState('');
  const [client,setclient] = useState(false);
  const [error,seterror] = useState(false);
  const [success,setsuccess] = useState(false);

  const [otp,setotp] = useState(false);
  const [loading,setloading] = useState(false)
   const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;

  
  

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      otpNumber:'',
    },
  });

  const onSubmit = async (data) => {
   
    setloading(true)
    const { email, password } = data;
   
    try {
      const res = await fetch(`${domain}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if(data.error)
        {
          seterror(true)
        }
          if(data.message)
        {
        
          setsuccess(true)
          setotp(true)
          setloading(false)
        }
       
        // setResponse(`Sign Up Success! Token: ${data.token}`);
        // window.location.href= "/"
        // Optional: store token in localStorage
        //localStorage.setItem('token', data.token);
      } else {
        setResponse(`Sign Up Failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }

  };

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
{/* User Sign Up page */}
<div className="relative">
  {loading && (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 z-10">
      <span className="text-white text-xl opacity-90">Waiting...</span>
    </div>
  )}
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
     className={`space-y-4 w-full md:w-[30%] mx-auto p-6 shadow-md rounded-xl transition-opacity duration-300 ${
    loading ? 'opacity-20 pointer-events-none' : 'opacity-100'
  }`}
>
       
        <div className='flex justify-center flex-col items-center text-white text-base'> <h1 className=' md:text-[27px] '>Create an Account!</h1>
 <p>Create a new account here.</p>
  {error && (<p className='text-red-700 italic text-base'>User Already Exist!</p>)}
  {success && (<div className='p-4 mt-2 rounded-2xl bg-[#FFA500] flex justify-center flex-col items-center'>
    <p className='text-black font-semibold italic text-xl'>Thank you for signing up!</p>
    <p className='text-black italic text-xl text-center'>Vefification code has been sent to your email !</p>


<Link className='text-2xl text-black italic font-semibold underline' href={`${domain}/otpVerify`}>Click here to verify by OTP</Link>
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
    console.log("Email changed to:", e.target.value);
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-normal">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" {...field}
                onChange={(e) => {
    field.onChange(e);
    console.log("Email changed to:", e.target.value);
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
  Sign Up
</Button>
 
      </form>
    </Form>
    </div>
 
    </>
  );
}

export default SignUp;
