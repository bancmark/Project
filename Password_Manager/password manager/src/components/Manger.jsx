import React from 'react'

const Manger = () => {
    return (
        <div className='mt-30'>
            <div className='bg-white/10 backdrop-blur-lg border-b border-white/20 m-4 rounded-2xl'>
                <div className='p-4'>
                    <input type="text" className='text-white border border-white w-full rounded-md p-3 z-30' placeholder='Website'/>
                </div>
                <div className='flex gap-4'>
                    <input type="text" placeholder='username' className='text-white w-1/2 m-4 p-3 border z-30 border-white rounded-md'/>
                    <input type="text" placeholder='Password' className='text-white w-1/2 m-4 p-3 border z-30 border-white rounded-md'/>
                </div>
                <div className="button bg-green-500">
                    <button className='cursor-pointer'>
                        <img src={bookmark_ani} alt="" className="w-6 h-6" />
                        Save This!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manger
