import { useRef } from "react"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import { useGSAP } from '@gsap/react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'

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
    <ReactLenis root options={{autoRaf:false, smoothWheel: true}} ref={lenisRef}>

      <NavBar />
      <Home />

    </ReactLenis>



  )
}

export default App
