import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-[#242424] overflow-hidden text-white'>
      <div className='bg-[#6e6868] my-3 mx-3 rounded-md'>
        <h1 className='text-2xl py-4 my-4 px-1 font-bold border-2 w-1/2'>iTask</h1>
      </div>
    </div>
  )
}

export default App
