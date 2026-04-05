import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import bin from "../assets/bin.png";
import save from '../assets/bookmark_ani.gif';
import edit from "../assets/pen.png"


const Manger = () => {
    const [website, setWebsite] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passarray, setPassarray] = useState([])

    // getting all the data when website load
    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/get")
            if (res?.data?.data) {
                setPassarray(res.data.data)
            }
            else {
                console.log("Unexpected response:", res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    //saving all data into server by sending them into backend
    const save = async () => {
        try {
            const res = await axios.post('http://localhost:3000/add', {
                id: uuidv4(),
                website,
                username,
                password
            })
            console.log(res.data)
            // earsing old input value
            setPassword("")
            setUsername("")
            setWebsite("")

            alert(res.data.message)
            getdata()
        } catch (error) {
            console.log(error)
        }
    }

    const Delete = async (id)=>{
        try {
            const res = await axios.delete('http://localhost:3000/delete',{
                data:{id}
            })
            alert("You want to delete")
            console.log(res.data.message);
            console.log('data is deleted')
            getdata()
        } catch (error) {
            
        }
    }

    return (
        <div className='mt-10'>
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
                        className="bg-green-500 font-bold w-32 h-10 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-green-600 hover:scale-105 transition-all duration-200"
                        onClick={save}
                    >
                        +Save This
                    </button>
                </div>
            </div>
            <div className='bg-white/10 backdrop-blur-lg border-b border-white/20 m-4 rounded-2xl p-4'>
                <div className='grid grid-cols-5 text-white items-center mb-6 blurr py-3'>
                    <h2 className='col-span-2 px-3'>website</h2>
                    <h2 className='col-span-1'>Username</h2>
                    <h2 className='col-span-1'>Password</h2>
                    <h2 className='col-span-1'>Actions</h2>
                </div>
                {passarray.map((item) => (
                    <div key={item.id} className='-z-50 text-white grid grid-cols-5'>
                        <p className='col-span-2 my-3 truncate px-3'>{item.website}</p>
                        <p className='col-span-1 my-3'>{item.username}</p>
                        <p className='col-span-1 my-3'>{item.password}</p>
                        <div className='col-span-1 flex gap-7 items-center'>
                            <button className='justify-center items-center hover:cursor-pointer gap-7' onClick={() => Delete(item.id)}>
                                <img src={bin} alt="" className='w-6 justify-center items-center scale-110 py-3 gap-7'/>
                            </button>
                            <button className='justify-center items-center hover:cursor-pointer'>
                                <img src={edit} alt="" className='w-6 justify-center items-center scale-110 py-3'/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Manger
