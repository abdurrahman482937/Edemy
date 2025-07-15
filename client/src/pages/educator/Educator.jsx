import Footer from '@/components/educator/Footer'
import Navbar from '@/components/educator/Navbar'
import Sidebar from '@/components/educator/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Educator() {
    return (
        <div className='text-default min-h-screen bg-white'>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    {<Outlet />}
                </div>
            </div>
            <Footer />
        </div>
    )
}
