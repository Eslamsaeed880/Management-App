import React from 'react';
import Sidebar from './components/Sidebar';
import EmptyPage from './components/EmptyPage';
import AddProject from './components/AddProject';

function App() {
  return (
    <>
      <div className="container grid grid-cols-12 h-screen grid-rows-1 flex-nowrap">
        <Sidebar />
        {/* <EmptyPage /> */}
        {/* <AddProject /> */}
      </div>
    </>
  );
}

export default App;
