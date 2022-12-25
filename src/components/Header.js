import React from 'react'

const Header = ( {setIsAdding} ) => {
  return (
    <div>
      <h1>Employee Management System</h1>
      <div>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
      </div>
    </div>
  )
}

export default Header