import Task from './Task';
import { Fragment } from 'react';


export default function Project({ project, onDelete }) {
  function handleDeleteTask(index) {
    project.tasks.splice(index, 1);
  }

  return (
      <div className="main-content col-span-9 flex flex-col gap-4 bg-gray-100 p-16 pr-40">
        <div className="flex justify-between">
          <h2 className='font-bold text-4xl'>{project.name}</h2>
          <button onClick={onDelete} className="hover:text-red-500">Delete</button>
        </div>
        <p className="date">Due date: <span className="font-bold">{project.date}</span></p>
        <p>{project.description}</p>
        <hr className='border-t border-gray-300 border-b'/>
        <h2 className='font-bold text-2xl'>Tasks</h2>
        <p className="flex items-center gap-4">
          <input type="text" className='p-2 w-80 rounded bg-gray-200' placeholder='Add a new task...' />
          <button>Add Task</button>
        </p>

        { project.tasks.length === 0 && <p className='text-gray-500'>No tasks available for this project.</p> }

          { project.tasks.length > 0 && 
          <ul className="tasks bg-gray-200 p-4 rounded shadow-md mt-4 flex flex-col gap-2">
            { project.tasks.map((task, index) => {
              return (
                <Fragment key={index}>
                  <Task onDelete={() => handleDeleteTask(index)}>{task}</Task>
                  { index < project.tasks.length - 1 && <hr className='border-t border-gray-300 border-b'/> }
                </Fragment>
              );
            })}
          </ul>
          }
        <br />
      </div>
  );
}