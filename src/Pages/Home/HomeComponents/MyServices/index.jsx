import { useRef } from 'react';
import './myservices.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { CustomEase } from "gsap/CustomEase";
import animateText from '../../../../services/animeTexts';
export default function MyServices() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

  const containerPinRef = useRef()
  const pinContainerRef = useRef()

  const cardsRef = useRef([])
  const titleRef = useRef()
  const textRef = useRef()

  const cards = ["Front-end", "Creative developer", "3D sites", "Three.js", "React"]




  function createPinning() {
    ScrollTrigger.create({
      trigger: containerPinRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinContainerRef.current,
      pinSpacing: false,
      scrub: true,
      markers: false

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
    console.log(-0.5 * window.innerHeight)

    tl.to(cardsRef.current, {
      yPercent: -200, // Translate by half the element’s height
      y: -0.5 * window.innerHeight, // Translate by half the screen’s height
      duration: 1,
      stagger: 0.12,
      ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
    }, 'step')
    tl.to(cardsRef.current, {
      rotation: () => { return (Math.random() - 0.5) * 10 },
      stagger: 0.12,
      duration: 0.5,
      ease: 'power3.out',
    }, 'step')
    tl.to(cardsRef.current, {
      rotation: 0,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power3.in',
    }, 'step+=0.5')

  }

  useGSAP(() => {

    gsap.set(cardsRef.current, {
      yPercent: 200,
      y: 0.5 * window.innerHeight,
    })
    animateText(titleRef, textRef)
    createPinning()
    cardsAnimation()
  })

  return (
    <section className="services-container" ref={containerPinRef}>
      <div className="grid-global">
        <div className='pin-container' ref={pinContainerRef}>


          <div className='title-services' ref={titleRef}>
            <h1>[My main services]</h1>
          </div>
          <div className='container-cards'>
            <div className='all-cards'>
              {cards.map((name, index) => (
                <div className="card" key={index} ref={((el) => cardsRef.current[index] = el)}>
                  <p>{name}</p>
                  <p>{name}</p>
                </div>
              ))}
            </div>

            <div className='text-services' ref={textRef}>
              <p>I create projects that have <span>life</span>, <span>body</span> and <span>heart</span>.</p>
            </div>


          </div>


        </div>


      </div>
    </section>
  )
}