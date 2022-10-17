import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
            <h1>Notes</h1>
        </Link>
        <Link to='/create' style={{textDecoration: 'none', color: 'white'}}>
            <h1>Create Note</h1>   
        </Link>  
    </div>
  )
}

export default Navbar