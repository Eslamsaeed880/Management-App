import React from 'react';
import Sidebar from './components/Sidebar';
import EmptyPage from './components/EmptyPage';
import AddProject from './components/AddProject';
import Project from './components/Project';
import { useState } from 'react';

const projects = [
  
]

function deleteProject(index) {
  projects.splice(index, 1);
}


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

        { !addProject && projects.length === 0 && 
          <EmptyPage 
            onAddProject={() => setAddProject(true)} 
          /> 
        }

        { !addProject && projects.length > 0 && 
          <Project 
            key={selectedProject}
            project={projects[selectedProject]} 
            onDelete={() => {
              deleteProject(selectedProject); 
              selectedProject ? 
                setSelectedProject(selectedProject - 1) 
                : setAddProject(true);
            }} 
          /> 
        }

        { addProject && 
          <AddProject 
            projects={projects} 
            onCancel={() => setAddProject(false)}
            onAddProject={(newProject) => {
              projects.push(newProject);
              setAddProject(false);
              setSelectedProject(projects.length - 1);
            }} 
          /> 
        }
      </div>
    </>
  );
}

export default App;
