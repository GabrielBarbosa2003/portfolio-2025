import { useRef } from "react"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import About from './Pages/About'
import { useGSAP } from '@gsap/react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { Route, Router, Routes, useLocation } from 'react-router-dom'


function App() {
  const lenisRef = useRef()

  useGSAP(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    // return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false, smoothWheel: true }} ref={lenisRef}>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
      </Routes>


    </ReactLenis>

  )
}

export default App
