import React, { Fragment } from 'react';

export default function Task({ tasks, onDelete }) {
    
    return (
        <ul className="tasks bg-gray-200 p-4 rounded shadow-md mt-4 flex flex-col gap-2">
            { tasks.map((task, index) => {
                return (
                    < Fragment key={index}>
                        <li className="task flex justify-between items-center mb-2">
                            <span>{task}</span>
                            <button onClick={() => onDelete(index)} className='hover:text-red-500 ml-auto'>Clear</button>
                        </li>
                        { index < tasks.length - 1 && <hr className='border-t border-gray-300 my-2'/> }
                    </Fragment>
                );
            })}
        </ul>
    );
}