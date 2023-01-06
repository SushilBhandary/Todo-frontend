import Header from "./Header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"
import { useState } from "react"

const TodoPage = ({todoList, logout}) => {
    
    const [data, setData] = useState(todoList ? todoList : [])

    const addTodo = (todo) => {
        setData([...data, todo])
    }

    return(
        <div className="bg-[#CFFCE8] h-full" style={{ height: '100vh'}}>
            <Header logout={logout}/>
            <TodoForm addTodo={addTodo} />
            <TodoList todoData={data} setData={setData}/>
        </div>
    )
}

export default TodoPage