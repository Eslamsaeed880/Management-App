
export default function Project() {

    return (
        <div className="main-content col-span-9 flex flex-col gap-4 bg-gray-100 p-16 pr-40">
          <div className="flex justify-between">
            <h2 className='font-bold text-4xl'>Learn React</h2>
            <button className="hover:text-red-500">Delete</button>
          </div>
          <p className="date">Due date: <span className="font-bold">March 15, 2023</span></p>
          <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur laudantium accusamus beatae ad commodi sapiente perspiciatis nisi assumenda rerum vero, asperiores veritatis placeat laboriosam dignissimos tempore maiores eaque repellendus.</p>
          <hr className='border-t border-gray-300 border-b'/>
          <h2 className='font-bold text-2xl'>Tasks</h2>
          <p className="flex items-center gap-4">
            <input type="text" className='p-2 w-80 rounded bg-gray-200' placeholder='Add a new task...' />
            <button>Add Task</button>
          </p>

          <div className="tasks bg-gray-200 p-4 rounded shadow-md mt-4 flex flex-col gap-2">
            <div className="task flex justify-between items-center mb-2">
              <span>Task 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 4: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 5: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 6: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
            <hr className='border-t border-gray-300' />
            <div className="task flex justify-between items-center mb-2">
              <span>Task 7: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt.</span>
              <button className='hover:text-red-500'>Clear</button>
            </div>
          </div>
          <br />
        </div>
    );
}