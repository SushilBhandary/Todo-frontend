
import { useState } from "react"

const TodoForm = ({addTodo}) => {
  
  const [titel, setTitle] = useState("")
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const removeTask = (index) => {
    setTasks( tasks.filter( (task, i) => i!==index) )
  }

  const addTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, task])
    setTask("")
  }
  
  const add = (e) => {
    e.preventDefault()
    addTodo({todo:titel, tasks, star : false, completed : false })
    setTask("")
    setTitle("")
    setTasks([])
  }

  return(
    <section className="p-6 dark:text-gray-100 ">
      <form className=" text-lg border-2 container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
        <h2 className="w-full text-3xl font-bold leading-tight">Todo</h2>
        <div>
          <label className="block mb-1 ml-1">Title</label>
          <input value={titel} type="text" placeholder="Title"  onChange={e => setTitle(e.target.value)}  className="block w-full p-2 rounded dark:bg-gray-800 border-2" />
        </div>
        <div>
          <label className="block mb-1 ml-1">Task</label>
          <div className="flex">
            <input type="text" placeholder="Task" value={task} onChange={e => setTask(e.target.value)} className="block w-[80%] p-2 rounded dark:bg-gray-800 border-2"  />
            <button onClick={addTask} className=" px-2 py-2 w-[20%] font-bold rounded shadow text-white bg-blue-500 focus:outline-none hover:bg-blue-600 ">Add Task</button>
          </div>
        </div>
        <div>
          <label className="block mb-1 ml-1">Task Added</label>
          { tasks.map( (task,index) => (
            <div key={index}>
            <div className="flex rounded-lg border-lime-400 border-2  w-fit mt-1"> <h3 className="px-3">{task}</h3> <span onClick={() => removeTask(index)} className="text-sm p-1">&#10006;</span></div>
            </div>))}
        </div>
        <div className="text-right">
          <button onClick={add} className=" px-4 py-2 font-bold rounded shadow text-white bg-blue-500 focus:outline-none hover:bg-blue-600 ">ADD Todo</button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm