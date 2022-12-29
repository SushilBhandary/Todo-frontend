const TodoForm = () => {
    return(
      <section className="p-6 dark:text-gray-100 ">
        <form novalidate="" className=" text-lg border-2 container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
          <h2 className="w-full text-3xl font-bold leading-tight">Todo</h2>
          <div>
            <label for="Title" className="block mb-1 ml-1">Title</label>
            <input id="Title" type="text" placeholder="Title" required="" className="block w-full p-2 rounded dark:bg-gray-800 border-2" />
          </div>
          <div>
            <label for="Task" className="block mb-1 ml-1">Task</label>
            <input id="Task" type="Task" placeholder="Task" required="" className="block w-full p-2 rounded dark:bg-gray-800 border-2"  />
          </div>
          <div>
            <label for="TaskAdded" className="block mb-1 ml-1">Task Added</label>
            <div className="flex rounded-lg border-lime-400 border-2  w-fit mt-1"> <h3 className="px-3">Task 1</h3> <span className="text-sm p-1">&#10006;</span></div>
            <div className="flex rounded-lg border-lime-400 border-2  w-fit mt-1"> <h3  className="px-3">Task with too many words  1</h3> <span className="text-sm p-1">&#10006;</span></div>
          </div>
          <div className="text-right">
            <button className=" px-4 py-2 font-bold rounded shadow text-white bg-blue-500 focus:outline-none hover:bg-blue-600 ">ADD Todo</button>
          </div>
        </form>
      </section>
    )
  }

export default TodoForm