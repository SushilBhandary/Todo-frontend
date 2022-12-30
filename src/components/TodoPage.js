import Header from "./Header"
import TodoForm from "./todoForm"
import TodoList from "./todoList"
import { useState } from "react"

const TodoPage = () => {
    const [data, setData] = useState([{
        todo : "To Build Full stack Application",
        tasks : ["Create Backend", "Creats Frontend", "Work on integiration"],
        star : false,
        completed : false
    },
    {
        todo : "To fix buges",
        tasks : ["find bugs", "find solution ", "implement it"],
        star : true,
        completed : true
    }])

    const addTodo = (todo) => {
        setData([...data, todo])
    }

   

    return(
        <>
            <Header/>
            <TodoForm addTodo={addTodo} />
            <TodoList todoData={data} setData={setData}/>
        </>
    )
}

export default TodoPage