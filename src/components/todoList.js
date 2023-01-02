import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpdateTodo from "./updateTodo";

const TodoList = ( {todoData,setData}) => {

  const [editOpen, setEditOpen] = useState(false);
  const [passIndex, setPassIndex] = useState()
  const closeEditModal = () => {
    setEditOpen(false)
  };

  const deleteData = (index) => {
    setData( todoData.filter( (item, i) => i !== index ))
  }

  const updateData = (data, index) => {
    setData( todoData.map( (item, i) => i === index ? data : item))
  }

  const UpdateStar = (index) => {
    setData( todoData.map( (item, i) => i === index ? {...item, star : !item.star} : item))
  }

  const UpdateMark = (index) => {
    setData( todoData.map( (item, i) => i === index ? {...item, completed : !item.completed} : item))
  }

  return(
    <div className="p-6 rounded-lg mx-5">
      <h2 className="w-full text-3xl font-bold leading-tight text-center">Todo List</h2>
      <div className="p-6 rounded-lg mx-5 my-3 " >
      { todoData.map( (todo, index) => (
        <div className="flex justify-between p-5 w-[70%] mx-auto rounded-lg" key={index}>
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
            <div onClick={() => {UpdateStar(index)}} >
              <span style={{fontSize:"300%", color:"yellow"}}> &#9733; </span>
            </div>
          ) : (
            <div onClick={() => { UpdateStar(index)}} >
              <span style={{fontSize:"300%", color:"yellow"}}> &#9734; </span>
            </div>
          ) }

          { todo.completed ? (
            <div onClick={() => {UpdateMark(index)}} >
              <span style={{fontSize:"300%", color:"Green"}}> &#10004;</span>
            </div>
            
          ) : (
            <div onClick={() => {UpdateMark(index)} }>
            <span style={{fontSize:"300%", color:"green"}}> &#9744; </span>
            </div>
          ) }
          </div>
          <div className=" flex flex-col">
            <button className="px-4 py-2 font-bold rounded bg-yellow-400 hover:bg-yellow-500 my-2" onClick={() => {setEditOpen(true);setPassIndex(index)}}>Edit</button>
            <Popup open={editOpen}  modal nested>
              <UpdateTodo todoData={todoData[passIndex]} close={closeEditModal} updateDatas={(data) => {updateData(data,index)}}/>
            </Popup>
            <button onClick={() => {deleteData(index)} } className="px-4 py-2 font-bold rounded bg-red-500 hover:bg-red-600 my-2">Delete</button>
          </div>
        </div>
      </div>
      ) )}
        
      </div>
    </div>
  )
}

export default TodoList