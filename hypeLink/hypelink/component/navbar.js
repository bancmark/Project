import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className=''>
            <ul className='flex gap-3 justify-end p-4 bg-purple-600'>
                <li className='cursor-pointer scale-110'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Shortner</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Github</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
