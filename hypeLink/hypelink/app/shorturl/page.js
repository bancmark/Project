import React from 'react'

const page = () => {
    return (
        <>
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg m-4 h-70 my-10'>
                <div className='flex m-3 justify-between'>
                    <input type="text" placeholder='Website' className='text-white  border rounded-2xl border-blue-700 w-full p-3 m-3' />
                </div>
                <div className='flex m-3 justify-between'>
                    <input type="text" placeholder='Short URL' className='text-white  border rounded-2xl border-blue-700 w-full p-3 m-3' />
                </div>
                <div className='flex justify-center'>
                    <button className='text-white hover:cursor-pointer hover:bg-purple-500 rounded-2xl border hover:border-transparent
    hover:scale-105 border-white p-4 px-6 cursor-pointer'>Enter</button>
                </div>
            </div>
        </>
    )
}

export default page
