"use client";



import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";



export function Listing({ data }) {
 
 const [client,setclient] = useState(false);
 useEffect(()=>
 {
 setclient(true);
 },[])
   if (!client) return null;
  return (
    <div className="rounded-md border">
      
     {data.length !=0 && (  <Table className="w-full">
        <TableHeader>
            <TableRow>
                <TableHead>
                  Sr.No
                </TableHead>
                <TableHead>
                  Product Name
                </TableHead>
                <TableHead>
                  Category
                </TableHead>
                   <TableHead>
                  Price
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
     {data.map((item, i) => (
  <TableRow key={i}>
    <TableCell>
              {i=i+1}
            </TableCell>
            <TableCell>
              {item.productName}
            </TableCell>
            <TableCell>
              {item.categoryName}
            </TableCell>
            <TableCell>
              {item.price}
            </TableCell>
    </TableRow>
))}
         
                    </TableBody>
      </Table>
    
    
    )}



    
    </div>
  );
}
