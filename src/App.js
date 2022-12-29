import Login from "./components/login";
import Signup from "./components/signup";
import Header from "./components/Header";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <div >
      <Header/>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
