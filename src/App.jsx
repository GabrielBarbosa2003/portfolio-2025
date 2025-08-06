import { useEffect, useRef } from "react"
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

    function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 50);
  
      return () => clearTimeout(timeout); 
    }, [pathname]);
  
    return null;
  }

  return (
    <ReactLenis root options={{ autoRaf: false, smoothWheel: true }} ref={lenisRef}>
      <ScrollToTop/>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>


    </ReactLenis>

  )
}

export default App
