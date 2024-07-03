import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default MainLayout
