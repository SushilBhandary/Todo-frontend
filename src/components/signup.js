import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = ({setToSingup}) =>{

  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState("")

  const submit = async(e) => {
    e.preventDefault()
    if (password === rePassword) {
      const data = {
        name : name, 
        email : email, 
        password : password
      }
      // const res = await axios.get('/',data)
      const res = await axios.post('http://localhost:8000/signup',data).then().catch( e => {
        console.log('the Error is ');
        console.log(e);
      })
      console.log(res);

      if (res) {
        toast.success('User Created Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setName('')
          setEmail('')
          setPassword('')
          setRePassword('')
      } 

    } else {
      toast.warn('Password does not match. Re-Enter the password', {
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
  }

  return(
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md  border-2 " />
            </div>
            <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="emali" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
        <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
        <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Re-enter Password</label>
                <input value={rePassword} onChange={e => setRePassword(e.target.value)} type="password" name="repassword" id="repassword" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
            <button onClick={submit} className="block w-full p-3 text-center rounded-sm text-white bg-blue-500 focus:outline-none hover:bg-blue-600 rounded ">Sign up</button>
          </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have a account ?
            <span className="underline dark:text-gray-100" onClick={() => {setToSingup(false)}} > Login</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup