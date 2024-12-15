import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Info from '../component/Info/Info'
import Footer from '../component/Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Info/>
      <Footer/>
    </>
  )
}
