import React , { useState , useContext } from 'react'
import { TaskContext } from './TaskContext';

function Header() {

  const { taskItems , setTaskItems } = useContext(TaskContext);

  const [task, setTask] = useState("");

  const handleSetTask = (e) => {
    setTask(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if(e.target[0].value){
      const newTask = {
        id: taskItems.length + 1,
        title: task,
        isDone: false
      }
      setTaskItems([...taskItems , newTask])
      setTask("")
    }
  }

  return (
    <header className='header d-flex align-items-center'>
      <div className="container">
        <form className="d-flex" onSubmit={handleAddTask}>
          <input type="text" className="form-control mx-2" value={task} onChange={handleSetTask}/>
          <button className="btn btn-outline-dark" type="submit">ثبت</button>
        </form>
      </div>
    </header>
  )
}

export default Header;