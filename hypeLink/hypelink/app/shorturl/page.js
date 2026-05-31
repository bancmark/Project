"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    // console.log(shortUrl, url);

    async function genrate(params) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/genrate", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .then(result=> {
                setShortUrl("")
                setUrl("")
            })
            .catch((error) => console.error(error));
    }
    return (
        <>
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg m-4 h-70 my-10'>
                <div className='flex m-3 justify-between'>
                    <input
                        type="text"
                        placeholder='Website'
                        className='text-white  border rounded-2xl border-blue-700 w-full p-3 m-3'
                        value={url}
                        onChange={(e => setUrl(e.target.value))}
                    />
                </div>
                <div className='flex m-3 justify-between'>
                    <input
                        type="text"
                        placeholder='Short URL'
                        className='text-white  border rounded-2xl border-blue-700 w-full p-3 m-3'
                        value={shortUrl}
                        onChange={(e => setShortUrl(e.target.value))} />
                </div>
                <div className='flex justify-center'>
                    <button
                        className='text-white hover:cursor-pointer hover:bg-purple-500 rounded-2xl border hover:border-transparent
    hover:scale-105 border-white p-4 px-6 cursor-pointer'
                        onClick={genrate}>
                        Enter
                    </button>
                </div>
            </div>
        </>
    )
}

export default page
