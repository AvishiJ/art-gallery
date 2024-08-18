import React from 'react'
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        
      <Link to='/' className='logo'>The Art Gallery</Link>
      <nav>
           
      </nav>
    </header>
  )
}

export default Header