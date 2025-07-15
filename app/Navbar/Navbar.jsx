"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Navbar() {

    let pathName = usePathname()
    const links = [
        { path: '/', name: "Home" },
        { path: '/about', name: "About Us" },
        { path: '/stay', name: "Stay Options" },
        { path: '/services', name: "Services" },
        { path: '/contact', name: "Contact Us" },

    ]

    const [isOpen, setIsOpen] = useState(false)
    let handleOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (<>
        <div className='fixed z-[9] shadow-md backdrop-blur-lg bg-green/50 w-full h-20 flex items-center justify-between p-4 md:px-[120px] overflow-hidden'>
            <Link href={'/'}>
                <h1 className='text-3xl text-white tracking-wider shrink-0 font-Playfair_Display '>Blue Nest</h1>
            </Link>
            <nav>
                <ul className='hidden md:flex items-center gap-12'>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <Link className={pathName === link.path ? 'active-link link' : "link"} href={link.path}> {link.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>


            <button onClick={handleOpen} className='cursor-pointer md:hidden'>
                <i className='fa-solid fa-bars text-2xl text-white'></i>
            </button>
        </div>




            <div className={`${isOpen? 'translate-x-0':'translate-x-full'} transition-all duration-300 ease-in-out  bg-green/50 shadow-md backdrop-blur-lg fixed h-full end-0 w-[300px] z-50 flex overflow-hidden  `}>
                <ul className='flex flex-col gap-5 pl-9 pt-16 '>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <Link onClick={()=>setIsOpen(false)} className={pathName === link.path ? 'active-link link ' : "link"} href={link.path}> {link.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={handleOpen} className='cursor-pointer absolute end-6 top-7'>
                    <i className='fa-solid fa-xmark text-2xl text-white '></i>
                </button>
            </div>


    </>)
}
