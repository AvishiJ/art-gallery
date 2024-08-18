import React from 'react'
import './Header.css';
import Carousel from './Carousel';
import ImageCard from './ImageCard';

function Header() {
 
      return (
        <>
    <div className="heading-container">
      <h1 className="heading-text">A curated selection of exceptional art by emerging talent.</h1>
    </div>
    <Carousel/>

    <h3 className="subheading-text">Explore our categories</h3>

    <div className="max-w-[95%] mx-auto flex flex-wrap justify-center">
      <ImageCard
        imageSrc=".\public\images\card1.png"
        altText="Classic"
        title="Classic"
      />
      <ImageCard
        imageSrc=".\public\images\card2.png"
        altText="Portrait"
        title="Portrait"
       
      />
      <ImageCard
        imageSrc=".\public\images\card3.png"
        altText="Landscape"
        title="Landscape"
        
      />
    </div>
    </>
  );
};

export default Header