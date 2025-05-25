'use client'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('')
  const [client,setclient] = useState(false);
    const router = useRouter();
  const searchParams = useSearchParams();

  const SortBy = (x)=>
  {
    console.log("Sort by Items",x);
    
   
const params = new URLSearchParams(searchParams);
   // params.set("page", "test"); // page=2 or any value
    params.set("sort", x); // page=2 or any value
    router.push(`/products?${params.toString()}`);

  }

  const handleSearch = ()=>
  {
      console.log("My values is", searchTerm);

      const params = new URLSearchParams(searchParams);
   // params.set("page", "test"); // page=2 or any value
    params.set("search", searchTerm); // page=2 or any value
    router.push(`/products?${params.toString()}`);
  }
   useEffect(()=>
   {
   setclient(true);
   },[router])
     if (!client) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-2 bg-gray-50 rounded-lg">
      {/* Search Box */}
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} onClick={(e)=>handleSearch()}  />
      </div>

      {/* Dropdown for Sort */}
      <select
        value={sortOption}
        onChange={(e) => SortBy(e.target.value)}
        // onClick={()=>SortBy()}
        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort by</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-low">Price (Low to High)</option>
        <option value="price-high">Price (High to Low)</option>
      </select>
    </div>
  )
}

export default Filter

