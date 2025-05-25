import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/dbconfig";
// import users from "@/models/users";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";


export async function GET(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Replace '*' with your frontend domain for better security
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('page')) || 1;   // Default to 1 if not provided
    const limit = parseInt(searchParams.get('limit')) || 2; // Default to 10 if not provided
   let searchStr = searchParams.get('search') || ""; // Default to empty 0 if not provided
    let sort = searchParams.get('sort') || ""; // Default to empty 0 if not provided

    sort = await getSortObject(sort);

console.log("Search Str",searchStr);
    
     

  // if (!search) {
  //   return res.status(400).json({ error: "Search term is required" });
  // }
let skip = (page - 1) * limit;
    // console.log("Page Number", page);
    // console.log("Page serch ski[", (page - 1) * limit);
    const conn = await connectToDatabase();
  const productsCollection = conn.collection("Products");
   const totalItems = await productsCollection.countDocuments(); 
   //console.log("Total Items", totalItems);

 // const searchQuery = ""; // Yeh woh search term hai jo aap dhoondhna chahte hain

const data = await productsCollection
  .aggregate([
      {
      $match: {
        name: { $regex: searchStr, $options: 'i' }
      }
    },
    { $sort: sort },
    {
      $lookup: {
        from: 'Categories',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category_details'
      }, 
    },
    {
      $lookup: {
        from: 'ProductGallery',
        localField: 'galleryId',
        foreignField: '_id',
        as: 'ProductGallery'
      }
    },
    { $unwind: '$category_details' },
    {
      $skip: skip // Pehle skip karega
    },
    {
      $limit: limit // Sirf limit tak documents return karega
    },
    {
      $project: {
        productId: {
          $convert: {
            input: '$_id',
            to: 'string',
            onError: null,
            onNull: null
          }
        },
        productName: '$name',
        image: {
          $arrayElemAt: ['$ProductGallery.image', 0] 
        },
        categoryName: '$category_details.name',
        productSlug:'$slug',
        categorySlug: '$category_details.slug',
        Descriptions: '$category_details.description',
        price: 1,
        _id: 0
      }
    }
  ])
  .toArray(); // Convert the aggregation cursor to an array
  
    //console.log("Dat:", data);
   // console.log("New Gallery Added",data);
  
    if (data.length === 0) {
      // If data is empty, return a response indicating no products were found
      return NextResponse.json(
        { message: "No products available!", data: [] },
        { status: 404 }
      );
    }
  //console.log("API product ", data)
    // If data is not empty, return the data
    return NextResponse.json(
      { message: "Products Available!", data,totalItems },
      { status: 200 }
    );
  
  } catch (error) {
    console.error("Error during aggregation:", error.message);
  
    // Return an error response if something went wrong
    return NextResponse.json(
      { message: "An error occurred while fetching products!", error: error.message },
      { status: 500 }
    );
  }


}




const getSortObject = async (sort) => {
  switch (sort) {
    case 'price-low':
      return { price: 1 };
    case 'price-high':
      return { price: -1 };
    case 'name-asc':
      return { name: 1 };
    case 'name-desc':
      return { name: -1 };
    default:
      return {name:1}; // default sort (no sorting)
  }
};
