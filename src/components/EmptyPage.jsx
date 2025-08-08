import noProjectsImage from '../assets/no-projects.png';

export default function EmptyPage({ onAddProject }) {
    return (
        <div className="main-content col-span-9 flex flex-col items-center justify-center bg-gray-100">
            <img src={noProjectsImage} alt="No Projects" className="w-20 h-20" />
            <h2 className="text-gray-600 text-4xl mt-4">No Projects Available</h2>
            <p className="text-gray-500 text-lg mt-2">Please add a project to get started.</p>
            <button onClick={onAddProject} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create New Project
            </button>
        </div>
    );
}