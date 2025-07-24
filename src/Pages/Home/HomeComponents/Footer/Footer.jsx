import './footer.css'
import arrowEmail from '../../../../assets/bottom/arrow-email.svg'
import arrowSocial from '../../../../assets/bottom/arrow-social.svg'
import dot from '../../../../assets/bottom/dot.png'
import letsTalk from '../../../../assets/bottom/lets-talk.svg'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import animateText from '../../../../services/animeTexts'
import { gsap } from "gsap";




export default function Footer() {
    const titleRef = useRef()
    const contactsRef = useRef()
    const availableRef = useRef()
    const localRef = useRef()

    function animateImagesFooter() {
        const images = [...document.querySelectorAll(".footer-home-container img")]

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: images,
                start: 'top bottom-=50px',
                end: 'bottom bottom',
            }
        })

        // tl.fromTo([images], {
        //     yPercent: 120,
        //     ease: "power2.inOut",
        // }, {
        //     yPercent: 0,
        //     ease: "power2.inOut",
        //     stagger: 0.003
        // })
    }


    useGSAP(() => {
        animateText(titleRef, contactsRef, availableRef, localRef)
        animateImagesFooter()
    }, [])

    return (
        <section className='footer-home-container'>
            <div className='grid-global'>
                <div className='head-text-bottom' ref={titleRef} id='contact'>
                    <h1>Dont be shy, if you have any project in mind,</h1> <br></br>
                    <span>Get in touch</span>
                </div>
                <div className='contacts-bottom' ref={contactsRef}>
                    <h2>New Projects / Bussines</h2>
                    <div className='contact-socials' >
                        <div className='email'>
                            <div className='bottom-email'>
                                <img src={arrowEmail} alt='arrow' />
                                <a href='mailto:gabrieldecarvalhu@gmail.com'><p>gabrieldecarvalhu@gmail.com</p></a>
                            </div>
                            <p className='number'>+55 (19)99483-3584</p>
                        </div>


                        <div className='grid-mobile-footer'>
                            <div className='social-bottom'>
                                <ul>
                                   <a href='https://www.instagram.com/gabriellbarbosa/' target='_blank'>
                                     <li>
                                        Instagram
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                   </a>
                                   <a href='https://www.linkedin.com/in/devgabrielbarbosa/' target='_blank'> 
                                     <li>
                                        LinkedIn
                                        <img src={arrowSocial} alt='arrow' />
                                    </li>
                                   </a>
                                   <a href='https://github.com/GabrielBarbosa2003' target='_blank'>
                                     <li>
                                        Github
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                   </a>
                                </ul>

                            </div>

                            <div className='social-bottom'>
                                <ul>
                                  <a href='#works'>
                                      <li>
                                        Work
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>
                                  </a>
                                    <a href='/about'>
                                        <li>
                                            About
                                            <img src={arrowSocial} alt='arrow' />

                                        </li>
                                    </a>
                                    <li>
                                        PlayGround
                                        <img src={arrowSocial} alt='arrow' />

                                    </li>

                                </ul>

                            </div>
                        </div>





                    </div>
                </div>
                <div className='available' ref={availableRef}>
                    <div className='work-available'>
                        <p>Available for work</p>
                        <img src={dot} alt='green dot' className='fade-in-out'/>
                    </div>
                    <p>Freelance, Full-time</p>
                </div>
                <div className='local-rights' ref={localRef}>
                    <p>Brazil-São Paulo</p>
                    <p>
                        © 2025 All rights reserved
                    </p>
                </div>
                <div className='lets-talk'>
                    <img src={letsTalk} alt='lets talk' className='logo' />
                </div>

            </div>
        </section>
    )
}