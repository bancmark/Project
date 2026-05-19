import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='m-4'>
                <ul className='flex gap-6 justify-end p-3 bg-purple-600 rounded-2xl'>
                    <li className='nav_li'>Home</li>
                    <li className='nav_li'>About</li>
                    <li className='nav_li'>Shortner </li>
                    <li className='nav_li'>Contact</li>
                    <li className='nav_li'>Github</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
