import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <main className='min-h-[calc(100vh-60px)] pt-16  bg-white'>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
