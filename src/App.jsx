import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Register from './components/register/Register'

function App() {
  return (
    <>
    <Navbar />
    <About />
    </>
  )
}

export default App
