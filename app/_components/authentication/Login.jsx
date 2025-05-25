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

function Login() {
  const [email, setEmail] = useState('israr@gmail.com');
  const [password, setPassword] = useState('israr123');
  const [response, setResponse] = useState('');
  const [client,setclient] = useState(false);
   const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
   const [error,seterror] = useState(false);
   const [success,setsuccess] = useState(false);
   const [loading,setloading] = useState(false);
  
  

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
  //  console.log("Login Data:", data);
    const { email, password } = data;
   // console.log("skdf", email,password)
    // API call, login logic etc.

    try {
      setloading(true);
      const res = await fetch(`${domain}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(`Login Success! Token: ${data.token}`);
        
        window.location.href= domain+"/home";
        // Optional: store token in localStorage
        //localStorage.setItem('token', data.token);
        seterror(true)
      } else {
        //seterror(true);
        if (res.status === 401) {
          seterror(true)
          setloading(false)
        }
      }
    } catch (error) {
     // setResponse(`Error: ${error.message}`);
     console.log("Error happend!")
      
    }

  };

  useEffect(()=>
{
setclient(true);
},[])

if(!client) return null;

  
  return (
    <>

<div className="relative">
  {loading && (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 z-10">
      <span className="text-white text-xl opacity-90">Loading...</span>
    </div>
  )}
    <Form {...form}>
    <form
  onSubmit={form.handleSubmit(onSubmit)}
  className={`space-y-4 w-full md:w-[30%] mx-auto p-6 shadow-md rounded-xl transition-opacity duration-300 ${
    loading ? 'opacity-20 pointer-events-none' : 'opacity-100'
  }`}
>
         <h1 className='text-white text-base md:text-[27px] flex justify-center'>Welcome Back, 👋</h1>
 {error && <p className="text-red-600 text-base italic flex justify-center items-center">The email or password you entered is incorrect. Please try again.</p>}        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field}
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
              <FormLabel>Password</FormLabel>
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
  Sign In
</Button>
 
      </form>
    </Form>
    </div>
    </>
  );
}

export default Login;
