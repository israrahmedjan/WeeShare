'use client'

import { useEffect, useState } from "react"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from "@/components/ui/sidebar"

import LogoutButton from "@/app/logout/logout"
import Image from "next/image";
import Link from "next/link";
import { ChartColumnStacked, FolderKanban, Home, LogOut, Plus, Store, Users } from "lucide-react";

export function AppSidebar() {
  const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN; 
  return (
    <>
    

        <Sidebar>
          <SidebarHeader>
            <h2 className="text-xl font-bold px-4 py-2"><Link href={`${domain}`}><Image src={`${domain}/images/logo.png`} width={125} height={125} alt="Logo Image" /></Link></h2>
          </SidebarHeader>
         
          <SidebarContent>
          <SidebarGroup title="Home" className="border-gray-200 border-b">
             <div className="flex items-center"><Home size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Dashboard</Link></div>
             <div className="flex items-center"><Store size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Orders</Link></div>
            </SidebarGroup>

            <SidebarGroup title="Products" className="border-gray-200 border-b">
             <div className="flex items-center"><Plus size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Add Products</Link></div>
             <div className="flex items-center"><FolderKanban size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Products</Link></div>
            </SidebarGroup>
            <SidebarGroup title="Products" className="border-gray-200 border-b">
             <div className="flex items-center"><Plus size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Add Category</Link></div>
             <div className="flex items-center"><ChartColumnStacked size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Category</Link></div>
            </SidebarGroup>
            <SidebarGroup title="Products" className="border-gray-200 border-b">
             <div className="flex items-center"><Users size={18} /><Link href={`${domain}/products`} className="block px-1 py-2 hover:bg-gray-100 rounded">Users</Link></div>
            </SidebarGroup>
            <SidebarGroup title="Setting" className="border-gray-200 border-b">
              <div className="flex"><LogOut /><LogoutButton /></div>
             
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <p className="text-xs text-center p-4">© 2025</p>
          </SidebarFooter>
        </Sidebar>
    </>
  )
}
