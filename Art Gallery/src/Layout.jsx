import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom' //what this will do is that it will keep the header and footer same on pages and will render the other compnents as needed

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout
