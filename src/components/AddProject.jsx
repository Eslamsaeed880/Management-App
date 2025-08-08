import { useRef, useState } from 'react';

export default function AddProject({ projects, onCancel, onAddProject }) {
  const formData = useRef();
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formData.current;
    if(!form.title.value || !form.description.value || !form['due-date'].value) {
      setValidationError('All fields are required');
      return;
    }

    setValidationError('');

    const newProject = {
      name: form.title.value,
      description: form.description.value,
      date: form['due-date'].value,
      tasks: []
    };
    
    onAddProject(newProject);
    form.reset();
  };

  return (
    <div className="main-content flex flex-col pt-10 col-span-9 gap-2">
      <form action="POST" ref={formData}>
        <div className="buttons flex justify-end gap-4 mr-14 mt-10">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={handleSubmit} className='bg-blue-800 text-white rounded p-2 pr-4 pl-4 hover:bg-blue-900'>Save</button>
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
        {validationError && <p className='mx-14 py-2 text-red-500'>{validationError}</p>}
      </form>
    </div>
  );
}