import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white flex m-7 p-7 rounded-4xl gap-6'>
            <h2 className='text-black font-bold'>LinkTree</h2>
            <ul className='flex text-black gap-6'>
                <li>Product</li>
                <li>Template</li>
                <li>Marketplace</li>
                <li>Learn</li>
                <li>Pricing</li>
            </ul>
            <button className='bg-gray-200'>Log in</button>
            <button>Sign up free</button>
        </div>
    )
}

export default Navbar
