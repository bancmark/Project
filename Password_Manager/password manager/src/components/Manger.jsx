import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';


const Manger = () => {
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const save = async () => {
        try {
            const res = await axios.post('http://localhost:3000/add', {
                id: uuidv4(),
                website,
                username,
                password
            })
            console.log(res.data)
            alert(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mt-28'>
            <div className='bg-white/10 backdrop-blur-lg border-b border-white/20 m-4 rounded-2xl'>
                <div className='p-4'>
                    <input
                        type="text"
                        className='text-white border border-white w-full rounded-md p-3 z-30'
                        placeholder='Website'
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className='flex gap-4 pb-4'>
                    <input
                        type="text"
                        placeholder='username'
                        className='text-white w-1/2 m-4 p-3 border z-30 border-white rounded-md'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Password'
                        className='text-white w-1/2 m-4 p-3 border z-30 border-white rounded-md'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center mt-4 mb-4">
                    <button
                        className="bg-green-500 w-32 h-10 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-green-600 hover:scale-105 transition-all duration-200"
                        onClick={save}
                    >
                        + Save This!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manger
