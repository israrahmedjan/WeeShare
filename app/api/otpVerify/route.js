import { NextResponse } from 'next/server';
import { addUser } from '@/lib/users';
import connectToDatabase from '@/lib/dbconfig';
import bcrypt from 'bcryptjs';
import { Resend } from 'resend';


export async function POST(req) {


try{

const { email, otpNumber } = await req.json();


console.log('Fnd Out OTP', otpNumber,email)

const conn = await connectToDatabase();
const userCollection = conn.collection("user");

// Step 1: find the user by email and otp
const existingUser = await userCollection.findOne({ email, otpNumber });

if (existingUser) {
  // Step 2: update the `verify` field to 1
  const result = await userCollection.updateOne(
    { email },               // filter
    { $set: { verify: 1 } }  // update
  );

  //console.log("Verification updated:", result.modifiedCount);
  return NextResponse.json({ message: 'Welcome You Have Successfull Verified! ' });
} else {
 // console.log("User not found or OTP mismatch");
  throw new Error('User not found or OTP mismatch');
}

//     const conn = await connectToDatabase();
//     const userCollection = conn.collection("user");


//  const existingUser = await userCollection.findOne({ email });

//   if (existingUser) {
//     //return NextResponse.json({ error: 'User Already Exist!' });
//      throw new Error('User already exists');
//   }

//      return NextResponse.json({ message: 'Welcome You Have Successfull Verified! ' });





// } 
// catch(error)
// {
// return NextResponse.json({ error: error.message });
// }
}
catch(error)
{
  return NextResponse.json({ error: error.message });
}  
  
}

