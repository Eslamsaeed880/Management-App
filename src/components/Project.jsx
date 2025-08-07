
export default function Project() {

    return (
        <div className="main-content col-span-9 flex flex-col gap-4 bg-gray-100 p-16 pr-40">
          <div className="flex justify-between">
            <h2 className='font-bold text-4xl'>Learn React</h2>
            <button>Delete</button>
          </div>
          <p className="date">Due date: <span className="font-bold">March 15, 2023</span></p>
          <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur laudantium accusamus beatae ad commodi sapiente perspiciatis nisi assumenda rerum vero, asperiores veritatis placeat laboriosam dignissimos tempore maiores eaque repellendus.</p>
          <hr className='border-t border-gray-300 border-b'/>
          <h2 className='font-bold text-2xl'>Tasks</h2>
          <p className="flex items-center gap-4">
            <input type="text" className='p-2 w-80 rounded bg-gray-200' placeholder='Add a new task...' />
            <button>Add Task</button>
          </p>
        </div>
    );
}