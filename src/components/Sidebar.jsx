
export default function Sidebar({ onAddProject, onSelectProject, projects, closeAddPage }) {
    return <div className="side-bar bg-gray-800 col-span-3 flex flex-col gap-4 min-h-screen sticky top-0">
          <h2 className="text-white mt-10 text-4xl ml-10">Your Projects</h2>

          <button onClick={onAddProject} className="add-projects text-white ml-10 mr-10 mt-8 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded size-fit">
            + Add Projects
          </button>

          <ul className="text-white text-xl mr-10 mt-6 pl-10 overflow-y-auto flex-1">
            { projects.map((project, index) => {

              return <li key={index} onClick={() => { onSelectProject(index); }} className="mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded">{ project.name }</li>
            }) }
            
          </ul>
        </div>
}