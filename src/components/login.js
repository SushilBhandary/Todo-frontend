import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setToSingup, SetLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    
    await axios.post("http://localhost:8000/login",data)
    .then((res) => {
      if (res.error) {
        console.log(res.error);
      }
      localStorage.setItem("jwt", JSON.stringify(res))
      SetLogin(true)
    }).catch( e => console.log(e))

  }


  return(
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ">
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
            <button onClick={submit} className="block w-full p-3 text-center rounded-sm text-white bg-blue-500 focus:outline-none hover:bg-blue-600 rounded ">Login</button>
          </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
            <span className="underline dark:text-gray-100" onClick={() => {setToSingup(true)}}> Sign up</span>
        </p>
      </div>
    </div>
    
  )
}

export default Login