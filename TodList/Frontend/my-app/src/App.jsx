import { useState, useEffect } from 'react'
import './App.css'
import './index.css'

function App() {
  const [Task, setTask] = useState("")
  const [Tasks, setTasks] = useState([])

  const add = ()=>{
    if(Task.trim() === ""){return}//if task is return it

    const newTask = [...Tasks, Task]//stroing task from task to array
    setTasks(newTask)

    localStorage.setItem("task", JSON.stringify(newTask))//store in localstorage
    setTask("")

    //checking everything is okay
    console.log(Task)
    console.log(Tasks)
    console.log(Task)

  }

  return (
    <div className='w-screen h-screen bg-[#242424] overflow-hidden text-white'>
      <div className='bg-[#6e6868] my-3 mx-3 px-2 py-2 rounded-md justify-center'>
        <h1 className='text-2xl py-2 my-4 px-1 mx-3 font-bold border-2 w-1/5 text-center rounded-md'>iTask</h1>
      </div>
      <div className='bg-[#6e6868] my-3 mx-3 px-4 pr-10 py-2 flex rounded-md justify-center gap-10'>
        <input className='inputt' type="text" value={Task} onChange={(e=>{setTask(e.target.value)})} placeholder='Enter your task' />
        <button className='hover:cursor-pointer border-amber-950 rounded-md px-2 bg-amber-900 justify-between whitespace-nowrap' onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default App
