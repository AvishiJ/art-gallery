import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
