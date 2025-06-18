import { useRef } from 'react';
import './myservices.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
export default function MyServices() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

  const containerPinRef = useRef()

  const cardsRef = useRef([])

  const cards = ["Front-end", "Creative developer", "3D sites", "Three.js", "React"]




  function createPinning() {
    ScrollTrigger.create({
      trigger: containerPinRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: containerPinRef.current,
      pinSpacing: false,
      scrub: true,
      markers: true

    })

  }

  function cardsAnimation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerPinRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    tl.to(cardsRef.current, {
      yPercent: -50, // Translate by half the element’s height
      y: -0.5 * window.innerHeight, // Translate by half the screen’s height
      duration: 1,
      stagger: 0.12,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
    }, 'step') // The other 'step' tweens will start simultaneously in our timeline
    tl.to(cardsRef.current, {
      rotation: () => { return (Math.random() - 0.5) * 20 }, // Method to have a unique value per card
      stagger: 0.12,
      duration: 0.5, // Lasts half as long as the movement tween
      ease: 'power3.out', // Slows down towards the end of the rotation
    }, 'step')
    tl.to(cardsRef.current, {
      rotation: 0,
      stagger: 0.12,
      duration: 0.5, // Lasts half as long as the movement tween
      ease: 'power3.in', // Slows down at the beginning of the rotation
    }, 'step+=0.5') // Starts halfway through the movement tween

  }

  useGSAP(() => {

    gsap.set(cardsRef.current, {
      yPercent: 50,
      y: 0.5 * window.innerHeight,
    })

    createPinning()
    cardsAnimation()
  })

  return (
    <section className="services-container" ref={containerPinRef}>
      <div className="grid-global">
        <div className='title-services'>
          <h1>[My main services]</h1>
        </div>
        <div className='container-cards'>
          {cards.map((name, index) => (
            <div className="card" key={index} ref={((el) => cardsRef.current[index] = el)}>
              <p>{name}</p>
              <p>{name}</p>
            </div>
          ))}


        </div>

      </div>
    </section>
  )
}