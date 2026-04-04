import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Manger from './components/Manger.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-screen w-full bg-slate-950 overflow-y-auto overflow-x-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className='relative z-10'>
          <Navbar />
          <Manger />
        </div>
      </div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
    </>
  )
}

export default App
