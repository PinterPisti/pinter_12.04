import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'

import Home from './Home'
import Register from './Register'



function App() {

  return (
  <BrowserRouter>
  <nav>
    <NavLink to="/">Kezdőlap</NavLink> | {" "}
    <NavLink to="/register">Regisztráció</NavLink> | {" "}
  </nav>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
