"use client"
import React from 'react'
import Image from "next/image";
import { useState, useEffect } from 'react'
import Link from "next/link";
import Logo from "@/public/66634daccb34e6d65a41c76d_download.svg"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    if (
        pathname.startsWith("/login") ||
        pathname.startsWith("/dashboard")
    ) {
        return null;
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < 10) {
                setVisible(true)                          // always show at top
            } else if (currentScrollY > lastScrollY) {
                setVisible(false)                         // scrolling down → hide
            } else {
                setVisible(true)                          // scrolling up → show
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])
    const menueItem = 'hover:bg-[#eff0ec] p-3 hover:cursor-pointer rounded-2xl'
    return (
        <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-[120%]'}`}>
            <div className='bg-white flex px-6 py-3 rounded-full gap-10'>
                <Image src={Logo} alt="Logo" width={100} height={50} className='hover:cursor-pointer' />
                <ul className='flex text-black items-center justify-center'>
                    <li className={menueItem}>Product</li>
                    <li className={menueItem}>Template</li>
                    <li className={menueItem}>Marketplace</li>
                    <li className={menueItem}>Learn</li>
                    <li className={menueItem}>Pricing</li>
                </ul>
                <div className='gap-4 ml-80 flex'>
                    <Link href="/login" className='gap-4'>
                        <button className='bg-gray-100 text-black py-4 px-5 hover:cursor-pointer rounded-2xl hover:bg-[#e9e9e9]'>Log in</button>
                        <button className='bg-[#1e2330] text-white p-4 rounded-full hover:cursor-pointer hover:bg-[#262d3e]'>Sign up free</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
