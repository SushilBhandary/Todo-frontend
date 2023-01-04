
import axios from "axios";
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TodoForm = ({addTodo}) => {
  
  const [titel, setTitle] = useState("")
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [open, setOpen] = useState(false);
  
  const closeModal = (e) => {
    e.preventDefault()
    setOpen(false)
  };

  const removeTask = (index) => {
    setTasks( tasks.filter( (task, i) => i!==index) )
  }

  const addTask = (e) => {
    e.preventDefault()
    if (task === "") {
      toast.warn('Enter Task (task is empty) ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      setTasks([...tasks, task])
      setTask("")
    }
    
  }
  
  const add = async (e) => {
    e.preventDefault()
    if (titel === "" || tasks.length === 0) {
      toast.warn('Title/Tasks missing', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      const data = JSON.parse(localStorage.getItem("jwt"))
      await axios.post(`http://localhost:8000/createtodo/${data.user._id}`, { todoName : titel, tasks})
      .then( res => {
        addTodo(res.data.todo)
      })
      .catch( e => console.log(e))
      setTask("")
      setTitle("")
      setTasks([])
      setOpen(false)
    }
  }

  return(
    <div>
      <div className="flex justify-center my-5">
      <button onClick={() => setOpen(o => !o)} className="px-4 py-2 font-bold rounded shadow text-white bg-blue-500 focus:outline-none hover:bg-blue-600"> ADD TODO</button>
      </div>
      <Popup open={open}  modal nested>
      
        <form className=" text-lg container p-8 space-y-6 rounded-md shadow ">
          <button className="btn btn-circle absolute  top-0 right-0 mt-2 mr-2" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        
          <h2 className="w-full text-3xl font-bold leading-tight">Todo</h2>
          <div>
            <label className="block mb-1 ml-1">Title</label>
            <input value={titel} type="text" placeholder="Title"  onChange={e => setTitle(e.target.value)}  className="block w-full p-2 rounded border-2" />
          </div>
          <div>
            <label className="block mb-1 ml-1">Task</label>
            <div className="flex">
              <input type="text" placeholder="Task" value={task} onChange={e => setTask(e.target.value)} className="block w-[80%] p-2 rounded border-2"  />
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
        <ToastContainer />
      </Popup>
    </div>
    
    
  )
}

export default TodoForm