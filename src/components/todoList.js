
const TodoList = () => {
    return(
     <div className="p-6 rounded-lg mx-5">
       <h2 className="w-full text-3xl font-bold leading-tight text-center">Todos</h2>
       <div className="p-6 rounded-lg mx-5 my-3 " >
         <div className="flex justify-between p-5 w-[70%] mx-auto rounded-lg">
           <div >
             <h1 className="text-xl p-2 my-2 rounded">Title name</h1>
             <h1 className="text-xl p-2 my-2 rounded"> tasks :</h1>
             <ul className="text-lg p-3 ml-3">
               <li>task 1</li>
               <li>task 2</li>
               <li>task 3</li>
             </ul>
           </div>
           <div className="flex flex-col justify-between rounded-lg my-3 w-[20%]">
             <div className="flex justify-between"><span style={{fontSize:"300%", color:"yellow"}}> &#9734; </span> 
             {/* <span style={{fontSize:"300%", color:"yellow"}}> &#9733; </span> */}
             <span style={{fontSize:"300%", color:"Green"}}> &#9744; </span>
             {/* <span style={{fontSize:"300%", color:"green"}}> &#10004; </span> */}
             </div>
             <div className=" flex flex-col">
               <button className="px-4 py-2 font-bold rounded bg-yellow-400 hover:bg-yellow-500 my-2">Edit</button>
               <button className="px-4 py-2 font-bold rounded bg-red-500 hover:bg-red-600 my-2">Delete</button>
             </div>
           </div>
         </div>
       </div>
     </div>
    )
   }

export default TodoList