import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import './App.css'
import Header from './Header';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
