import bcrypt from 'bcryptjs';
import connectToDatabase from './dbconfig';
import { NextResponse } from 'next/server';

const users = []; // Replace with real DB in production

export async function addUser(email, password) {
  
  try
  {
 const hashed = await bcrypt.hash(password, 10);
    const conn = await connectToDatabase();
    const userCollection = conn.collection("user");


  //     const existingUser = await userCollection.findOne({ email });

  // if (existingUser) {
  //   throw new Error('Email already exists. Please use a different one.');
  // }

  const result = await userCollection.insertOne({
    email,
    password: hashed,
    verify:1,
    createdAt: new Date(),
    
  });
  if(result)
  {
    console.log("User has been added to MongoDB:", result.insertedId);
     return NextResponse.json({ message: 'User created successfully' });
  }
  }
  catch(error)
  {
    console.log("Error", error.message)
  }
 

  
  
}

export function findUser(email) {
  return users.find(u => u.email === email);
}

export async function validateUser(email, password) {

try {
    const conn = await connectToDatabase();
    const userCollection = conn.collection("user");

    const user = await userCollection.findOne({ email });

    if (!user) {
      return false; // User not found
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    return isPasswordValid; // true if matched, false otherwise
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
}
