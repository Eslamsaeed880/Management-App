import React from 'react';
import Sidebar from './components/Sidebar';
import EmptyPage from './components/EmptyPage';
function App() {
  return (
    <>
      <div className="container grid grid-cols-12 h-screen grid-rows-1">
        <Sidebar />
        <EmptyPage />
        
      </div>
    </>
  );
}

export default App;
