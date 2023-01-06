import { useState } from "react"
import axios from "axios"
import TodoPage from "./TodoPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "./api";

const Login = ({setToSingup}) => {

  const [islogin, SetLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [todoList, setTodoList] = useState([])

  const submit = async(e) => {
    e.preventDefault()
    if (!(email && password)) {
      return toast.warn('Email/Password is missining', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const data = {
      email : email, 
      password : password
    }
    await axios.post(`${API}/login`,data)
    .then(async(res) => {
      localStorage.setItem("jwt", JSON.stringify(res.data))
      await axios.get(`${API}/getalltodos/${res.data.user._id}`)
      .then( (res) => {
        setTodoList( res.data.todoList)
        SetLogin(true)
      })
      .catch( e => console.log(e))
    }).catch( e => toast.error('Check the Email or Password', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      }))
  }

  const logout = () => {
    SetLogin(false)
    setTodoList([])
    setEmail('')
    setPassword('')
  }

  return(
    <div>
      { !islogin ? (
        <div className="flex items-center justify-center h-screen bg-[#CFFCE8]">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl  ">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
              <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-400">Email</label>
                  <input value={email} onChange={ e =>setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md  border-2 " />
              </div>
              <div className="space-y-1 text-sm">
                  <label className="block dark:text-gray-400">Password</label>
                  <input value={password} onChange={ e =>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 " />
              </div>
              <button onClick={submit} className="block w-full p-3 text-center rounded-sm text-white bg-[#10ABAC] focus:outline-none hover:bg-[#0B8390] rounded ">Login</button>
            </form>
            <p className="text-xs text-center sm:px-6 ">Don't have an account?
                <span className="underline" onClick={() => {setToSingup(true)}}> Sign up</span>
            </p>
          </div>
          <ToastContainer/>
        </div>
      ) : (
        <TodoPage todoList={todoList} logout={logout}/>
      )}
    </div>
    
    
  )
}

export default Login