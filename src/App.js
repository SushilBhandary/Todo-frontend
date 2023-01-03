import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import TodoPage from "./components/TodoPage";

function App() {

  const [islogin, SetLogin] = useState(false)
  const [toSingup, setToSingup] = useState(false)

  return (
    <div >
      {!islogin ? ( toSingup ? <Signup setToSingup={setToSingup}/> : <Login setToSingup={setToSingup} SetLogin={SetLogin}/>) : (
        <TodoPage/>
      )}
    </div>
  );
}

export default App;
