import { useState, useEffect } from 'react'
import './App.css'
import './index.css'

function App() {
  const [Task, setTask] = useState("")
  const [Tasks, setTasks] = useState([])

  useEffect(() => {
    const AlreadyTask = localStorage.getItem("task")
    if (AlreadyTask) {
      setTasks(JSON.parse(AlreadyTask))
    }
  }, [])


  const add = () => {
    if (Task.trim() === "") { return }//if task is return it

    const newTask = [...Tasks, Task]//storing task from task to array
    setTasks(newTask)

    localStorage.setItem("task", JSON.stringify(newTask))//store in localstorage
    setTask("")
  }

  const deleter = (indexTORmove) => {
    const updatedTasks = Tasks.filter((_, index) => index !== indexTORmove)
    setTasks(updatedTasks)
    localStorage.setItem("task", JSON.stringify(updatedTasks))
  }

  return (
    <div className='w-full min-h-screen bg-[#242424] overflow-x-hidden overflow-y-auto text-white'>
      <div className='commonDiv hover:cursor-pointer'>
        <h1 className='text-2xl py-2 my-4 px-1 mx-3 font-bold border-2 w-1/5 text-center rounded-md'>iTask</h1>
      </div>

      <div className=' commonDiv pr-10 flex gap-10'>
        <input className='inputt' type="text" value={Task} onChange={(e => { setTask(e.target.value) })} placeholder='Enter your task' />
        <button className='hover:cursor-pointer border-amber-950 rounded-md px-2 bg-amber-900 justify-between whitespace-nowrap' onClick={add}>Add</button>
      </div>

      <div className='commonDiv gap-5'>
        {Tasks.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className='text-amber-50 mx-10 my-4 w-1/2'>{item}</div>
            <button className='delete' onClick={()=>{deleter(index)}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
