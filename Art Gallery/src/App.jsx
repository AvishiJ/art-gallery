import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
