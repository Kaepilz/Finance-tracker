import React from 'react'
import './Navbar.css'

const Navigation = () => {
  return (
    <div className='navbar'>
       <div className="nav-left">
        <h3>Smart Finance Tracker</h3>
     </div>
     <ul className='ul'>
        <li >Home</li>
        <li>About</li>
        <li>Dashboard</li>  
        <li>Features</li>
     </ul>
    
    </div>
  )
}

export default Navigation