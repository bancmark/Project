import React from 'react'
import Image from "next/image";
import Logo from "@/public/66634daccb34e6d65a41c76d_download.svg"

const Navbar = () => {
    const menueItem = 'hover:bg-[#eff0ec] p-3 hover:cursor-pointer rounded-2xl'
    return (
        <div className='fixed top-6 left-0 right-0 z-50 flex justify-center'>
            <div className='bg-white flex px-6 py-3 rounded-full gap-10'>
                <Image src={Logo} alt="Logo" width={100} height={50} />
                <ul className='flex text-black items-center justify-center'>
                    <li className={menueItem}>Product</li>
                    <li className={menueItem}>Template</li>
                    <li className={menueItem}>Marketplace</li>
                    <li className={menueItem}>Learn</li>
                    <li className={menueItem}>Pricing</li>
                </ul>
                <div className='gap-4 ml-80 flex'>
                    <button className='bg-gray-100 text-black py-4 px-5 hover:cursor-pointer rounded-2xl hover:bg-[#e9e9e9]'>Log in</button>
                    <button className='bg-[#1e2330] text-white p-4 rounded-full hover:cursor-pointer hover:bg-[#262d3e]'>Sign up free</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
