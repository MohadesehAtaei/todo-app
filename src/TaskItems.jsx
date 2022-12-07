import React from 'react'

function TaskItems() {
  return (
    <div>
        <div className="container">
            <ul className='item-wrapper p-3 rounded-3'>
                <li className='py-2 px-4 my-2 rounded-3 d-flex align-items-center justify-content-between'>
                    <span>کار شماره یک</span>
                    <div className="icons">
                      <i className="bi bi-check2 text-success pointer ms-2"></i>
                      {/* <i className="bi bi-check2-all text-success pointer"></i> */}
                      <i className="bi bi-x-lg text-danger pointer ms-2"></i>
                      <i className="bi bi-trash text-danger pointer"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TaskItems