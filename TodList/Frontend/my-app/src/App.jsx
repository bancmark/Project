import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#242424] overflow-hidden text-white'>
      <div className='bg-[#6e6868] my-3 mx-3 px-2 py-2 rounded-md justify-center'>
        <h1 className='text-2xl py-2 my-4 px-1 mx-3 font-bold border-2 w-1/5 text-center rounded-md'>iTask</h1>
      </div>
      <div className='bg-[#6e6868] my-3 mx-3 px-2 py-2 rounded-md justify-center'>
        <input className='bg-transparent border-b-2 border-[#242424] w-1/4 text-white placeholder-white focus:outline-none' type="text" placeholder='Enter your task' />
      </div>
    </div>
  )
}

export default App
