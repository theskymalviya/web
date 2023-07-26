import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Navbar'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </>
  )
}

export default App