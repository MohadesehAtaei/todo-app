import React , { useState } from 'react';
import './App.css';
import Header from './Header';
import { TaskContext } from './TaskContext';
import TaskItems from './TaskItems';

function App() {

  const [ taskItems , setTaskItems ] = useState([
    {
      id: 1,
      title: "کار شماره 1",
      isDone: false
    },
    {
      id: 2,
      title: "کار شماره 2",
      isDone: true
    },
    {
      id: 3,
      title: "کار شماره 3",
      isDone: false
    }
  ]);



  return (
    <TaskContext.Provider value={{
      taskItems,
      setTaskItems
    }}>
      <div className="App">
        <Header/>
        <TaskItems/>
      </div>
    </TaskContext.Provider>
    
  );
}

export default App;
