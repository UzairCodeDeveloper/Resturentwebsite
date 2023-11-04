import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Catagory from '../Catagory/Catagory'
import Menuqr from '../Menu/Menuqr'
import Contactus from '../Contactus/Contactus'
import Footer from '../footer/Footer'
export default function Page1() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Catagory/>
        <Menuqr/>
        <Contactus/>
        <Footer/>
    </>
  )
}
