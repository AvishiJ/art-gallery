import React from 'react'
import './Header.css';
import Carousel from './Carousel';

function Header() {
 
      return (
        <>
    <div className="heading-container">
      <h1 className="heading-text">A curated selection of exceptional art by emerging talent.</h1>
    </div>
    <Carousel/>
    </>
  );
};

export default Header