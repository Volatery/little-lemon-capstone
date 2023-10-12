import { useState } from 'react'
import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Highlights></Highlights>
    <About></About>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default App
