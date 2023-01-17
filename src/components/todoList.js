import axios from "axios";
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpdateTodo from "./updateTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "./api";

const TodoList = ( {todoData,setData}) => {

  const [editOpen, setEditOpen] = useState(false);
  const [passIndex, setPassIndex] = useState()
  const [id, setId] =useState()

  const closeEditModal = () => {
    setEditOpen(false)
  };

  const deleteData = async(todoId) => {
    const data = JSON.parse(localStorage.getItem("jwt"))
    await axios.delete(`${API}/delete-todo/${todoId}/${data.user._id}`, {
      headers: {
        authorization: data.token
      }
    })
    .then( res => {
      setData(res.data.todoList)
      toast.success('Deleted Sucessfuly', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch( e => console.log(e))
  }
  
  return(
    <div className="bg-[#CFFCE8]">
    <div className="p-6 rounded-lg mx-5 bg-[#49DEC4]">
      <h2 className="w-full text-3xl font-bold leading-tight text-center">Todo List</h2>
      <div className="p-6 rounded-lg mx-5 my-3 " >
      { todoData.map( (todo, index) => (
        <div className="flex justify-between p-5 w-[60%] mx-auto rounded-lg bg-[#CFFCE8] mt-5" key={index}>
        <div >
          <h1 className="text-xl p-2 my-2 rounded">Title : {todo.todo}</h1>
          <h1 className="text-xl p-2 my-2 rounded"> tasks :</h1>
          <ul className="text-lg p-3 ml-3">
            { todo.tasks.map( (task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between rounded-lg my-3 w-[20%]">
        <div className="flex justify-between">
          { todo.star ? (
            <div>
              <span style={{fontSize:"300%", color:"yellow"}}> &#9733; </span>
            </div>
          ) : (
            <div>
              <span style={{fontSize:"300%", color:"yellow"}}> &#9734; </span>
            </div>
          ) }

          { todo.completed ? (
            <div>
              <span style={{fontSize:"300%", color:"Green"}}> &#10004;</span>
            </div>
            
          ) : (
            <div>
            <span style={{fontSize:"300%", color:"green"}}> &#9744; </span>
            </div>
          ) }
          </div>
          <div className=" flex flex-col">
            <button className="px-4 py-2 font-bold rounded bg-yellow-400 hover:bg-yellow-500 my-2" onClick={() => {setEditOpen(true);setPassIndex(index); setId(todo._id)}}>Edit</button>
            <Popup open={editOpen}  modal nested>
              <UpdateTodo id={id} todoData={todoData[passIndex]} close={closeEditModal} setData={setData}/>
            </Popup>
            <button onClick={() => {deleteData(todo._id)} } className="px-4 py-2 font-bold rounded bg-red-500 hover:bg-red-600 my-2">Delete</button>
          </div>
        </div>
        
      </div>
      ) )}
      <ToastContainer />
      </div>
    </div>
    </div>
  )
}

export default TodoList