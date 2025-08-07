
export default function AddProject() {
    return (
        <div className="main-content flex flex-col pt-10 col-span-9 gap-2">
          <div className="buttons flex justify-end gap-4 mr-14 mt-10">
            <button>Cancel</button>
            <button className='bg-blue-800 text-white rounded p-2 pr-4 pl-4 hover:bg-blue-900'>Save</button>
          </div>
          <p className='mx-14 py-2'>
            <label htmlFor="title" className='font-bold uppercase text-gray-600'>Title</label>
            <input type="text" id="title"  className='bg-gray-200 outline-none shadow-md focus:border-b-2 focus:border-b-blue-900 w-full p-2'/>
          </p>
          <p className='mx-14 py-2'>
            <label htmlFor="description" className='font-bold uppercase text-gray-600'>Description</label>
            <textarea id="description" className='bg-gray-200 resize-none outline-none shadow-md focus:border-b-2 focus:border-b-blue-900 w-full p-2 h-32' />
          </p>
          <p className='mx-14 py-2'>
            <label htmlFor="due-date" className='font-bold uppercase text-gray-600'>Due Date</label>
            <input type="date" id="due-date" className='bg-gray-200 outline-none shadow-md focus:border-b-2 focus:border-b-blue-900 w-full p-2' />
          </p>
        </div>
    );
}