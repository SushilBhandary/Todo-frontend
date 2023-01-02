
const Signup = ({setToSingup}) =>{
  return(
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 ">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label for="name" className="block dark:text-gray-400">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md  border-2 " />
            </div>
            <div className="space-y-1 text-sm">
                <label for="Email" className="block dark:text-gray-400">Email</label>
                <input type="emali" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
        <div className="space-y-1 text-sm">
                <label for="password" className="block dark:text-gray-400">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
        <div className="space-y-1 text-sm">
                <label for="repassword" className="block dark:text-gray-400">Re-enter Password</label>
                <input type="password" name="repassword" id="repassword" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 " />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-white bg-blue-500 focus:outline-none hover:bg-blue-600 rounded ">Sign up</button>
          </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have a account ?
            <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100" onClick={() => {setToSingup(false)}} > Login</a>
        </p>
      </div>
    </div>
  )
}

export default Signup