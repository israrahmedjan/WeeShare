import { NextResponse } from 'next/server';
import { addUser } from '@/lib/users';
import connectToDatabase from '@/lib/dbconfig';
import bcrypt from 'bcryptjs';
import { Resend } from 'resend';


export async function POST(req) {


try{

const { email, password } = await req.json();
const resend = new Resend("re_ffKFQysa_4Bdt5q6yhPmfP2a3ddFYZaDj");
const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
const verifyURL = `${domain}/otpVerify`;
 let otp = generateNumericOTP();
 

  
  
const hashed = await bcrypt.hash(password, 10);
    const conn = await connectToDatabase();
    const userCollection = conn.collection("user");


 const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    //return NextResponse.json({ error: 'User Already Exist!' });
     throw new Error('User already exists');
  }

  const result = await userCollection.insertOne({
    email,
    password: hashed,
    otpNumber:otp,
    verify:0,
    createdAt: new Date(),
    
  });
  if(result)
  {
   // console.log("User has been added to MongoDB:", result.insertedId);

 const data = await resend.emails.send({
      from: 'OTP Code <onboarding@resend.dev>', // "from" must be verified domain
      to: [email],
       subject: 'Your OTP Code',
  html: `<div style="font-family: sans-serif; font-size: 16px;">
           <p>Hello,</p>
           <p>Your OTP code is: <strong>${otp}</strong></p>
           <p>Please enter this code to verify your account.</p>
           <p><strong><a href=${verifyURL} >Click here to Verify OTP  </a></strong> </p>
           <br/>
           <p>Thanks,<br/>Your Team</p>
         </div>`,
    });
  if(data){ console.log("Email has been send")}
     return NextResponse.json({ message: 'User created successfully' });
  }





} 
catch(error)
{
return NextResponse.json({ error: error.message });
}
  
  
  
  
function generateNumericOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // 0–9
  }
  return otp;
}
  //await addUser(email, password);

}
