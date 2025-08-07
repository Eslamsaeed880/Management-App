import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="container grid grid-cols-12 h-screen grid-rows-1">
        <Sidebar />
        <div className="main-content col-span-9">
          
        </div>
      </div>
    </>
  );
}

export default App;
