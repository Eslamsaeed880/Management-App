import React from 'react';
import Sidebar from './components/Sidebar';
import EmptyPage from './components/EmptyPage';
import AddProject from './components/AddProject';
import Project from './components/Project';
import { useState } from 'react';

const projects = [
  {
    name: "Project 1",
    description: "Description for Project 1",
    date: "2023-10-01",
    tasks: []
  },
  {
    name: "Project 2",
    description: "Description for Project 2",
    date: "2023-10-02",
    tasks: [
      "Clean up the codebase",
      "Add unit tests",
      "Update documentation"
    ]
  },
  {    name: "Project 3",
    description: "Description for Project 3",
    date: "2023-10-03",
    tasks: [
      "Implement new feature",
      "Fix bugs",
      "Review pull requests"
    ]
  }
]



function App() {
  const [addProject, setAddProject] = useState();
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <>
      <div className="container grid grid-cols-12 min-h-screen grid-rows-1 flex-nowrap">
        <Sidebar 
          onAddProject={() => {setAddProject(true)}}  
          onSelectProject={(index) => {
            setAddProject(false);
            setSelectedProject(index); 
          }} 
          projects={projects} 
        />

        { !addProject && projects.length === 0 && <EmptyPage onAddProject={() => setAddProject(true)} /> }
        { !addProject && projects.length > 0 && <Project project={projects[selectedProject]} />}
        { addProject && <AddProject projects={projects} /> }
      </div>
    </>
  );
}

export default App;
