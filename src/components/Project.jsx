import Task from './Task';
import { Fragment, useState, useRef } from 'react';


export default function Project({ project, onDelete }) {
  const [dummyState, setDummyState] = useState(false);
  const taskInputRef = useRef();

  function handleDeleteTask(index) {
    project.tasks.splice(index, 1);
    setDummyState(!dummyState);
  }

  function handleAddTask() {
    const newTask = taskInputRef.current.value;
    if (newTask.trim() === '') return;
    project.tasks.push(newTask);
    taskInputRef.current.value = '';
    setDummyState(!dummyState);
  }


  return (
    <div className="main-content col-span-9 flex flex-col gap-4 bg-gray-100 p-16 pr-40">
      <div className="flex justify-between">
        <h2 className='font-bold text-4xl'>{project.name}</h2>
        <button onClick={onDelete} className="hover:text-red-500">Delete</button>
      </div>
      <p className="date">Due date: <span className="font-bold">{project.date}</span></p>
      <p className='break-words whitespace-pre-wrap'>{project.description}</p>
      <hr className='border-t border-gray-300 border-b'/>
      <h2 className='font-bold text-2xl'>Tasks</h2>
      <p className="flex items-center gap-4">
        <input type="text" ref={taskInputRef} className='p-2 w-80 rounded bg-gray-200' placeholder='Add a new task...' />
        <button onClick={handleAddTask}>Add Task</button>
      </p>

      { project.tasks.length === 0 && <p className='text-gray-500'>No tasks available for this project.</p> }

      {project.tasks.length > 0 && <Task onDelete={handleDeleteTask} tasks={project.tasks} />}
      <br />
    </div>
  );
}