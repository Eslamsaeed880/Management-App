
export default function Task({ children, onDelete }) {
    return (
        <>
            <li className="task flex justify-between items-center mb-2">
                <span>{children}</span>
                <button onClick={onDelete} className='hover:text-red-500'>Clear</button>
            </li>
        </>
    );
}