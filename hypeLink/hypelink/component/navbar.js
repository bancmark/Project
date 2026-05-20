import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className='m-4'>
                <ul className='flex gap-6 justify-end p-3 bg-purple-600 rounded-2xl'>
                    <Link href = "/" className='nav_li'>Home</Link>
                    <li className='nav_li'>About</li>
                    <Link href = "/shorturl" className='nav_li'>Shortner </Link>
                    <li className='nav_li'>Contact</li>
                    <li className='nav_li'>Github</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
