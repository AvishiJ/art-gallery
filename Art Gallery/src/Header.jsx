import React from 'react'
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        
      <Link to='/' className='logo'>The Blogger</Link>
      <nav>
            <Link to='/create'>Create a new post</Link>
            <a >Logout</a>

            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
      </nav>
    </header>
  )
}

export default Header