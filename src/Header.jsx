import React from 'react'

function Header() {
  return (
    <header className='header d-flex align-items-center'>
      <div className="container">
        <div className="d-flex">
          <input type="text" className="form-control mx-2" placeholder=""/>
          <button className="btn btn-outline-dark" type="button">ثبت</button>
        </div>
      </div>
    </header>
  )
}

export default Header;