import React , { useContext } from 'react'
import { TaskContext } from './TaskContext';

function TaskItems() {

  const { taskItems , setTaskItems } = useContext(TaskContext);

  const handleSetDoneTask = (id) => {
    const index = taskItems.findIndex(t => t.id === id)
    let newTaskItems = [...taskItems]
    newTaskItems[index].isDone = !newTaskItems[index].isDone
    setTaskItems(newTaskItems)
  }

  const handleDeleteTask = (id) => {
    setTaskItems(taskItems.filter((t)=> t.id !== id))
  }

  if (taskItems.length) {
    return (
      <div>
          <div className="container">
              <ul className='item-wrapper p-3 rounded-3'>
                {
                  taskItems.map(t => (
                    <li key={t.id} className={`py-2 px-4 my-2 rounded-3 d-flex justify-content-between ${t.isDone ? "done" : "" }`}>
                      <span>{t.title}</span>
                      <div className="icons">
                        <i className={`bi pointer ${t.isDone ? "bi-check2 text-success" : " bi-x-lg text-warning"}`} 
                            onClick={()=> handleSetDoneTask(t.id)}
                             ></i>
                        <i className="bi bi-trash text-danger pointer me-2"
                        onClick={()=> handleDeleteTask(t.id)}
                        ></i>
                      </div>
                  </li>
                  ))
                }
                  
              </ul>
          </div>
      </div>
    )
  } else {
    return (
      <ul className='item-wrapper py-5 px-2 rounded-3 container'>
        <h1 className='text-center text-light'>هیچ کاری ثبت نشده است...!</h1>
      </ul>
    ) 
  }

}

export default TaskItems