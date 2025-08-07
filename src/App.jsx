import React from 'react';
import Sidebar from './components/Sidebar';
import EmptyPage from './components/EmptyPage';
import AddProject from './components/AddProject';
import Project from './components/Project';

function App() {
  return (
    <>
      <div className="container grid grid-cols-12 min-h-screen grid-rows-1 flex-nowrap">
        <Sidebar />
        <Project />
        {/* <EmptyPage /> */}
        {/* <AddProject /> */}
      </div>
    </>
  );
}

export default App;
