import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-3 px-6 py-6 text-white fixed right-3 left-3 top-0 z-50 rounded-2xl bg-white/10 backdrop-blur-md border-b border-white/20'>
            <div className='logo cursor-pointer'>SafePass</div>
            <div>
                <ul className='flex gap-7 px-3'>
                    <li className='Navbar_items'>Home</li>
                    <li className='Navbar_items'>About</li>
                    <li className='Navbar_items'>Contact</li>
                    <a href="https://github.com/bancmark" target="_blank" rel="noopener noreferrer" className='Navbar_items'>Github</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
